import * as React from 'react';
import { WebView } from 'react-native-webview';


export default class App extends React.Component {
  render() {
    return (
      //renderiza componentes web em uma View do react native
      <WebView
        originWhitelist={['*']}
        
        source={{
          //carrega o arquivo local da página de pagamento
          //utilizado o ip do computador que está rodando o expo 
          //+ porta definida no backend
          uri: 'http://192.168.254.13:4242/' // URL BASE
          // uri: 'http://10.30.56.154:4242/' // URL BASE
        }}
        //usado para habilitar o JavaScript na webview
        //deve ser habilitado no Android, no IOS já vem habilitado por padrão
        javaScriptEnabled={true}
       // injectedJavaScript={WebAPICode}
      />
    );
  }
}