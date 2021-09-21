import * as React from "react";
import { View, Text, BackHandler, Alert } from "react-native";
import { DrawerActions, useNavigation, useFocusEffect } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";

import styles from "./styles";
import Configuracoes from "./configuracoes/telaPrincipal";
import CadastroVeiculo from "../cadastroVeiculo";
import Veiculos from "./veiculos/veiculos";
import Principal from "./ajudaEfeedback/principal";
import Servicos from "./servicos";
import { ButtonAdicionar } from '../../components/buttons';
import { ButtonMenu } from '../../components/buttons';

function Home({ navigation }: any) {
  const { navigate } = useNavigation();

  useFocusEffect(() => {
    const backAction = () => {
      Alert.alert("Espera aí", "Você tem certeza que deseja sair do aplicativo?", [
        {
          text: "Não",
          onPress: () => null,
          style: "cancel"
        },
        { text: "SIM", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  });

  function handleNavigateToCadastroVeiculo() {
    navigate("CadastroVeiculo");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ButtonMenu title="" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
        <View style={{ paddingRight: '43%' }}>
          <Text style={styles.text}>Inicio</Text>
        </View>
      </View>
      <View style={styles.content}>
        <ButtonAdicionar title="Adicionar veículo" onPress={handleNavigateToCadastroVeiculo} />
      </View>
    </View>
  );
}

const Drawer = createDrawerNavigator();

//Documentação https://reactnavigation.org/docs/drawer-navigator/#props
function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContentOptions={{ activeBackgroundColor: "#8F1622" }}
      drawerContent={(props) => (
        <CustomDrawerContent {...props} style={styles.drawer} />
      )}
    >
      <Drawer.Screen
        name="Inicio"
        component={Home}
        options={{
          drawerIcon: ({ focused, size }) => (
            <Feather
              name="home"
              size={size}
              color={focused ? "#F0EFF4" : "#F0EFF4"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Cadastrar veículo"
        component={CadastroVeiculo}
        options={{
          drawerIcon: ({ focused, size }) => (
            <Feather
              name="plus"
              size={size}
              color={focused ? "#F0EFF4" : "#F0EFF4"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Veículos cadastrados"
        component={Veiculos}
        options={{
          unmountOnBlur: true,
          drawerIcon: ({ focused, size }) => (
            <Feather
              name="list"
              size={size}
              color={focused ? "#F0EFF4" : "#F0EFF4"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Serviços"
        component={Servicos}
        options={{
          drawerIcon: ({ focused, size }) => (
            <Feather
              name="tool"
              size={size}
              color={focused ? "#F0EFF4" : "#F0EFF4"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Configurações"
        component={Configuracoes}
        options={{
          drawerIcon: ({ focused, size }) => (
            <Feather
              name="settings"
              size={size}
              color={focused ? "#F0EFF4" : "#F0EFF4"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Ajuda e Feedback"
        component={Principal}
        options={{
          drawerIcon: ({ focused, size }) => (
            <Feather
              name="help-circle"
              size={size}
              color={focused ? "#F0EFF4" : "#F0EFF4"}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

function CustomDrawerContent(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} labelStyle={styles.drawerText} />
    </DrawerContentScrollView>
  );
}

export default function App() {
  return <MyDrawer />;
}
