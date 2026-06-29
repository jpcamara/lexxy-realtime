require "base64"
require "fileutils"

# Dead-simple durable log for the test server: every recorded CRDT delta is
# appended (base64, one per line) to a per-document file, so state survives idle
# eviction and full server restarts. `replay` merges the log back into a single
# update by applying it to a fresh yrby Doc -- the same record-then-replay
# model yrby's authoritative mode is built around.
module FileStore
  DIR = File.expand_path("../data", __dir__)

  module_function

  def path(key)
    safe = key.to_s.gsub(/[^a-zA-Z0-9_-]/, "_")
    File.join(DIR, "#{safe}.log")
  end

  def record(key, update)
    FileUtils.mkdir_p(DIR)
    File.open(path(key), "ab") { |f| f.puts(Base64.strict_encode64(update)) }
  end

  # The merged durable state for a key, or nil if nothing has been recorded.
  def replay(key)
    file = path(key)
    return nil unless File.exist?(file)

    doc = Y::Doc.new
    applied = false
    File.foreach(file) do |line|
      line = line.strip
      next if line.empty?

      doc.apply_update(Base64.strict_decode64(line))
      applied = true
    end
    applied ? doc.encode_state_as_update : nil
  end

  def clear(key)
    file = path(key)
    File.delete(file) if File.exist?(file)
  end
end
