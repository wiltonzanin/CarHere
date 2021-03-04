import React from 'react';
import { StatusBar } from 'react-native';
import Home from '../MeuPossante/src/pages/home'

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
      <Home/>
    </>
  );
}
