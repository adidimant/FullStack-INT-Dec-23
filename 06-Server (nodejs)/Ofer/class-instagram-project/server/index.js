import express from 'express';


const app = express();
const port = process.env.PORT || 3000;


app.get('/', (req, res) =>{
    console.log(`New request from ip: ${req.ip}, method: ${req.method}, endpoint: ${req.url}`);
    console.log(req.headers)
    res.send('hello worlds')
})



app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})
