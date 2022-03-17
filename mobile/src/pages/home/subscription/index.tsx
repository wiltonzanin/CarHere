import * as React from 'react';
import { WebView } from 'react-native-webview';


export default class App extends React.Component {
  render() {
    return (
      <WebView
        originWhitelist={['*']}
        
        source={{
          uri: 'http://10.30.56.34:4242/' // URL BASE
        }}
        javaScriptEnabled={true}
       // injectedJavaScript={WebAPICode}
      />
    );
  }
}