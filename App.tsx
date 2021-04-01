import React from 'react';
import { StatusBar } from 'react-native';
import AppStack from '../MeuPossante/src/routes/AppStack'

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent"  translucent/>
      <AppStack/>
    </>
  );
}
