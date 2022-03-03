import {Platform} from 'react-native'

export const API_URL = 
//se estiver rodando no android será aberto na URL...
Platform.OS === 'android' ? 'http://localhost:19002/' : 'http://localhost:19002'