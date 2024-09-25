1) Implement our famous endpoint /api/posts/
the endpoint should look for all the posts in the database, return them to the client side, and the client side should present them accordingly.
if there's less than 10 posts - the endpoint will fetch for additional posts from our randomuser API to complete to 10.

for example: if there's only 1 post in the db - we'll fetch for the randomuser API for 9 more results.
if there's 10 posts (or more) - we won't use the API

NOTE - you should update the client side fields to support the presenting of these cases