1) Create a single Post page, the page should be focused about one specific post, with more details, you should transfer to this page the content of the posts it presents (using prop of the data)
in the future - we'll provide just the postId in the url
2) Implement express middlewear for rate-limiting by IP and by user-agent (put the middlewear under the 'guards' folder and import from there)
it means you should track after requests from the same IPs and the same userAgent over time windows.
The relevant time windows (left side is seconds right side is request amount):
{ 1: 5, 5: 8, 10: 12, 20: 15, 30: 18, 60: 20, 1800: 150, 3600: 300 }
example - if a request from the same IP reached over 5 requests per 5 seconds - block the request by returning the proper 4xx status code (search for it) with a response message ('Too many requests!').
This middleware should be the first one to run! before any of the internal data middlewares