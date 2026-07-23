# lexxy-realtime (Rails gem)

The Rails half of [lexxy-realtime](https://github.com/jpcamara/lexxy-realtime):
collaborative editing for Lexxy (Action Text) with a model macro, a form
helper, an install generator, and server-side materialization of the
collaborative document back into Action Text, backed by
[yrby](https://github.com/jpcamara/yrby).

```ruby
class Post < ApplicationRecord
  has_collaborative_rich_text :body
end
```
```erb
<%= collaborative_rich_text_area form, :body %>
```

Full documentation, the demo app, and the JavaScript package live in the
[repository README](https://github.com/jpcamara/lexxy-realtime#readme).
