import * as React from "react";
import { View, Text } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import Configuracoes from "../home/configuracoes/telaPrincipal";
import CadastroVeiculo from "../cadastroVeiculo/primeiraTelaCadastro";
import Veiculos from "../home//veiculos/veiculos";
import Principal from "../home/ajudaEfeedback/principal";

function Inicio({ navigation }: any) {
  const { navigate } = useNavigation();

  function handleNavigateToCadastroVeiculo() {
    navigate("CadastroVeiculo");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <View style={styles.search}>
          <RectButton
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            style={styles.buttonsHeader}
          >
            <Feather name="align-justify" size={25} color="#F0EFF4" />
          </RectButton>
        <View style={{paddingRight:'43%'}}>
          <Text style={styles.text}>Inicio</Text>
        </View>
        </View>
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
      drawerContentOptions={{ activeBackgroundColor: "#8F1622" }}
      drawerContent={(props) => (
        <CustomDrawerContent {...props} style={styles.drawer} />
      )}
    >
      <Drawer.Screen
        name="Inicio"
        component={Inicio}
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
        name="Cadastrar Veículo"
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
        name="Veículos Cadastrados"
        component={Veiculos}
        options={{
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
