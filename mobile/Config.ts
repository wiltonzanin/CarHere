import {Platform} from 'react-native'

export const API_URL = 
//se estiver rodando no android será aberto na URL...
//Platform.OS === 'android' ? 'http://192.168.31.105:4242' : 'http://192.168.31.105:4242'
Platform.OS === 'android' ? 'http://10.10.1.11:4242' : 'http://10.10.1.11:4242'