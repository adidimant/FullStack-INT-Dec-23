const express = require('express')
const cors = require('cors');
const app = express()
const port = 3000

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173' // Allow requests from your frontend
}));

app.get('/posts', async (req, res) => {
  try{
    const response = await fetch('https://randomuser.me/api/?results=2'); // Fetch posts from the API.
    const data = await response.json(); // Parse the response as JSON.
    res.json([...data.results]);
  }catch{
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})