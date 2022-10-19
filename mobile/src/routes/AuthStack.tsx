import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Inicial from '../pages/inicial';
import CadastroUsuario from '../pages/cadastroUsuario';
import RecuperarSenha from '../pages/recuperarSenha';
import Termos from '../pages/home/configuracoes/termosEpoliticas';
import {
  useFonts, Rajdhani_300Light,
  Rajdhani_400Regular,
  Rajdhani_500Medium,
  Rajdhani_600SemiBold,
  Rajdhani_700Bold,
} from '@expo-google-fonts/rajdhani';
import AppLoading from "expo-app-loading";
import { darkTheme } from '../Styles/colors';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  let [fontsLoaded] = useFonts({
    Rajdhani_300Light,
    Rajdhani_400Regular,
    Rajdhani_500Medium,
    Rajdhani_600SemiBold,
    Rajdhani_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Navigator initialRouteName="Inicial" screenOptions={{ headerShown: false, cardStyle: { backgroundColor: darkTheme.background } }}>
        <Screen name="Inicial" component={Inicial} />
        <Screen name="CadastroUsuario" component={CadastroUsuario} />
        <Screen name="RecuperarSenha" component={RecuperarSenha} />
        <Screen name="Termos" component={Termos} />
      </Navigator>
    );
  }
}

export default AppStack;