import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, BackHandler } from "react-native";
import { DrawerActions, useFocusEffect, StackActions } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import styles from "./styles";
import fonts from '../../../../Styles/fonts'
import colors from '../../../../Styles/colors'
import LoadingScreen from "../../../../components/loadingScreen";
import SearchBar from "../../../../components/searchBar";
import { ButtonAdicionar } from '../../../../components/buttons';
import { ButtonMenu } from '../../../../components/buttons';
import AutonomiaService from "../../../../database/services/autonomiaService";

interface IAutonomia {
  id_autonomia: number;
  tipo_combustivel: string;
  media_consumo: number;
}

function ListaAutonomia({ navigation }: any) {

  let listaVazia = true;

  const [carregando, setCarregando] = useState(false);
  const [erroCarregar, setErroCarregar] = useState(false);
  const [autonomia, setAutonomia] = useState<IAutonomia[]>([]);

  function handleNavigateToVisualizarVeiculo(id: number) {
    navigation.navigate("VisualizarVeiculo", { id });
  }

  function handleNavigateToCadastroVeiculo() {
    navigation.navigate("CadastroVeiculo");
  }

  useEffect(() => {
    let isMounted = true;
    AutonomiaService.findAll()
      .then((response: any) => {
        if (isMounted) setAutonomia(response._array)
      }), (error: any) => {
        console.log(error);
      }
    return () => { isMounted = false };
  });

  if (autonomia.length > 0) {
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
              autonomia.map(autonomia => {
                return (
                  <View key={autonomia.id_autonomia} style={styles.veiculos}>
                    <RectButton style={styles.buttonVeiculo} onPress={() => handleNavigateToVisualizarVeiculo(carro.id_carro)}>
                      <View style={styles.buttonGroupText}>
                        <Text numberOfLines={1} style={styles.buttonVeiculoText}>{autonomia.tipo_combustivel}</Text>
                        <Text style={styles.buttonVeiculoTextManutencaoGreen}><Feather name="check-circle" size={16} color={colors.green} /> Manutenção em dia</Text>
                      </View>
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
export default ListaAutonomia;