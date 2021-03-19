import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicial from '../pages/inicial';
import CadastroUsuario from '../pages/cadastroUsuario';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator initialRouteName="Inicial" screenOptions={{ headerShown: false }}>
                <Screen name="Inicial" component={Inicial} />
                <Screen name="CadastroUsuario" component={CadastroUsuario} />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;