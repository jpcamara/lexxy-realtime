# Who shows up on cursors. The demo has no authentication, so each
# browser session keeps one stable guest name. Without this override,
# the default identity reads current_user.name, username, or handle.
LexxyRealtime.identity = lambda do |view|
  { name: view.session[:collaborator_name] ||= "Guest #{rand(1000)}", color: nil }
end
