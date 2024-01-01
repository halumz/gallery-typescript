import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'e214a4a8b90a4887a5190b1eeeef8f88',
  },
});
