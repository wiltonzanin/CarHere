import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from '../pages/home/inicio';
import CadastroVeiculo from '../pages/cadastroVeiculo/primeiraTelaCadastro';
import CodigoConfirmacao from '../pages/home/configuracoes/alterarSenha/confirmarCodigo';
import Notificacao from '../pages/home/configuracoes/notificacao';
import AlterarSenha from '../pages/home/configuracoes/alterarSenha/confirmarEmail';
import VeiculosCadastrados from '../pages/home/veiculos/veiculos';
import VisualizarVeiculo from '../pages/home/veiculos/DetalhesVeiculo';
import UnidadeMedida from '../pages/home/configuracoes/unidadeMedida';
import AppVersion from '../pages/home/configuracoes/appVersion';
import RelatarProblema from '../pages/home/ajudaEfeedback/relatarProblema';
import CadastroServicos from '../pages/home/servicos/cadastro';
import VisualizarServicos from '../pages/home/servicos/VisualizarServico';
import Termos from '../pages/home/configuracoes/termosEpoliticas';
import OpcoesUsuario from '../pages/home/configuracoes/opcoesUsuario';
import Mfa from '../pages/cadastroUsuario/mfa';
import EntrarEmContato from '../pages/home/ajudaEfeedback/entreEmContato';
import Solicitacao from '../pages/home/ajudaEfeedback/entreEmContato/solicitacao';
import Aparencia from '../pages/home/configuracoes/aparencia';
import Acessibilidade from '../pages/home/configuracoes/acessibilidade';
import Seguranca from '../pages/home/configuracoes/opcoesUsuario/seguranca';
import SelecionaFoto from '../pages/home/configuracoes/opcoesUsuario/modal/selecionarFoto';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
    return (

        <Navigator initialRouteName="Inicio" screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#252525' } }}>
            <Screen name="Inicio" component={Inicio} />
            <Screen name="CadastroVeiculo" component={CadastroVeiculo} />
            <Screen name="CodigoConfirmacao" component={CodigoConfirmacao} />
            <Screen name="Notificacao" component={Notificacao} />
            <Screen name="AlterarSenha" component={AlterarSenha} />
            <Screen name="VeiculosCadastrados" component={VeiculosCadastrados} />
            <Screen name="UnidadeMedida" component={UnidadeMedida} />
            <Screen name="AppVersion" component={AppVersion} />
            <Screen name="RelatarProblema" component={RelatarProblema} />
            <Screen name="CadastroServicos" component={CadastroServicos} />
            <Screen name="VisualizarServicos" component={VisualizarServicos} />
            <Screen name="Termos" component={Termos} />
            <Screen name="OpcoesUsuario" component={OpcoesUsuario} />
            <Screen name="Mfa" component={Mfa} />
            <Screen name="EntrarEmContato" component={EntrarEmContato} />
            <Screen name="Solicitacao" component={Solicitacao} />
            <Screen name="Aparencia" component={Aparencia} />
            <Screen name="Acessibilidade" component={Acessibilidade} />
            <Screen name="Seguranca" component={Seguranca} />
            <Screen name="SelecionaFoto" component={SelecionaFoto} />
        </Navigator>
    );
}

export default AppStack;