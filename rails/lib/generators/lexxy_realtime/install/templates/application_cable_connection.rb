# frozen_string_literal: true

module ApplicationCable
  class Connection < ActionCable::Connection::Base
    # Expose the current user to DocumentChannel#authorized?:
    #
    #   identified_by :current_user
    #
    #   def connect
    #     self.current_user = User.find_by(id: cookies.signed[:user_id]) || reject_unauthorized_connection
    #   end
  end
end
