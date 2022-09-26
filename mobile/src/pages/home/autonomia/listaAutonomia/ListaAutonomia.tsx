import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import styles from "./styles";
import { darkTheme } from '../../../../Styles/colors';
import BackButton from "../../../../components/backScreen";
import AutonomiaService from "../../../../database/services/autonomiaService";

interface AutonomiaRouteParams {
  id_carro: number;
};

interface IAutonomia {
  id_autonomia: number;
  tipo_combustivel: string;
  percurso: string;
  media_consumo: number;
}

function ListaAutonomia({ navigation }: any) {

  const route = useRoute();
  const params = route.params as AutonomiaRouteParams;

  //Criar lógica para caso o usuário exclua todas as autonomias
  const [autonomia, setAutonomia] = useState<IAutonomia[]>([]);

  React.useEffect(() => {
    navigation.addListener('focus', () => {
      AutonomiaService.findAllByIdCarro(params.id_carro)
        .then((response: any) => {
          setAutonomia(response._array);
        }), (error: any) => {
          console.log(error);
        }
    });
  }, [navigation]);

  function handleToAutonomiaDetails(id_autonomia: number) {
    navigation.navigate("AutonomiaDetails", { id_autonomia });
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerGroup}>
            <BackButton />
            <Text style={styles.headerText}>Autonomias</Text>
            <View />
          </View>
        </View>
        <View style={styles.content}>
          {autonomia.map(autonomia => {
            return (
              <View key={autonomia.id_autonomia} style={styles.veiculos}>
                <RectButton style={styles.buttonVeiculo} onPress={() => { handleToAutonomiaDetails(autonomia.id_autonomia) }}>
                  <View style={styles.buttonGroupText}>
                    <Text numberOfLines={1} style={styles.buttonVeiculoText}>Combustivel: {autonomia.tipo_combustivel}</Text>
                    <Text numberOfLines={1} style={styles.buttonVeiculoText}>Persurso: {autonomia.percurso}</Text>
                    <Text style={styles.buttonVeiculoTextManutencaoGreen}><Feather name="trending-up" size={16} color={darkTheme.green} />  {autonomia.media_consumo} Km/L</Text>
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