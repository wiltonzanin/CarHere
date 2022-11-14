import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/home';
import CadastroVeiculo from '../pages/cadastroVeiculo';
import VeiculosCadastrados from '../pages/home/veiculos/veiculos';
import VisualizarVeiculo from '../pages/home/veiculos/DetalhesVeiculo';
import Autonomia from '../pages/home/autonomia/cadastro';
import ListaAutonomia from '../pages/home/autonomia/listaAutonomia/ListaAutonomia';
import AutonomiaDetails from '../pages/home/autonomia/listaAutonomia/autonomiaDetails';
import Servico from '../pages/home/servicos/';
import CadastroServicos from '../pages/home/servicos/cadastro';
import VisualizarServicos from '../pages/home/servicos/VisualizarServico';
import Termos from '../pages/home/configuracoes/termosEpoliticas';
import OpcoesUsuario from '../pages/home/configuracoes/opcoesUsuario';
import UnidadeMedida from '../pages/home/configuracoes/unidadeMedida';
import Notificacao from '../pages/home/configuracoes/notificacao';
import AlterarSenha from '../pages/home/configuracoes/alterarSenha/confirmarEmail';
import ManualDoUsuario from '../pages/home/configuracoes/manualDoUsuario';
import Aparencia from '../pages/home/configuracoes/aparencia';
import Acessibilidade from '../pages/home/configuracoes/acessibilidade';
import EntrarEmContato from '../pages/home/ajudaEfeedback/entreEmContato';

import Subscription from '../pages/home/subscription';
import PaymentScreen from '../pages/home/subscription/PaymentScreen';

import { darkTheme } from '../Styles/colors';
import { NavigationContainer } from '@react-navigation/native';
import {
  useFonts, Rajdhani_300Light,
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
      <Navigator initialRouteName="Home" screenOptions={{ headerShown: false, cardStyle: { backgroundColor: darkTheme.background }, }} >
        <Screen name="Home" component={Home} />
        <Screen name="CadastroVeiculo" component={CadastroVeiculo} initialParams={{ id: 0 }} />
        <Screen name="Notificacao" component={Notificacao} />
        <Screen name="AlterarSenha" component={AlterarSenha} />
        <Screen name="VeiculosCadastrados" component={VeiculosCadastrados} />
        <Screen name="VisualizarVeiculo" component={VisualizarVeiculo} />
        <Screen name="Autonomia" component={Autonomia} initialParams={{ id_autonomia: 0 }} />
        <Screen name="ListaAutonomia" component={ListaAutonomia} />
        <Screen name="AutonomiaDetails" component={AutonomiaDetails} />
        <Screen name="UnidadeMedida" component={UnidadeMedida} />
        <Screen name="Servico" component={Servico} />
        <Screen name="CadastroServicos" component={CadastroServicos} initialParams={{ id: 0 }} />
        <Screen name="VisualizarServicos" component={VisualizarServicos} />
        <Screen name="Termos" component={Termos} />
        <Screen name="ManualDoUsuario" component={ManualDoUsuario} />
        <Screen name="OpcoesUsuario" component={OpcoesUsuario} />
        <Screen name="EntrarEmContato" component={EntrarEmContato} />
        <Screen name="Aparencia" component={Aparencia} />
        <Screen name="Acessibilidade" component={Acessibilidade} />
        <Screen name="Subscription" component={Subscription} />
        <Screen name="PaymentScreen" component={PaymentScreen} />
      </Navigator>
    );
  }
}

export default AppStack;