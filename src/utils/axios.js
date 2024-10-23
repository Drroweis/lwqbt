import axios from 'axios';

// Update baseURL to use the production URL
const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3000/api', // Use an environment variable for production
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default instance;
