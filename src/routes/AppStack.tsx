import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicial from '../pages/inicial';
import CadastroUsuario from '../pages/cadastroUsuario';
import CadastroVeiculo from '../pages/cadastroVeiculo';
import SegundaTelaCadastro from '../pages/segundaTelaCadastro';
import TerceiraTelaCadastro from '../pages/terceiraTelaCadastro';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator initialRouteName="Inicial" screenOptions={{ headerShown: false }}>
                <Screen name="Inicial" component={Inicial} />
                <Screen name="CadastroUsuario" component={CadastroUsuario} />
                <Screen name="CadastroVeiculo" component={CadastroVeiculo} />
                <Screen name="SegundaTelaCadastro" component={SegundaTelaCadastro} />
                <Screen name="TerceiraTelaCadastro" component={TerceiraTelaCadastro} />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;