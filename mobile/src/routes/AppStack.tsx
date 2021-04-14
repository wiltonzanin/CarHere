import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicial from '../pages/inicial';
import RecuperarSenha from '../pages/recuperarSenha';
import CadastroUsuario from '../pages/cadastroUsuario';
import CadastroVeiculo from '../pages/cadastroVeiculo/primeiraTelaCadastro';
import App from '../pages/home/feed';
import CodigoConfirmacao from '../pages/configuracoes/alterarSenha/confirmarCodigo';
import Sobre from '../pages/configuracoes/sobre';
import AlterarSenha from '../pages/configuracoes/alterarSenha/confirmarEmail';
import Feed from '../pages/home/feed';

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
                <Screen name="CodigoConfirmacao" component={CodigoConfirmacao} />
                <Screen name="Sobre" component={Sobre} />
                <Screen name="AlterarSenha" component={AlterarSenha} />
                <Screen name="Feed" component={Feed} />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;