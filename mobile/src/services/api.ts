import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.30.51.144:3333',
    timeout: 15000,
});

export default api;