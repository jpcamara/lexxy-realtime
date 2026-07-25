# frozen_string_literal: true

module ApplicationCable
  class Connection < ActionCable::Connection::Base
    # Identify who is on this cable so DocumentChannel#authorized? can check
    # them against the record:
    #
    #   identified_by :current_user
    #
    #   def connect
    #     self.current_user = User.find_by(id: cookies.signed[:user_id]) || reject_unauthorized_connection
    #   end
  end
end
