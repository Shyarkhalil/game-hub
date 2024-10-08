import axios from 'axios';
// console.log(process.env.REACT_APP_API_KEY); // Should print your API key
const apiKey = 'd774425cce5a4bbf9da467a01ff5c633';

if (!apiKey) {
  throw new Error(
    'API Key is missing. Make sure you have the REACT_APP_API_KEY set in your .env file.'
  );
}

const apiClient = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: apiKey,
  },
});

export default apiClient;
