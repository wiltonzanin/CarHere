import * as React from "react";
import { View, Text } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import Configuracoes from "../configuracoes/telaPrincipal";
import CustomDrawerContent from "../home/customDrawerContent";
import CadastroVeiculo from "../cadastroVeiculo/primeiraTelaCadastro";
import Veiculos from "../home/veiculos";

function Inicio({ navigation }: any) {
  const { navigate } = useNavigation();

  function handleNavigateToCadastroVeiculo() {
    navigate("CadastroVeiculo");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <RectButton
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          style={styles.button}
        >
          <Feather name="align-justify" size={25} color="#F0EFF4" />
        </RectButton>
      </View>
      <View style={styles.content}>
        <RectButton
          style={styles.buttonAdicionar}
          onPress={handleNavigateToCadastroVeiculo}
        >
          <Text style={styles.buttonText}>Adicionar veículo {"\n"} + </Text>
        </RectButton>
      </View>
    </View>
  );
}

const Drawer = createDrawerNavigator();

//Documentação https://reactnavigation.org/docs/drawer-navigator/#props
function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContentOptions={{ activeBackgroundColor: '#5863F8' }}
      drawerContent={(props) => (
        <CustomDrawerContent {...props} style={styles.drawer} />
      )}
    >
      <Drawer.Screen name="Inicio" component={Inicio}
        options={{
          title: 'Inicio',
          drawerIcon: ({ focused, size }) => (
            <Feather
              name="home"
              size={size}
              color={focused ? '#F0EFF4' : '#F0EFF4'}
            />
          ),
        }}
      />
      <Drawer.Screen name="Cadastrar Veículo" component={CadastroVeiculo}
        options={{
          title: 'Cadastrar Veículo',
          drawerIcon: ({ focused, size }) => (
            <Feather
              name="plus"
              size={size}
              color={focused ? '#F0EFF4' : '#F0EFF4'}
            />
          ),
        }}
      />
      <Drawer.Screen name="Veiculos Cadastrados" component={Veiculos}
        options={{
          title: 'Veiculos Cadastrados',
          drawerIcon: ({ focused, size }) => (
            <Feather
              name="list"
              size={size}
              color={focused ? '#F0EFF4' : '#F0EFF4'}
            />
          ),
        }}
      />
      <Drawer.Screen name="Configuracoes" component={Configuracoes}
        options={{
          title: 'Configurações',
          drawerIcon: ({ focused, size }) => (
            <Feather
              name="settings"
              size={size}
              color={focused ? '#5863F8' : '#F0EFF4'}
            />
          ),
        }}
      />
      <Drawer.Screen name="AjudaEFeedback" component={Configuracoes}
        options={{
          title: 'Ajuda e Feedback',
          drawerIcon: ({ focused, size }) => (
            <Feather
              name="help-circle"
              size={size}
              color={focused ? '#5863F8' : '#F0EFF4'}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return <MyDrawer />;
}
