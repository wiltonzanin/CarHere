import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, BackHandler } from "react-native";
import { DrawerActions, useFocusEffect, StackActions } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import styles from "./styles";
import fonts from '../../../Styles/fonts'
import colors from '../../../Styles/colors'
import LoadingScreen from "../../../components/loadingScreen";
import SearchBar from "../../../components/searchBar";
import { ButtonAdicionar } from '../../../components/buttons';
import { ButtonMenu } from '../../../components/buttons';
import api from "../../../services/api";
import CarroService from "../../../database/services/carroService";

interface Carros {
  id_carro: number;
  marca: string;
  modelo: string;
  images: Array<{
    id: number;
    url: string;
  }>;
}

function Veiculos({ navigation }: any) {

  let listaVazia = true;

  const [carregando, setCarregando] = useState(false);
  const [erroCarregar, setErroCarregar] = useState(false);
  const [carros, setCarros] = useState<Carros[]>([]);

  function handleNavigateToVisualizarVeiculo(id: number) {
    navigation.navigate("VisualizarVeiculo", { id });
  }

  function handleNavigateToCadastroVeiculo() {
    navigation.navigate("CadastroVeiculo");
  }

  useEffect(() => {
    CarroService.findAll()
      .then((response: any) => {
        setCarros(response._array)
      }), (error: any) => {
        console.log(error);
      }
  });

  // useEffect(() => {
  //   setCarregando(true);
  //   api.get('carros/1').then(response => {
  //     setCarros(response.data);
  //     setCarregando(false);
  //   }).catch(() => {
  //     setCarregando(false);
  //     setErroCarregar(true);
  //   })
  // }, [])

  // useFocusEffect(() => {
  //   const backAction = () => {
  //     const pushAction = StackActions.push('Home');
  //     navigation.dispatch(pushAction);
  //     return true;
  //   };

  //   const backHandler = BackHandler.addEventListener(
  //     "hardwareBackPress",
  //     backAction
  //   );

  //   return () => backHandler.remove();
  // });

  if (carros.length > 0) {
    listaVazia = false
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <LoadingScreen carregando={carregando} />
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerGroup}>
            <ButtonMenu title="" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
            <Text style={styles.headerText}>Veículos</Text>
            <SearchBar></SearchBar>
          </View>
        </View>
        <ButtonAdicionar title="Adicionar veículo" onPress={handleNavigateToCadastroVeiculo} />
        <View style={styles.content}>
          {erroCarregar
            ?
            <View style={styles.listagemErro}>
              <Feather name='cloud-off' size={50} color={colors.grayLight} />
              <Text style={{ color: colors.grayLight, fontSize: 20, paddingTop: 20, fontFamily: fonts.text }}>Não foi possível carregar os dados!</Text>
            </View>
            :
            listaVazia
              ?
              <View style={styles.listagemErro}>
                <Feather name='archive' size={50} color={colors.grayLight} />
                <Text style={{ color: colors.grayLight, fontSize: 20, paddingTop: 20, fontFamily: fonts.text }}>Ops, você não tem carros cadastrados!</Text>
              </View>
              :
              carros.map(carro => {
                return (
                  <View key={carro.id_carro} style={styles.veiculos}>
                    <RectButton style={styles.buttonVeiculo} onPress={() => handleNavigateToVisualizarVeiculo(carro.id_carro)}>
                      <View style={styles.buttonGroupText}>
                        <Text numberOfLines={1} style={styles.buttonVeiculoText}>{carro.modelo}</Text>
                        <Text style={styles.buttonVeiculoTextManutencaoGreen}><Feather name="check-circle" size={16} color={colors.green} /> Manutenção em dia</Text>
                      </View>
                      {/* {carro.images.length > 0
                        ?
                        <Image key={carro.images[0].url} source={{ uri: carro.images[0].url }} style={styles.imgVeiculo} />
                        :
                        <View style={styles.imgVeiculo}>
                          <Feather name="image" size={50} color='white' />
                        </View>
                      } */}
                    </RectButton>
                  </View>
                );
              })
          }
        </View>
      </View>
    </ScrollView>
  );
}
export default Veiculos;