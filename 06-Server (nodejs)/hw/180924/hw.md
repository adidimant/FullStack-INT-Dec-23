1) Create a view in the server for internal-server-error.
for every unexpected error - response with status 500, and render the view 'internal-server-error'

2) Create an online (public) mongodb instance of your own in Atlas.
the goal - you'll have a url of your database, and try to connect it from the server (just provide it to the mongoose.connect('your-url') method)