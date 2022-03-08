import {Platform} from 'react-native'

export const API_URL = 
//se estiver rodando no android será aberto na URL...
Platform.OS === 'android' ? 'http://192.168.254.13:19000' : 'http://192.168.254.13:4242'