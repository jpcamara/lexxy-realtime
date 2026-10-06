require "base64"

# Reads and clears a document's stored state, so tests can check what the
# server saved without going through a connected client.
class ContentController < ActionController::Base
  def show
    state = FileStore.replay(params[:id])
    render json: { state: state ? Base64.strict_encode64(state) : nil }
  end

  def reset
    FileStore.clear(params[:id])
    head :no_content
  end
end
