
import axios from './axios-lib-index';

async function test() {
  const axiosClient = axios.create({ baseURL: 'http://localhost:3000' });
  const response = await axiosClient.get('/api/posts/?limit=5');
  const data = response.data;
}


// then the library file will look like:

