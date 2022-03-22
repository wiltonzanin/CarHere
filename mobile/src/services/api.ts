import axios from 'axios';

const api = axios.create({
    //utilizado o ip do computador/servidor que está sendo executado
    // baseURL: 'http://192.168.0.66:3333',
    baseURL: 'http://192.168.254.13:3333',
    // baseURL: 'http://127.0.0.1:3333',
    timeout: 15000,
});

export default api;