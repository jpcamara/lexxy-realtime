// Test orchestrator. Boots the yrby test server, runs the headless
// durability suite and/or the agent-browser editor e2e against it, then tears
// the server down.
//
//   npm test            # headless + browser
//   npm run test:headless
//   npm run test:browser
import { spawn, spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { rmSync, mkdirSync, readdirSync } from "node:fs";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");
const serverDir = join(here, "server");
const PORT = process.env.PORT || "4111";
const BASE = `http://localhost:${PORT}`;

const args = process.argv.slice(2);
const runHeadless = args.length === 0 || args.includes("--headless");
const runBrowser = args.length === 0 || args.includes("--browser");
// The AnyCable leg re-runs the suites through a real anycable-go gateway +
// RPC server. In a no-flag full run it goes when anycable-go and redis are
// present and is skipped loudly otherwise; --anycable makes it mandatory.
const runAnycable = args.length === 0 || args.includes("--anycable");

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const run = (cmd, cmdArgs, opts = {}) =>
  spawnSync(cmd, cmdArgs, { stdio: "inherit", env: { ...process.env, PORT }, ...opts });

async function waitForServer(ms = 30000) {
  const end = Date.now() + ms;
  while (Date.now() < end) {
    try {
      const res = await fetch(`${BASE}/up`);
      if (res.ok) return true;
    } catch {
      // not up yet
    }
    await sleep(300);
  }
  return false;
}

// Fresh durable store each run.
const dataDir = join(serverDir, "data");
rmSync(dataDir, { recursive: true, force: true });
mkdirSync(dataDir, { recursive: true });

// A stale server squatting the port makes waitForServer pass against the
// wrong process while our own puma dies on bind. Fail fast instead.
try {
  await fetch(`${BASE}/up`, { signal: AbortSignal.timeout(1000) });
  console.error(`FAILED: something is already listening on :${PORT}; kill it first (lsof -ti :${PORT})`);
  process.exit(1);
} catch {
  // nothing there: good
}

console.log(`> booting yrby test server on :${PORT}`);
const server = spawn("bundle", ["exec", "puma", "-p", PORT, "config.ru"], {
  cwd: serverDir,
  env: { ...process.env, RAILS_ENV: "development", LOG_LEVEL: "error" },
  stdio: "ignore",
});

let exitCode = 0;
const shutdown = () => {
  try {
    server.kill("SIGTERM");
  } catch {
    // already gone
  }
};
process.on("exit", shutdown);
process.on("SIGINT", () => {
  shutdown();
  process.exit(130);
});

try {
  if (!(await waitForServer())) {
    console.error("FAILED: test server did not come up");
    process.exit(1);
  }

  if (runHeadless) {
    console.log("\n=== README JS examples ===");
    if (run("node", [join(here, "docs", "readme_js_examples.mjs")]).status !== 0) exitCode = 1;

    console.log("\n=== type declarations (tsc) ===");
    if (run("npx", ["tsc", "-p", join(here, "types")]).status !== 0) exitCode = 1;

    console.log("\n=== headless durability suite ===");
    for (const name of ["convergence", "durability", "loss"]) {
      console.log(`\n--- ${name} ---`);
      const r = run("bun", [join(here, "headless", `${name}.mjs`)]);
      if (r.status !== 0) exitCode = 1;
    }
  }

  if (runBrowser) {
    console.log("\n=== building browser test bundle ===");
    if (run("npm", ["run", "build:test"], { cwd: root }).status !== 0) exitCode = 1;
    console.log("\n=== browser editor e2e (agent-browser) ===");
    if (run("node", [join(here, "browser", "e2e.mjs")]).status !== 0) exitCode = 1;
    spawnSync("npx", ["agent-browser", "close", "--all"], { stdio: "ignore" });
    console.log("\n=== browser cursor edge cases (agent-browser) ===");
    if (run("node", [join(here, "browser", "cursors.mjs")]).status !== 0) exitCode = 1;
    spawnSync("npx", ["agent-browser", "close", "--all"], { stdio: "ignore" });
    console.log("\n=== element lifecycle (agent-browser) ===");
    if (run("node", [join(here, "browser", "lifecycle.mjs")]).status !== 0) exitCode = 1;
    spawnSync("npx", ["agent-browser", "close", "--all"], { stdio: "ignore" });
    console.log("\n=== import-map assets e2e (agent-browser) ===");
    // Build straight into the test server's public directory, so test
    // runs never rewrite the committed gem assets.
    const importmapAssets = join(serverDir, "public", "importmap-assets");
    rmSync(importmapAssets, { recursive: true, force: true });
    const importmapBuild = run("npm", ["run", "build:importmap"], {
      cwd: root,
      env: { ...process.env, PORT, IMPORTMAP_ASSETS_OUT: importmapAssets },
    });
    if (importmapBuild.status !== 0) exitCode = 1;
    if (run("node", [join(here, "browser", "importmap.mjs")]).status !== 0) exitCode = 1;
    spawnSync("npx", ["agent-browser", "close", "--all"], { stdio: "ignore" });
  }

  if (runAnycable) {
    const explicit = args.includes("--anycable");
    const REDIS_URL = process.env.ANYCABLE_REDIS_URL || "redis://localhost:6379/9";
    const goOk = spawnSync("anycable-go", ["--version"], { stdio: "ignore" }).status === 0;
    const redisOk = goOk && spawnSync("redis-cli", ["-u", REDIS_URL, "ping"], { stdio: "ignore" }).status === 0;
    if (!goOk || !redisOk) {
      const why = goOk ? `redis not reachable at ${REDIS_URL}` : "anycable-go not on PATH";
      if (explicit) {
        console.error(`\nFAILED: AnyCable e2e requested but ${why}`);
        exitCode = 1;
      } else {
        console.log(`\n=== AnyCable e2e === SKIPPED (${why})`);
      }
    } else {
      console.log("\n=== AnyCable e2e (anycable-go gateway + RPC server) ===");
      shutdown(); // the async-adapter server; the AnyCable page server takes its port

      const WS_PORT = process.env.ANYCABLE_WS_PORT || "8081";
      const RPC_PORT = process.env.ANYCABLE_RPC_PORT || "50061";
      const RPC_HEALTH_PORT = process.env.ANYCABLE_RPC_HEALTH_PORT || "54061";
      const CABLE_URL = `ws://localhost:${WS_PORT}/cable`;
      const anyEnv = {
        ...process.env,
        RAILS_ENV: "development",
        LOG_LEVEL: "error",
        CABLE_ADAPTER: "any_cable",
        ANYCABLE_RPC_HOST: `127.0.0.1:${RPC_PORT}`,
        ANYCABLE_BROADCAST_ADAPTER: "redis",
        ANYCABLE_REDIS_URL: REDIS_URL,
        // The RPC server's own HTTP health endpoint. The go gateway reports
        // healthy before its RPC link is up, so readiness gates on this too;
        // otherwise the first suite's subscribes race the RPC boot and die.
        ANYCABLE_HTTP_HEALTH_PORT: RPC_HEALTH_PORT,
      };
      const stack = [
        spawn("bundle", ["exec", "puma", "-p", PORT, "config.ru"], { cwd: serverDir, env: anyEnv, stdio: "ignore" }),
        spawn("bundle", ["exec", "anycable"], { cwd: serverDir, env: anyEnv, stdio: "ignore" }),
        spawn("anycable-go", [
          "--host=127.0.0.1",
          `--port=${WS_PORT}`,
          `--rpc_host=127.0.0.1:${RPC_PORT}`,
          "--broadcast_adapter=redis",
          `--redis_url=${REDIS_URL}`,
        ], { stdio: "ignore" }),
      ];
      const stopStack = () => stack.forEach((p) => { try { p.kill("SIGTERM"); } catch { /* gone */ } });
      process.on("exit", stopStack);
      try {
        const gatewayUp = async (ms = 30000) => {
          const end = Date.now() + ms;
          while (Date.now() < end) {
            try {
              const [pages, gw, rpc] = await Promise.all([
                fetch(`${BASE}/up`),
                fetch(`http://localhost:${WS_PORT}/health`),
                fetch(`http://localhost:${RPC_HEALTH_PORT}/health`),
              ]);
              if (pages.ok && gw.ok && rpc.ok) return true;
            } catch { /* not up yet */ }
            await sleep(300);
          }
          return false;
        };
        if (!(await gatewayUp())) {
          console.error("FAILED: AnyCable stack did not come up");
          exitCode = 1;
        } else {
          console.log("\n--- headless durability suite over anycable-go ---");
          for (const name of ["convergence", "durability", "loss"]) {
            console.log(`\n--- ${name} (anycable) ---`);
            const r = run("bun", [join(here, "headless", `${name}.mjs`)], { env: { ...process.env, PORT, CABLE_URL } });
            if (r.status !== 0) exitCode = 1;
          }

          console.log("\n--- @anycable/web consumer, runtime (headless) ---");
          const ac = run("bun", [join(here, "headless", "anycable_client.mjs")], { env: { ...process.env, PORT, CABLE_URL } });
          if (ac.status !== 0) exitCode = 1;

          console.log("\n--- browser editor e2e over anycable-go (agent-browser) ---");
          if (run("npm", ["run", "build:test"], { cwd: root }).status !== 0) exitCode = 1;
          const be = run("node", [join(here, "browser", "e2e.mjs")], { env: { ...process.env, PORT, CABLE_WS_URL: CABLE_URL } });
          if (be.status !== 0) exitCode = 1;
          spawnSync("npx", ["agent-browser", "close", "--all"], { stdio: "ignore" });
        }
      } finally {
        stopStack();
      }
    }
  }
} finally {
  shutdown();
}

console.log(exitCode === 0 ? "\nALL TESTS PASSED" : "\nTESTS FAILED");
process.exit(exitCode);
