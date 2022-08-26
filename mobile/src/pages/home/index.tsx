import React, { useEffect, useState } from "react";

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
import fonts from '../../Styles/fonts';
import SearchBar from "../../components/searchBar";
import Configuracoes from "./configuracoes/telaPrincipal";
import CadastroVeiculo from "../cadastroVeiculo";
import Veiculos from "./veiculos/veiculos";
import Autonomia from "./autonomia/cadastro"
import Principal from "./ajudaEfeedback/principal";
import Servicos from "./servicos";
import { ButtonMenu } from '../../components/buttons';
import { ButtonAdicionar } from '../../components/buttons';
import Subscription from '../home/subscription'
import { RectButton } from "react-native-gesture-handler";
import {darkTheme} from '../../Styles/colors'
import { FirebaseInit } from '../../database/dbInit';
import { getAuth } from "firebase/auth";

FirebaseInit();

const auth = getAuth();
const user = auth.currentUser;
console.log("======================")
console.log(user?.email);
console.log(user?.displayName);
console.log(user?.uid);

interface Carros {
  id_carro: number;
  marca: string;
  modelo: string;
  images: Array<{
    id: number;
    url: string;
  }>;
}

function Home({ navigation }: any) {

  let listaVazia = true;
  const [carregando, setCarregando] = useState(false);
  const [erroCarregar, setErroCarregar] = useState(false);
  const [carros, setCarros] = useState<Carros[]>([]);

  function handleNavigateToServicos() {
    navigation.navigate("Servico");
  }
  function handleNavigateToCadastroServico() {
    navigation.navigate("CadastroServicos");
  }
  function handleNavigateToCadastroVeiculo() {
    navigation.navigate("CadastroVeiculo");
  }

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
  

  if (carros.length > 0) {
    listaVazia = false
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ButtonMenu title="" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
        <Text style={styles.title}>Início</Text>
        <View />
      </View>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.content}>

          {/* <View style={styles.listagemErro}>
            <Feather name='cloud-off' size={50} color={colors.grayLight} />
            <Text style={{ color: colors.grayLight, fontSize: 20, paddingTop: 20, fontFamily: fonts.text }}>Não foi possível carregar os dados!</Text>
          </View> */}

          <ButtonAdicionar title="Adicionar carro" onPress={handleNavigateToCadastroVeiculo}></ButtonAdicionar>
          
          <View style={styles.listagemErro}>
            <Feather name='archive' size={50} color={darkTheme.grayLight} />
            <Text style={{ color: darkTheme.grayLight, fontSize: 20, paddingTop: 20, fontFamily: fonts.text }}>Você não tem carros cadastrados!</Text>
          </View>

          {/* <ScrollView horizontal pagingEnabled>
            <Image source={require('../../assets/images/impreza.jpg')} style={styles.imgVeiculo} />
          </ScrollView>
          <View style={styles.cardImg}>
            <Text style={styles.servicesText}>Impreza GC8</Text>
          </View>
          <View style={styles.card}>
            <RectButton onPress={handleNavigateToServicos}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>Serviços</Text>
                <Feather name="chevron-right" size={24} color={colors.grayLight} />
              </View>
            </RectButton>
            <TouchableOpacity style={styles.cardServices}>
              <View style={styles.servicesHeader}>
                <Text style={styles.servicesTitle}>Monza</Text>
                <Text style={styles.servicesText}>24/08/2021</Text>
              </View>
              <Text style={styles.textStatusOk}>
                <Feather name="check-circle" size={14} color={colors.green} />{" "}
                Tudo certo!
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardServices}>
              <View style={styles.servicesHeader}>
                <Text style={styles.servicesTitle}>Celta</Text>
                <Text style={styles.servicesText}>24/08/2021</Text>
              </View>
              <Text style={styles.textStatusWarning}>
                <Feather name="alert-circle" size={14} color={colors.yellow} />{" "}
                Requer ação!
              </Text>
            </TouchableOpacity>
            <ButtonAdicionar title="Adicionar serviço" onPress={handleNavigateToCadastroServico}></ButtonAdicionar>
          </View> */}
        </View>
      </ScrollView>
    </View>

  );
}

const Drawer = createDrawerNavigator();

//Documentação https://reactnavigation.org/docs/drawer-navigator/#props
function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContentOptions={{ activeBackgroundColor: darkTheme.button }}
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
              color={focused ? darkTheme.grayLight : darkTheme.grayLight}
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
              color={focused ? darkTheme.grayLight : darkTheme.grayLight}
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
              color={focused ? darkTheme.grayLight : darkTheme.grayLight}
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
              color={focused ? darkTheme.grayLight : darkTheme.grayLight}
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
              color={focused ? darkTheme.grayLight : darkTheme.grayLight}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Premium"
        component={Subscription}
        options={{
          drawerIcon: ({ focused, size }) => (
            <MaterialCommunityIcons
              name="crown-outline"
              size={size}
              color={focused ? darkTheme.grayLight : darkTheme.grayLight}
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
              color={focused ? darkTheme.grayLight : darkTheme.grayLight}
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
              color={focused ? darkTheme.grayLight : darkTheme.grayLight}
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
