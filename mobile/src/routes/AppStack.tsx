import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicial from '../pages/inicial';
import RecuperarSenha from '../pages/recuperarSenha';
import CadastroUsuario from '../pages/cadastroUsuario';
import CadastroVeiculo from '../pages/cadastroVeiculo/primeiraTelaCadastro';
import SegundaTelaCadastro from '../pages/cadastroVeiculo/segundaTelaCadastro';
import TerceiraTelaCadastro from '../pages/cadastroVeiculo/terceiraTelaCadastro';
import App from '../pages/home';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator initialRouteName="Inicial" screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#252525' } }}>
                <Screen name="Inicial" component={Inicial} />
                <Screen name="RecuperarSenha" component={RecuperarSenha} />
                <Screen name="CadastroUsuario" component={CadastroUsuario} />
                <Screen name="CadastroVeiculo" component={CadastroVeiculo} />
                <Screen name="App" component={App} />

            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;