import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { DrawerActions, useNavigation, useRoute } from "@react-navigation/native";
import styles from "./autonomiaDetailsStyles";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import BackButton from "../../../../components/backScreen";
import { InfosAutonomia } from "../../../../components/infos";
import { DecisionModal } from "../../../../components/feedbackModal";
import { ButtonDeletar } from '../../../../components/buttons';
import AutonomiaService from "../../../../database/services/autonomiaService";

interface AutonomiaRouteParams {
  id_autonomia: number;
};

interface IAutonomia {
  km_inicial: number;
  km_final: number;
  tipo_combustivel: string;
  litros_abastecidos: number;
  percurso: string;
  data_criacao: string;
  media_consumo: number;
}

function AutonomiaDetails({ navigation }: any) {

  const route = useRoute();
  const params = route.params as AutonomiaRouteParams;

  const [modalDecisionVisible, setModalDecisionVisible] = useState(false);
  const [autonomia, setAutonomia] = useState<IAutonomia>();

  useEffect(() => {
    AutonomiaService.findAutonomiaById(params.id_autonomia)
      .then((response) => {
        setAutonomia(response as IAutonomia);
      })
  }, []);

  function askDeleteAutonomia() {
    setModalDecisionVisible(true);
  }

  function fecharModal() {
    setModalDecisionVisible(!modalDecisionVisible);
  }

  function handleDeleteAutonomia() {
    setModalDecisionVisible(!modalDecisionVisible);
    AutonomiaService.deleteAutonomiaById(params.id_autonomia);
    navigation.goBack();
  }

  function handleEditAutonomia(id_autonomia: number) {
    navigation.navigate("Autonomia", { id_autonomia });
  }

  //Adicionar tratamento
  if (!autonomia) {
    return (
      <Text>Erro</Text>
    );
  }

  return (
    <ScrollView>
      <DecisionModal
        modalVisible={modalDecisionVisible}
        funcaoOnRequestClose={handleDeleteAutonomia}
        funcaoFecharModal={fecharModal}
        mensage={"Você realmente deseja excluir esta autonomia?"} />
      <View style={styles.container}>
        <View style={styles.header}>
          <BackButton />
          <Text style={styles.title}>Informações</Text>
          <TouchableOpacity onPress={() => handleEditAutonomia(params.id_autonomia)}>
            <Feather name="edit" size={25} color="#F0EFF4" />
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.card}>
            <InfosAutonomia
              km_inicial={autonomia.km_inicial}
              km_final={autonomia.km_final}
              tipo_combustivel={autonomia.tipo_combustivel}
              litros_abastecidos={autonomia.litros_abastecidos}
              percurso={autonomia.percurso}
              data_criacao={autonomia.data_criacao}
              media_consumo={autonomia.media_consumo}
            />
          </View>
          <View style={styles.deleteButton}>
            <ButtonDeletar title="Deletar" onPress={askDeleteAutonomia}></ButtonDeletar>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
export default AutonomiaDetails;
