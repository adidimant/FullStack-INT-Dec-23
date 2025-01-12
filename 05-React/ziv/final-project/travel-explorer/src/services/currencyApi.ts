import axios from 'axios';

const API_KEY = '2514a30c5446960118ca750c';
const BASE_URL = 'https://v6.exchangerate-api.com/v6';

export const getCurrencyRates = async (baseCurrency: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/${API_KEY}/latest/${baseCurrency}`);
    return response.data.conversion_rates;
  } catch (error) {
    console.error('Error fetching currency rates:', error);
    throw new Error('Failed to fetch currency rates');
  }
};