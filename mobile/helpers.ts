import { Alert } from "react-native"
import {API_URL} from "./Config"

export async function FetchPublishableKey(){
  try{
    const response = await fetch(`${API_URL}/config`)
    const {publishableKey} = await response.json()
    return publishableKey
  }catch(e){
    console.log(e)
    console.warn('unable to fetch. Is you runing the server?')
    Alert.alert('Error', 'unable to fetch. Is you runing the server?')
  }
}