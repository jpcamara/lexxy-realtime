# frozen_string_literal: true

require "minitest/autorun"
require "active_record"
require "active_job"
require "action_cable"
require "global_id"
require "y"
require "y/action_cable"
require "lexxy_realtime"
# Load the yrby models directly because this test helper does not boot
# the engine.
yrby_rails = Gem.loaded_specs.fetch("yrby-rails").full_gem_path
require File.join(yrby_rails, "app/models/y/document")
require File.join(yrby_rails, "app/models/y/document_update")
require File.join(yrby_rails, "app/models/y/encrypted_document")
require File.join(yrby_rails, "app/models/y/encrypted_document_update")

# Use in-memory Active Record, yrby rendering fixtures, and signed
# GlobalIDs without booting Rails. The engine boot test covers the Action
# Text integration.
ActiveRecord::Base.establish_connection(adapter: "sqlite3", database: ":memory:")
# Test-only keys so encrypted collaborative attributes can round-trip.
ActiveRecord::Encryption.configure(
  primary_key: "test-primary-key" * 2,
  deterministic_key: "test-deterministic-key" * 2,
  key_derivation_salt: "test-key-derivation-salt" * 2
)
ActiveRecord::Schema.verbose = false
ActiveRecord::Schema.define do
  create_table :posts, force: true do |t|
    t.string :title
    t.text :body
    t.timestamps
  end

  create_table :y_documents, force: true do |t|
    t.string :key, null: false, index: { unique: true }
    t.references :record, polymorphic: true, null: true
    t.string :name
    t.binary :state
    t.timestamps
    t.index %i[record_type record_id name], unique: true
  end

  create_table :y_document_updates, force: true do |t|
    t.references :document, null: false
    t.binary :payload, null: false
    t.boolean :pending, null: false, default: false
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

  # Stub has_rich_text so this model exercises the Action Text branch of
  # the macro.
  def self.has_rich_text(name, **); end

  has_collaborative_rich_text :body

  # Match Action Text's writer, which reads the attribute while finding
  # or building the rich text record. This catches recursive
  # materialization.
  def body=(value)
    body
    super
  end
end

# PlainPost exercises the macro without Action Text and writes to the
# body column directly.
class PlainPost < ActiveRecord::Base
  self.table_name = "posts"
  include LexxyRealtime::Collaborative

  has_collaborative_rich_text :body
end

# A store double implementing the load/append contract, for the
# store-swap config test. Everything else runs against the real
# Y::DocumentUpdate model.
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
