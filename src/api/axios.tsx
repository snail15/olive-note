import axios from 'axios';

const BASE_URL = 'https://olivenote-2b231-default-rtdb.firebaseio.com';

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});
