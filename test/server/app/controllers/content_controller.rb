require "base64"

# Read/clear the durable server-side state for a document, so tests can assert
# what actually persisted (durability) independent of any connected client.
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
