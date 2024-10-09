const express = require('express') // יבוא אקספרס
const app = express() // מייצר אינסטנס חדש של אפליקציה
const port = 3000 // מגדיר פורט
app.get('/', (req, res) => { // נתיב דיפולטיבי /
    console.log(`New request from ip: ${req.ip}, method: ${req.method}, endpoint: ${req.url}. headers: ${JSON.stringify(req.headers)}`);  res.send('Hello World!')
}) // בקשת handpoint, בקשת http בבקשת get ביחד עם הנתיב

app.listen(port, () => { // על איזה פורט השרת שלי מאזין
  console.log(`Example app listening on port ${port}`) // פונקציה שיקראו לה אחרי שהשרת יעלה
}) // pubemhh, euk ctepwd