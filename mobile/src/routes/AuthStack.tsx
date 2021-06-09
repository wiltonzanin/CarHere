import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Inicial from '../pages/inicial';
import RecuperarSenha from '../pages/recuperarSenha';
import CadastroUsuario from '../pages/cadastroUsuario';
import CadastroVeiculo from '../pages/cadastroVeiculo/primeiraTelaCadastro';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
    return (
        <Navigator initialRouteName="Inicial" screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#252525' } }}>
            <Screen name="Inicial" component={Inicial} />
            <Screen name="RecuperarSenha" component={RecuperarSenha} />
            <Screen name="CadastroUsuario" component={CadastroUsuario} />
            <Screen name="CadastroVeiculo" component={CadastroVeiculo} />
        </Navigator>
    );
}

export default AppStack;