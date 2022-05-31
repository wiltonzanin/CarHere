import * as React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { WebView } from 'react-native-webview';
import BackButton from '../../../components/backScreen'
import styles from '../styles'

export default class App extends React.Component {
  
  render() {
    return (
      //renderiza componentes web em uma View do react native
      <View style={styles.container}>
        <BackButton /> 
      <WebView
        originWhitelist={['*']}
        source={{
          //carrega o arquivo local da página de pagamento
          //utilizado o ip do computador que está rodando o expo 
          //+ porta definida no backend
          uri: 'http://192.168.254.3:4242/' // URL BASE
          // uri: 'http://10.30.56.5:4242/' // URL BASE
          
        }}
        //usado para habilitar o JavaScript na webview
        //deve ser habilitado no Android, no IOS já vem habilitado por padrão
        javaScriptEnabled={true}
        // injectedJavaScript={WebAPICode}
        />
        </View>
    );
  }
}