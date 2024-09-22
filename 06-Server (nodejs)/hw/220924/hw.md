1) Create a view in the server for internal-server-error.
for every unexpected error - response with status 500, and render the view 'internal-server-error'

2) Create an online (public) mongodb instance of your own in Atlas.
the goal - you'll have a url of your database, and try to connect it from the server (just provide it to the mongoose.connect('your-url') method)

-- new from 22/09/24:
3) Create a new (react) page for uploading post

4) Create an endpoint for uploading a new post (inside the postsRouter), the http method should be PUT
make sure you interact with the database:
  - Build a new post, with random uuid (for the post id field) - search on the internet how to generate new uuid
  - save it in the db

Note - this HW doesn't include uploading a photo!