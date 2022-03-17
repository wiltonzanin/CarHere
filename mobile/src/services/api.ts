import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.66:3333',
    timeout: 15000,
});

export default api;