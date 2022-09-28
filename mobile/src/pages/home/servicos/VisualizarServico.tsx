import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import styles from "./stylesDetalhes";
import BackButton from "../../../components/backScreen";
import { CheckBox } from 'react-native-elements';
import { InfosService } from "../../../components/infos";
import { DecisionModal } from "../../../components/feedbackModal";
import { ButtonDeletar } from '../../../components/buttons';
import ServicoService from "../../../database/services/ServicoService";
import { darkTheme } from "../../../Styles/colors";

interface DetalhesServicoRouteParams {
  id: number;
};

interface Servico {
  id_servicos: number;
  nome: string;
  local: string;
  quilometragem: string;
  data: string;
  valor_servico: string;
  descricao: string;
  status_servico: number;
  id_carro: number;

  veiculo: string;
  marca: string;
  modelo: string;
  motorizacao: string;
  ano: number;
}

function VisualizarServicos({ navigation }: any) {

  const route = useRoute();
  const params = route.params as DetalhesServicoRouteParams;

  var msgNull = "-----";
  const [isSelected, setIsSelected] = useState(false);
  const [modalDecisionVisible, setModalDecisionVisible] = useState(false);
  const [servico, setServico] = useState<Servico>();
  const [status, setStatus] = useState(0);

  React.useEffect(() => {
    navigation.addListener('focus', () => {
      ServicoService.detailserv(params.id)
        .then((response: any) => {
          setServico(response);
          setStatus(response.status_servico);
        }).catch(() => {
        })
    });
  }, [navigation]);

  function deteleServico() {
    setModalDecisionVisible(true);
  }

  function fecharModal() {
    setModalDecisionVisible(!modalDecisionVisible);
  }

  function handleDeleteVehicle() {
    setModalDecisionVisible(!modalDecisionVisible);
    ServicoService.delsrv(params.id);
    navigation.navigate("Servico");
  }

  function handleEditService(id: number, id_carro: number) {
    navigation.navigate("CadastroServicos", { id, id_carro });
  }

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
          <Text style={styles.title}>Informações</Text>
          <RectButton onPress={() => handleEditService(params.id, servico.id_carro)}>
            <Feather name="edit" size={25} color="#F0EFF4" />
          </RectButton>
        </View>
        <View style={styles.card}>
          <InfosService
            key={servico.id_servicos}
            nome={servico.nome}
            local={servico.local || msgNull}
            veiculo={servico.marca + " " + servico.modelo + " " + servico.motorizacao + " " + servico.ano}
            quilometragem={servico.quilometragem || msgNull}
            datafor={servico.data || msgNull}
            ValorServico={"R$ " + servico.valor_servico || msgNull}
            descricao={servico.descricao || msgNull}
          />
        </View>
        <View style={styles.checkbox}>
          <CheckBox
            containerStyle={{ backgroundColor: darkTheme.background, borderColor: '#252525', padding: 0, margin: 0, marginLeft: 0 }}
            checkedIcon='check-square-o'
            checkedColor='#8F1622'
            size={25}
            checked={status == 1 ? true : false}
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
    </ScrollView>
  );
}
export default VisualizarServicos;
