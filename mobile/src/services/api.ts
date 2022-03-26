import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.30.53.80:3333',
    timeout: 15000,
});

export default api;