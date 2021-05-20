import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicial from '../pages/inicial';
import RecuperarSenha from '../pages/recuperarSenha';
import CadastroUsuario from '../pages/cadastroUsuario';
import CadastroVeiculo from '../pages/cadastroVeiculo/primeiraTelaCadastro';
import Inicio from '../pages/home/inicio';
import CodigoConfirmacao from '../pages/home/configuracoes/alterarSenha/confirmarCodigo';
import Notificacao from '../pages/home/configuracoes/notificacao';
import AlterarSenha from '../pages/home/configuracoes/alterarSenha/confirmarEmail';
import VisualizarVeiculo from '../pages/home/veiculos/visualizarVeiculo';
import UnidadeMedida from '../pages/home/configuracoes/unidadeMedida';
import AppVersion from '../pages/home/configuracoes/appVersion';
import RelatarProblema from '../pages/home/ajudaEfeedback/relatarProblema';
import VisualizarServicos from '../pages/home/servicos/VisualizarServico';
import Termos from '../pages/home/configuracoes/termosEpoliticas';
import OpcoesUsuario  from '../pages/home/configuracoes/opcoesUsuario';
import Mfa  from '../pages/cadastroUsuario/mfa';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator initialRouteName="Inicial" screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#252525' } }}>
                <Screen name="Inicial" component={Inicial} />
                <Screen name="RecuperarSenha" component={RecuperarSenha} />
                <Screen name="CadastroUsuario" component={CadastroUsuario} />
                <Screen name="CadastroVeiculo" component={CadastroVeiculo} />
                <Screen name="Inicio" component={Inicio} />
                <Screen name="CodigoConfirmacao" component={CodigoConfirmacao} />
                <Screen name="Notificacao" component={Notificacao} />
                <Screen name="AlterarSenha" component={AlterarSenha} />
                <Screen name="VisualizarVeiculo" component={VisualizarVeiculo} />
                <Screen name="UnidadeMedida" component={UnidadeMedida} />
                <Screen name="AppVersion" component={AppVersion} />
                <Screen name="RelatarProblema" component={RelatarProblema} />
                <Screen name="VisualizarServicos" component={VisualizarServicos} />
                <Screen name="Termos" component={Termos} />
                <Screen name="OpcoesUsuario" component={OpcoesUsuario} />
                <Screen name="Mfa" component={Mfa} />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;