import * as React from "react";
import { View, Text, BackHandler, Alert, ScrollView, Image, TouchableOpacity } from "react-native";
import { DrawerActions, useNavigation, useFocusEffect } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./styles";
import Configuracoes from "./configuracoes/telaPrincipal";
import CadastroVeiculo from "../cadastroVeiculo";
import Veiculos from "./veiculos/veiculos";
import Autonomia from "./autonomia"
import Principal from "./ajudaEfeedback/principal";
import Servicos from "./servicos";
import PremiumAccount from "./contaPremium";
import { ButtonMenu } from '../../components/buttons';
import { ButtonAdicionar } from '../../components/buttons';

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

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ButtonMenu title="" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
        <Text style={styles.title}>Início</Text>
        <View />
      </View>
      <View style={styles.content}>
        <ScrollView horizontal pagingEnabled>
          <Image source={require('../../assets/images/impreza.jpg')} style={styles.imgVeiculo} />
        </ScrollView>
        <View style={styles.cardImg}>
          <Text>Impreza GC8</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Serviços</Text>
            <Feather name="chevron-right" size={24} color="#F0EFF4" />
          </View>
          <TouchableOpacity style={styles.cardServices}>
            <View style={styles.servicesHeader}>
              <Text style={styles.servicesTitle}>Monza</Text>
              <Text style={styles.servicesText}>24/08/2021</Text>
            </View>
            <Text style={styles.textStatusOk}>
              <Feather name="check-circle" size={14} color="#5CB85C" />{" "}
              Tudo certo!
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardServices}>
            <View style={styles.servicesHeader}>
              <Text style={styles.servicesTitle}>Celta</Text>
              <Text style={styles.servicesText}>24/08/2021</Text>
            </View>
            <Text style={styles.textStatusWarning}>
              <Feather name="alert-circle" size={14} color="#F0AD4E" />{" "}
              Requer ação!
            </Text>
          </TouchableOpacity>
          <ButtonAdicionar title="Adicionar serviço"></ButtonAdicionar>
        </View>
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
      drawerContent={(props: DrawerContentComponentProps) => (
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
        name="Autonomia"
        component={Autonomia}
        options={{
          unmountOnBlur: true,
          drawerIcon: ({ focused, size }) => (
            <Feather
              name="bar-chart-2"
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
        name="Premium"
        component={PremiumAccount}
        options={{
          drawerIcon: ({ focused, size }) => (
            <MaterialCommunityIcons
              name="crown-outline"
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
      <DrawerItemList labelStyle={styles.drawerText} {...props} />
    </DrawerContentScrollView>
  );
}

export default function App() {
  return <MyDrawer />;
}
