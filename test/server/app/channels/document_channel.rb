# The test server's only channel. It uses Y::ActionCable::Sync with the
# default memory backend, which keeps a copy of each open document in the
# process. on_change stores each change before the server relays it, and
# on_load rebuilds a document from the stored log on a cold start or after
# the backend evicts an idle document.
class DocumentChannel < ApplicationCable::Channel
  include Y::ActionCable::Sync

  on_load  { |key| FileStore.replay(key) }
  on_change { |key, update| FileStore.record(key, update) }

  def subscribed
    sync_subscribed document_key
  end

  def receive(data)
    sync_receive(data, document_key)
  end

  private

  # The headless suites subscribe a YrbyProvider with { id: room }.
  # <yrby-document> subscribes with { grant:, name: }. There are no real
  # grants here, so the key is built from both.
  def document_key
    params[:id] || "#{params[:grant]}:#{params[:name]}"
  end

  # A local test server with no users, so every client may edit. A grant
  # that starts with "reject" stands in for an expired or revoked one.
  def authorized?(_key = nil) = !params[:grant].to_s.start_with?("reject")
end
