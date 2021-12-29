import axios from 'axios';

const API_KEY = 'b06bd1cccece485da5b223227212812';

const api = axios.create({
    baseURL:`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&lang=pt`,
  });

export default api;



