import { extendTheme } from '@chakra-ui/react'

//substituir
export const theme = extendTheme({
  colors:{
    gray: {
      "900": "#252525",
      "800" : "#333333",
      "700" : "#353646",
      "600" : "#4b4d63",
      "500" : "#616480",
      "400" : "#797d9a",
      "300" : "#9699b0",
      "200" : "#b3b5c6",
      "100" : "#d1d2dc",
      "50" : "#eeeef2",
    }
  },
  fonts: {
    heading: 'Rajdhani',
    body: 'Rajdhani'
  },
  //os temas
  styles:{
    //globais
    global: {
      //para que o body tenha
      body:{
        bg: 'gray.900',
        color:'gray.50'
      }
    }
  }
})