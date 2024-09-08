import express from 'express';
import cors from "cors"


const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
    origin: 'http://localhost:5173', // *will load post only on from port 5173
    optionsSuccessStatus: 200
  }
app.get('/', (req, res) =>{
    console.log(`New request from ip: ${req.ip}, method: ${req.method}, endpoint: ${req.url}`);
    console.log(req.headers)
    res.send('hello worlds')
})

app.get('/posts',cors(corsOptions), async (req, res) =>{
    try{
        const numberOfUsers = req.query.results;
        const response = await fetch('https://randomuser.me/api/?results='+numberOfUsers);
        const data = await response.json()
        res.status(200).send(data)

    }
    catch(e){
        res.status(503).send(`Randomuser server is down, please try again later. ${e}`)
    }
})




app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})
