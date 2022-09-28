import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Index from '../mobile/src/routes/index'
import { AuthProvider } from './src/contexts/auth';

export default function App() {

  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
        <Index />
      </AuthProvider>
    </NavigationContainer>
  );
}
