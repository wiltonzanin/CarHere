import React, { useEffect, useState } from "react";

import { View, Text, BackHandler, Alert, ScrollView, Image, TouchableOpacity } from "react-native";
import { DrawerActions, useRoute, useFocusEffect } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
  useIsDrawerOpen,
} from "@react-navigation/drawer";
import { Feather, MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";

import styles from "./styles";
import fonts from '../../Styles/fonts';
import Configuracoes from "./configuracoes/telaPrincipal";
import CadastroVeiculo from "../cadastroVeiculo";
import Veiculos from "./veiculos/veiculos";
import Autonomia from "./autonomia/cadastro"
import Principal from "./ajudaEfeedback/principal";
import Servicos from "./servicos";
import { ButtonMenu } from '../../components/buttons';
import { ButtonAdicionar } from '../../components/buttons';
import { RectButton } from "react-native-gesture-handler";
import { darkTheme } from '../../Styles/colors'

import LoadingScreen from "../../components/loadingScreen";
import CarroService from "../../database/services/carroService";
import ServicoService from "../../database/services/ServicoService";
import { getAuth } from "firebase/auth";

interface Carros {
  id_carro: number;
  marca: string;
  modelo: string;
  ano: number;
  combustivel: string;
  motorizaçao: string;
  id_imagem: number;
  path: string;
}

interface servico {
  id_servicos: number;
  nome: string;
  local: string;
  data: string;
  status_servico: number;
  modelo: string;
}

console.log(!getAuth().currentUser?.uid)

function Home({ navigation }: any) {

  const [carregando, setCarregando] = useState(false);
  const [carros, setCarros] = useState<Carros>();
  const [servico, setServico] = useState<servico[]>([]);

  function handleNavigateToVisualizarServicos(id: number) {
    navigation.navigate("VisualizarServicos", { id });
  }
  function handleNavigateToServicos() {
    navigation.navigate("Servico");
  }
  function handleNavigateToCadastroServico() {
    navigation.navigate("CadastroServicos");
  }
  function handleNavigateToCadastroVeiculo() {
    navigation.navigate("CadastroVeiculo");
  }
  function handleNavigateToVisualizarVeiculo(id: number) {
    navigation.navigate("VisualizarVeiculo", { id });
  }

    React.useEffect(() => {
      navigation.addListener('focus', () => {
        ServicoService.SevicesNoRealized()
          .then((response: any) => {
            setServico(response._array);
          });
      });
    }, [navigation]);

    React.useEffect(() => {
      navigation.addListener('focus', () => {
        CarroService.findCarAsc()
          .then((response: any) => {
            setCarros(response)
            setCarregando(false)
          })
      });
    }, [navigation]);
  

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
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <LoadingScreen carregando={carregando} />
        <View style={styles.header}>
          <ButtonMenu />
          <Text style={styles.title}>Início</Text>
          <View />
        </View>
        {!carros
          ?
          <View style={styles.content}>
            <ButtonAdicionar title="Adicionar veiculo" onPress={handleNavigateToCadastroVeiculo}></ButtonAdicionar>
            <View style={styles.listagemErro}>
              <Feather name='archive' size={50} color={darkTheme.grayLight} />
              <Text style={{ color: darkTheme.grayLight, fontSize: 20, paddingTop: 20, fontFamily: fonts.text }}>Ops, você não tem carros cadastrados!</Text>
            </View>
          </View>
          :
          <View>
            <View style={styles.content}>
              <RectButton onPress={() => handleNavigateToVisualizarVeiculo(carros.id_carro)}>
                {carros.id_imagem != null
                  ?
                  <Image key={carros.id_imagem} source={{ uri: carros.path }} style={styles.imgVeiculo} />
                  :
                  <View style={styles.noimg}>
                    <Feather name="image" size={100} color='white' style={styles.icon} />
                  </View>
                }
                <View style={styles.cardImg}>
                  <Text numberOfLines={1} style={styles.buttonVeiculoText}>{carros.modelo}</Text>
                </View>
              </RectButton>
            </View>

            <View style={styles.card}>
              <View>
                <RectButton onPress={handleNavigateToServicos}>
                  <View style={styles.cardHeader}>
                    <Text style={styles.cardTitle}>Serviços não realizados</Text>
                    <Feather name="chevron-right" size={24} color="#F0EFF4" />
                  </View>
                </RectButton>
                {servico.length == 0
                  ?
                  <View style={styles.buttonServico} >
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                      <Feather name="alert-circle" size={25} color="#eca400" style={{ alignSelf: 'center' }} />
                      <Text style={styles.noInfoText}>Você ainda não possui um serviço não realizado cadastrado!</Text>
                    </View>
                  </View>
                  :
                  servico.map(servico => {
                    return (
                      <RectButton key={servico.id_servicos} style={styles.buttonServico} onPress={() => handleNavigateToVisualizarServicos(servico.id_servicos)}>
                        <View style={styles.buttonGroupTextServico}>
                          <Text style={styles.buttonServicoText}>{servico.nome}</Text>
                          <Text style={styles.buttonServicoText}>{servico.modelo}</Text>
                          <Text style={styles.textInfo2}>{servico.data}</Text>
                          <Text style={styles.textInfo2}>{"Serviço não realizado"}</Text>
                        </View>
                      </RectButton>
                    );
                  })
                }
              </View>
              <ButtonAdicionar style={styles.buttonAdicionarServico} title="Adicionar serviço" onPress={handleNavigateToCadastroServico}></ButtonAdicionar>
            </View>
          </View>
        }
      </View >
    </ScrollView >
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
        initialParams={{ id: 0 }}
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
        initialParams={{ id_autonomia: 0 }}
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
      {/* <Drawer.Screen
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
      /> */}
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
