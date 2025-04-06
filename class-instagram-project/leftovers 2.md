1) Convert server to TS - V
2) Views - present customized views in case of 500 / 404 errors - V
3) Database, for: users, posts, activities? (for commercial purposes) V
  - models for users, posts
4) APIs (endpoints) V
  4.a) upload post
5) Registration v
6) Login - authentication mechanisem v
  - Authorization - the ability to perform user  operations after the authentication V
7) create post (and general) - present user namings & profile picture according to the real logged-in user in the context V
8) Optional features:
  - likes (fields: recievedUserId, giverUserId, date, postId), consider to put under posts model (depend on performance and analytical needs).
  const specificPostLikes = await likesModel.find({ postId: '' });
  - comments (fields: recievedUserId, giverUserId, date, postId, comment)
  - update profile page - present user data (from the token), verify each profile edit operation by the authMiddleware. prevend each user to edit any field (maybe some fields can be edited only by admins)
  - permissions - users that are admins, and what are their permissions
  - followers
  - share
  - tag people


