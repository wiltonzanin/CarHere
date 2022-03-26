import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { DrawerActions, useNavigation, useRoute } from "@react-navigation/native";
import styles from "./stylesDetalhes";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import BackButton from "../../../components/backScreen";
import api from "../../../services/api";
import { CheckBox } from 'react-native-elements';

import { InfosService } from "../../../components/infos";
import { DecisionModal } from "../../../components/feedbackModal";
import { ButtonDeletar } from '../../../components/buttons';

interface DetalhesServicoRouteParams {
  id: number;
};

interface Servico {
  nome: string;
  local: string;
  veiculo: string;
  quilometragem: number;
  datafor: string;
  ValorServico: number;
  descricao: string;
  carro: Array<{
    id_carro: number;
    marca: string;
    modelo: string;
    motorizacao: string;
    ano: number;
    combustivel: string;    
  }>;
}

function VisualizarServicos({ navigation }: any) {

  const route = useRoute();
  const params = route.params as DetalhesServicoRouteParams;
  const [isSelected, setIsSelected] = useState(false);

  const [modalDecisionVisible, setModalDecisionVisible] = useState(false);

  const [servico, setServico] = useState<Servico>();

  useEffect(() => {
    api
      .get(`/servico/detalhes/${params.id}`)
      .then((response) => setServico(response.data));
  }, [params.id]);

/*
useEffect(() => {
  api
    .delete(`/servico/delete/${params.id}`)
    .then((response) => setServico(response.data));
}, [params.id]);
*/

  function deteleServico(){
    setModalDecisionVisible(true);
  }

  function fecharModal() {
    setModalDecisionVisible(!modalDecisionVisible);
  }

  function handleDeleteVehicle() {
    setModalDecisionVisible(!modalDecisionVisible);
    navigation.navigate("Servico");
  }

  console.log(servico)
 
  //Adicionar tratamento
  if (!servico) {
    return (
      <Text>Erro</Text>
    );
  }

  return (
    <ScrollView>
      <DecisionModal
        modalVisible={modalDecisionVisible}
        funcaoOnRequestClose={handleDeleteVehicle}
        funcaoFecharModal={fecharModal}
        mensage={"Você realmente deseja excluir este Servico?"} />
      <View style={styles.container}>
        <View style={styles.header}>
          <BackButton />
          <Text style={styles.title}>{servico.nome}</Text>
          <RectButton onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <Feather name="edit" size={25} color="#F0EFF4" />
          </RectButton>
        </View>
        <View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Informações</Text>
            <InfosService
              nome={servico.nome}
              local={servico.local}
              veiculo={servico.veiculo}
              quilometragem={servico.quilometragem}
              datafor={servico.datafor}
              ValorServico={servico.ValorServico}
              descricao={servico.descricao}
              carro={servico.carro}
            />
            
          </View>
          <View style={styles.checkbox}>
            <CheckBox
              containerStyle={{ backgroundColor: '#252525', borderColor: '#252525', padding: 0, margin: 0, marginLeft: 0 }}
              checkedIcon='check-square-o'
              checkedColor='#8F1622'
              size={25}
              checked={isSelected}
              onPress={() => setIsSelected(!isSelected)} 
            />
            <View style={styles.buttoncheckbox}>
              <Text style={styles.textcheckbox}>Serviço foi realizado</Text>
            </View>
          </View>
          <View style={styles.deleteButton}>
            <ButtonDeletar title="Deletar" onPress={deteleServico}></ButtonDeletar>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
export default VisualizarServicos;
