import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Inicial from '../pages/inicial';
import AlterarSenha from '../pages/home/configuracoes/alterarSenha/confirmarEmail';
import CadastroUsuario from '../pages/cadastroUsuario';
import CadastroVeiculo from '../pages/cadastroVeiculo';
import Termos from '../pages/home/configuracoes/termosEpoliticas';
import CodigoConfirmacao from '../pages/home/configuracoes/alterarSenha/confirmarCodigo';
import { useFonts, Rajdhani_300Light,
    Rajdhani_400Regular,
    Rajdhani_500Medium,
    Rajdhani_600SemiBold,
    Rajdhani_700Bold,
} from '@expo-google-fonts/rajdhani';
import AppLoading from "expo-app-loading";

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
        <Navigator initialRouteName="Inicial" screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#252525' } }}>
            <Screen name="Inicial" component={Inicial} />
            <Screen name="AlterarSenha" component={AlterarSenha} />
            <Screen name="CodigoConfirmacao" component={CodigoConfirmacao} />
            <Screen name="CadastroUsuario" component={CadastroUsuario} />
            <Screen name="Termos" component={Termos} />
            <Screen name="CadastroVeiculo" component={CadastroVeiculo} />
        </Navigator>
    );
      }
}

export default AppStack;