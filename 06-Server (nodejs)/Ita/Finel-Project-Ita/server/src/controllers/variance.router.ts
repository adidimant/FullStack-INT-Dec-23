import express from 'express';
import axios from 'axios';



const varianceRouter = express.Router();

varianceRouter.get('/exchange-rates', async (req, res) => {
    try {
      const response = await axios.get('https://boi.org.il/PublicApi/GetExchangeRates');
      res.json(response.data);
    } catch (error) {
      console.error('Error fetching exchange rates:', error);
      res.status(500).json({ error: 'Failed to fetch exchange rates' });
    }
  });

  export default varianceRouter;