# The whole collaborative-document server: include Y::ActionCable::Sync and
# wire durability. Memory backend (default) keeps a warm replica per process; the
# on_change recorder makes this the authoritative, record-before-distribute
# path, and on_load rebuilds a document from the durable log on a cold start or
# after idle eviction. That's the durability the lexxy-realtime tests exercise.
class DocumentChannel < ApplicationCable::Channel
  include Y::ActionCable::Sync

  on_load  { |key| FileStore.replay(key) }
  on_change { |key, update| FileStore.record(key, update) }

  def subscribed
    sync_subscribed params[:id]
  end

  def receive(data)
    sync_receive(data, params[:id])
  end
end
