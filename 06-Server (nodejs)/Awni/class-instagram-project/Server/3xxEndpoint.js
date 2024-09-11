/**
 1) Develop an endpoint that redirects with 3xx status code, the endpoint should be GET method
open the browser, open the network (under "inspect")
write on the navigation line the http://localhost:3000/<YOUR-3XX-ENDPOINT>
press enter to perform the GET request from the browsers.
see that the status code of the first call is 3xx
see that your browser automatically did another request to the second redirected website (you put in the "location" header)
 */

import express from 'express';
const app = express();
const port = 3000;

app.use(express.json());

app.get('/redirect', (req, res) => {
    res.redirect(301, 'https://www.google.com');// redirect to google with 301 status code (permanent redirect) .

});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

export default app;


//2) what is middlewares: 
// Middlewares are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle. The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.
// הן פונקציות שיש להן גישה לאובייקט הבקשה (req), לאובייקט התגובה (res), ולפונקציה הבאה במחזור הבקשה-תגובה של היישום. הפונקציה הבאה היא פונקציה בנתב ה-Express אשר, כאשר היא מופעלת, מבצעת את תוכנת התווך בעקבות התווך הנוכחית.
// middleware functions can perform the following tasks:
//פונקציות תווך יכולות לבצע את המשימות הבאות
// Execute any code. // לבצע קוד כלשהו
// Make changes to the request and the response objects. // לבצע שינויים באובייקטי הבקשה והתגובה
// End the request-response cycle.// לסיים את מחזור הבקשה-תגובה
// Call the next middleware function in the stack. // לקרוא לפונקציית התווך הבאה במחסנית
// If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.
// An Express application can use the following types of middleware:
// Application-level middleware
// Router-level middleware
// Error-handling middleware
// Built-in middleware
// Third-party middleware
// You can use them in the following way:
// app.use((req, res, next) => {
//     console.log('This is a middleware function');
//     next();
// });