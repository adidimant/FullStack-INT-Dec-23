import axios from 'axios';

const API_KEY = 'YOUR_API_KEY'; // You'll need to get an API key from a currency API provider
const BASE_URL = 'https://api.exchangerate-api.com/v4/latest';

export const getCurrencyRates = async (baseCurrency: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/${baseCurrency}`);
    return response.data.rates;
  } catch (error) {
    console.error('Error fetching currency rates:', error);
    throw error;
  }
};