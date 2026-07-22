# frozen_string_literal: true

require "minitest/autorun"
require "active_record"
require "active_job"
require "global_id"
require "y"
require "lexxy_realtime"
require_relative "../app/models/lexxy_realtime/update"

# The suite runs against real ActiveRecord (in-memory SQLite), real yrby
# rendering (a captured Lexxy editor session fixture), and a real signed
# GlobalID setup — without booting a Rails app. Action Text itself isn't
# loaded here (the demo app covers that integration); the collaborative
# attribute writes through the regular attribute writer either way.
ActiveRecord::Base.establish_connection(adapter: "sqlite3", database: ":memory:")
ActiveRecord::Schema.verbose = false
ActiveRecord::Schema.define do
  create_table :posts, force: true do |t|
    t.string :title
    t.text :body
    t.timestamps
  end

  create_table :lexxy_realtime_updates, force: true do |t|
    t.binary :payload, null: false
    t.string :document_key, null: false, index: true
    t.datetime :created_at, null: false
  end
end

GlobalID.app = "lexxy-realtime-test"
SignedGlobalID.app = "lexxy-realtime-test"
SignedGlobalID.verifier = GlobalID::Verifier.new("lexxy-realtime-test-secret")

ActiveJob::Base.queue_adapter = :test
ActiveJob::Base.logger = Logger.new(File::NULL)

class Post < ActiveRecord::Base
  include GlobalID::Identification
  include LexxyRealtime::Collaborative

  has_collaborative_rich_text :body
end

# A store double implementing the load/append contract, for the
# store-swap config test. Everything else runs against the real
# LexxyRealtime::Update model.
class TestStore
  class << self
    def documents = @documents ||= Hash.new { |h, k| h[k] = [] }
    def reset! = @documents = nil
    def append(key, update) = documents[key] << update

    def load(key)
      updates = documents[key]
      return nil if updates.empty?

      doc = Y::Doc.new
      updates.each { |u| doc.apply_update(u) }
      doc.encode_state_as_update
    end
  end
end

FIXTURES = File.expand_path("fixtures", __dir__)

def lexxy_full_state = File.binread(File.join(FIXTURES, "lexxy_full.bin"))
def lexxy_full_html = File.read(File.join(FIXTURES, "lexxy_full.html")).chomp
