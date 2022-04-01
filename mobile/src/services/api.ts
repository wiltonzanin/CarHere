import axios from 'axios';

const api = axios.create({
 
    //utilizado o ip do computador/servidor que está sendo executado
    baseURL: 'http://10.30.51.154:3333',
    timeout: 15000,
});

export default api;