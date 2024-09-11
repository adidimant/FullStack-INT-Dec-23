1) Develop an endpoint that redirects with 3xx status code, the endpoint should be GET method
open the browser, open the network (under "inspect")
write on the navigation line the http://localhost:3000/<YOUR-3XX-ENDPOINT>
press enter to perform the GET request from the browsers.
see that the status code of the first call is 3xx
see that your browser automatically did another request to the second redirected website (you put in the "location" header)
2) read about middlewares:
  a) https://expressjs.com/en/guide/writing-middleware.html
  b) https://expressjs.com/en/guide/using-middleware.html
3) Create a single Post page, the page should be focused about one specific post, with more details, you should transfer to this page the content of the posts it presents (using prop of the data)


next lesson
1) convert server to TypeScript!
2) middlewares
3) support views
4) static files
