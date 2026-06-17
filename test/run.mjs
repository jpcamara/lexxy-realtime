// Test orchestrator. Boots the yrb-lite test server, runs the headless
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

console.log(`> booting yrb-lite test server on :${PORT}`);
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
  }
} finally {
  shutdown();
}

console.log(exitCode === 0 ? "\nALL TESTS PASSED" : "\nTESTS FAILED");
process.exit(exitCode);
