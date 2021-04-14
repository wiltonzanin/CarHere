import * as React from 'react';
import { View } from 'react-native';
import { DrawerActions, DrawerActionType, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import Configuracoes from '../../configuracoes/telaPrincipal';
import CustomDrawerContent from '../customDrawerContent';


function Inicio({ navigation } : any) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <RectButton onPress={() => navigation.dispatch(DrawerActions.openDrawer())} style={styles.button} >
          <Feather name="align-justify" size={25} color='#F0EFF4' />
        </RectButton>

      </View>
    </View>
  );
}

const Drawer = createDrawerNavigator();


function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} style={styles.drawer} />} >
      <Drawer.Screen  name="Inicio" component={Inicio} /> 
      <Drawer.Screen  name="Configurações" component={Configuracoes}/>
      
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <MyDrawer />
  );
}
