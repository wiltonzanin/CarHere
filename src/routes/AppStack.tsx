import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/home';
import CadastroUsuario from '../pages/cadastroUsuario';
import Login from '../pages/login';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                <Screen name="Home" component={Home} />
                <Screen name="Login" component={Login} />
                <Screen name="CadastroUsuario" component={CadastroUsuario} />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;