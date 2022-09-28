import axios from 'axios';


//onst apimodelo = axios.create({

  //  baseURL:'https://parallelum.com.br/fipe/api/v1/carros/marcas/',

    //timeout: 15000,
//});

const api = axios.create({
 
    //utilizado o ip do computador/servidor que está sendo executado
    // baseURL: 'http://192.168.0.66:3333',
    //baseURL: 'http://192.168.0.37:3333',
    // baseURL: 'http://127.0.0.1:3333',
    baseURL: 'https://parallelum.com.br/fipe/api/v1/carros/',
   
});

export default api;
