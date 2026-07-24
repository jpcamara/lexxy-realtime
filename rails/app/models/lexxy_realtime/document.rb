# frozen_string_literal: true

module LexxyRealtime
  # One collaborative document per (record, name) — the structural twin of
  # ActionText::RichText, addressed the same way (polymorphic record + name).
  # Holds the collaboration bookkeeping: its updates (the CRDT log) and
  # materialized_at, the log version the stored attribute was last rendered
  # from. Destroying the record destroys the document, which sweeps the log.
  class Document < ActiveRecord::Base
    self.table_name = "lexxy_realtime_documents"

    belongs_to :record, polymorphic: true
    has_many :updates, class_name: "LexxyRealtime::Update", dependent: :delete_all
  end
end
