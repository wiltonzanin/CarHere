import React, { useState } from "react";
import { View, Text, Image, ScrollView, BackHandler } from "react-native";
import { DrawerActions, StackActions, useFocusEffect } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { Searchbar } from 'react-native-paper';

import styles from "./styles";
import fonts from '../../../Styles/fonts'
import { darkTheme } from '../../../Styles/colors'
import LoadingScreen from "../../../components/loadingScreen";
import { ButtonAdicionar } from '../../../components/buttons';
import { ButtonMenu } from '../../../components/buttons';
import CarroService from "../../../database/services/carroService";
import BackScreen from "../../../components/backScreen";

interface Carros {
  id_carro: number;
  marca: string;
  modelo: string;
  id_imagem: number;
  path: string;
  ano: string;
}

function Veiculos({ navigation }: any) {

  let listaVazia = true;

  const [carregando, setCarregando] = useState(false);
  const [erroCarregar, setErroCarregar] = useState(false);
  const [search, setSearch] = useState(false);
  const [searchWord, setSearchWord] = useState('');
  const [carros, setCarros] = useState<Carros[]>([]);

  function handleNavigateToVisualizarVeiculo(id: number) {
    navigation.navigate("VisualizarVeiculo", { id });
  }

  function handleNavigateToCadastroVeiculo() {
    navigation.reset({
      index: 0,
      routes: [{ name: 'CadastroVeiculo' }],
    });
    //navigation.navigate("CadastroVeiculo");
  }

  React.useEffect(() => {
    navigation.addListener('focus', () => {
      CarroService.findAllWithImage()
        .then((response: any) => {
          setCarros(response._array)
        }), (error: any) => {
          console.log(error);
        }
    });
  }, [navigation]);

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

  useFocusEffect(() => {
    const backAction = () => {
      const pushAction = StackActions.push('Home');
      navigation.dispatch(pushAction);
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
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <LoadingScreen carregando={carregando} />
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerGroup}>
            <BackScreen backToHome={true} />
            <Text style={styles.headerText}>Veículos</Text>
            <Feather name="search" size={25} color={darkTheme.grayLight} onPress={() => { setSearch(!search) }} />
          </View>
          {search ?
            <View>
              <Searchbar
                placeholder="Pesquisar"
                autoComplete={''}
                onChangeText={setSearchWord}
                value={searchWord}
                placeholderTextColor={darkTheme.grayLight}
                iconColor={darkTheme.grayLight}
                inputStyle={{ color: darkTheme.grayLight }}
                style={styles.searchInput}
              />
            </View>
            :
            <View />
          }
        </View>
        {search ?
          <View />
          :
          <ButtonAdicionar title="Adicionar veículo" onPress={handleNavigateToCadastroVeiculo} />
        }
        <View style={styles.content}>
          {erroCarregar
            ?
            <View style={styles.listagemErro}>
              <Feather name='cloud-off' size={50} color={darkTheme.grayLight} />
              <Text style={{ color: darkTheme.grayLight, fontSize: 20, paddingTop: 20, fontFamily: fonts.text }}>Não foi possível carregar os dados!</Text>
            </View>
            :
            listaVazia
              ?
              <View style={styles.listagemErro}>
                <Feather name='archive' size={50} color={darkTheme.grayLight} />
                <Text style={{ color: darkTheme.grayLight, fontSize: 20, paddingTop: 20, fontFamily: fonts.text }}>Ops, você não tem carros cadastrados!</Text>
              </View>
              :
              carros.filter((val) => {
                if (searchWord == '') {
                  return val;
                } else if (val.modelo.toLocaleLowerCase().includes(searchWord.toLocaleLowerCase())) {
                  return val;
                }
              }).map(carro => {
                return (
                  <View key={carro.id_carro} style={styles.veiculos}>
                    <RectButton style={styles.buttonVeiculo} onPress={() => handleNavigateToVisualizarVeiculo(carro.id_carro)}>
                      <View style={styles.buttonGroupText}>
                        <Text numberOfLines={1} style={styles.buttonVeiculoText}>{carro.modelo}</Text>
                        <Text numberOfLines={1} style={styles.textInfo}>{carro.marca}</Text>
                        <Text numberOfLines={1} style={styles.textInfo}>{carro.ano}</Text>
                      </View>
                      {carro.id_imagem != null
                        ?
                        <Image key={carro.id_imagem} source={{ uri: carro.path }} style={styles.imgVeiculo} />
                        :
                        <View style={styles.imgVeiculo}>
                          <Feather name="image" size={50} color='white' />
                        </View>
                      }
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