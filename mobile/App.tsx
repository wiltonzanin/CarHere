import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Index from '../mobile/src/routes/index'
import { AuthProvider } from './src/contexts/auth';

import DatabaseInit from './src/database/dbInit';

export default function App() {

  new DatabaseInit();

  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
        <Index />
      </AuthProvider>
    </NavigationContainer>
  );
}
