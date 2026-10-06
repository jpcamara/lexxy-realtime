# The refresh URL for <yrby-document refresh="/grant/...">. A test page can
# start with a grant the channel rejects and point refresh here to get a
# working one.
class GrantsController < ActionController::Base
  def show
    render json: { grant: params[:grant] }
  end
end
