# Who shows up on cursors. The demo has no authentication, so each browser
# session gets a stable guest name; a real app returns current_user here
# (which is the default when this initializer is absent).
LexxyRealtime.identity = lambda do |view|
  { name: view.session[:collaborator_name] ||= "Guest #{rand(1000)}", color: nil }
end
