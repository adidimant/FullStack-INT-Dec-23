import express from 'express';
import axios from 'axios';
import https from 'https';

const postsRouter = express.Router();



postsRouter.get('/', async (req, res) => {
  console.log(`Received request: Method: ${req.method}, Endpoint: ${req.url}`);
  console.log(`Headers: ${JSON.stringify(req.headers)}`);

  // Validate and parse the query parameter
  const results = parseInt(req.query.results, 10);
  console.log(`Parsed results parameter: ${results}`);

  if (isNaN(results) || results <= 0 || results > 100) {
    console.log('Invalid results parameter detected');
    return res.status(400).json({ error: "`results` query param must be a number between 1 and 100." });
  }

  try {
    // Configure Axios to ignore SSL certificate validation
    const agent = new https.Agent({  
      rejectUnauthorized: false // Disable SSL certificate verification
    });

    console.log(`Fetching data from external API with results=${results}`);
    const response = await axios.get(`https://randomuser.me/api/?results=${results}`, { httpsAgent: agent });
    
    console.log('Received data from external API:', response.data);

    if (response.data && Array.isArray(response.data.results)) {
      res.json(response.data.results);
    } else {
      console.error('Unexpected data structure from external API:', response.data);
      res.status(500).json({ error: 'Unexpected data structure from API' });
    }
  } catch (err) {
    console.error('Error occurred while fetching data:', err.message);
    if (err.response) {
      console.error('Error status:', err.response.status);
      console.error('Error response data:', err.response.data);
    }
    res.status(500).json({ error: 'Failed to fetch data from external API' });
  }
});

export default postsRouter;
