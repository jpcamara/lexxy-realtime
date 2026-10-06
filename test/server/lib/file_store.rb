require "base64"
require "fileutils"

# A simple update log for the test server. Each recorded update is appended to
# a per-document file as one base64 line, so documents survive idle eviction
# and server restarts. `replay` applies the log to a new yrby Doc and returns
# the result as a single update.
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

  # Returns the merged state for a key, or nil if nothing has been recorded.
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
