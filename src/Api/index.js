import axios from 'axios';

const API_KEY = 'PUT_HERE_YOUR_API_KEY';

const api = axios.create({
    baseURL:`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&lang=pt`,
  });

export default api;



