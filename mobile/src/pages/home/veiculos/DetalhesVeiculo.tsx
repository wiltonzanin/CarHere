import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { DrawerActions, StackActions, useRoute } from "@react-navigation/native";
import styles from "./DetalhesVeiculoStyle";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import BackButton from "../../../components/backScreen";
import { Infos } from "../../../components/infos";
import { DecisionModal } from "../../../components/feedbackModal";
import { ButtonDeletar } from '../../../components/buttons';
import CarroService from "../../../database/services/carroService";
import ImagensCarroService from "../../../database/services/imagensCarroService";
import AutonomiaService from "../../../database/services/autonomiaService";
import ServicoService from "../../../database/services/ServicoService";
import QuilometragemService from "../../../database/services/QuilometragemService";

interface DetalhesCarroRouteParams {
  id: number;
};

interface Carro {
  id: number;
  marca: string;
  modelo: string;
  motorizacao: string;
  ano: number;
  combustivel: string;
}

interface ImagensCarro {
  id_imagem: number;
  path: string;
}

interface Quilometragem {
  MaxDate: string;
  quilometragem: number;
}

interface Autonomia {
  id: number;
  tipo_combustivel: string;
  percurso: string;
  media_consumo: number;
}

interface servico {
  id_servicos: number;
  nome: string;
  local: string;
  data: string;
}

function VisualizarVeiculo({ navigation }: any) {

  const route = useRoute();
  const params = route.params as DetalhesCarroRouteParams;

  const [modalDecisionVisible, setModalDecisionVisible] = useState(false);
  const [carros, setCarros] = useState<Carro>();
  const [imgCarro, setImgCarro] = useState<ImagensCarro[]>([]);
  const [autonomia, setAutonomia] = useState<Autonomia>();
  const [servicos, setServicos] = useState<servico[]>([]);
  const [quilometragem, setQuilometragem] = useState<Quilometragem>();

  useEffect(() => {
    CarroService.findCarById(params.id)
      .then((response: any) => {
        setCarros(response)
      }), (error: any) => {
        console.log(error);
      }
    QuilometragemService.KMDat(params.id)
      .then((response: any) => {
        setQuilometragem(response)
      }), (error: any) => {
        console.log(error);
      }
  }, []);

  useEffect(() => {
    ImagensCarroService.findAll(params.id)
      .then((response: any) => {
        setImgCarro(response._array)
      }), (error: any) => {
        console.log(error);
      }
  }, []);

  React.useEffect(() => {
    navigation.addListener('focus', () => {
      AutonomiaService.findLastOne(params.id)
        .then((response: any) => {
          setAutonomia(response);
        }), (error: any) => {
          console.log(error);
        }
    });

  }, [navigation]);

  React.useEffect(() => {
    navigation.addListener('focus', () => {
      ServicoService.findLastOne(params.id)
        .then((response: any) => {
          setServicos(response._array);
        }), (error: any) => {
          console.log(error);
        }
    });
  }, [navigation]);

  function handleNavigateToVisualizarServicos(id: number) {
    //navigation.navigate("VisualizarServicos", { id });
    navigation.dispatch(
      StackActions.push('VisualizarServicos', {
        id: id,
      })
    );
    //navigation.dispatch(DrawerActions.jumpTo("VisualizarServicos", { id }))
  }

  function handleNavigateToServicos() {
    navigation.navigate("Servico");
  }

  function handleListaAutonomia() {
    navigation.navigate("ListaAutonomia", { id_carro: params.id });
  }

  async function deteleVeiculo() {
    setModalDecisionVisible(true);
    await CarroService.deleteCarById(params.id)
  }

  function fecharModal() {
    setModalDecisionVisible(!modalDecisionVisible);
  }

  function handleEditCar(id: number, id_carro: number) {
    navigation.navigate("CadastroVeiculo", { id, id_carro });
  }

  function handleDeleteVehicle() {
    setModalDecisionVisible(!modalDecisionVisible);
    navigation.navigate("VeiculosCadastrados");
  }

  //Adicionar tratamento
  if (!carros) {
    return (
      <Text>Erro</Text>
    );
  }

  var retorno = carros.modelo.split(" ");
  var modelo = ""
  if (retorno.length > 2) {
    modelo = retorno[0] + " " + retorno[1]
  } else {
    modelo = retorno[0]
  }


  return (
    <ScrollView>
      <DecisionModal
        modalVisible={modalDecisionVisible}
        funcaoOnRequestClose={handleDeleteVehicle}
        funcaoFecharModal={fecharModal}
        mensage={"Você realmente deseja excluir este veículo?"} />
      <View style={styles.container}>
        <View style={styles.header}>
          <BackButton />
          <Text style={styles.text}>{modelo}</Text>
          <RectButton onPress={() => handleEditCar(params.id, carros.id)}>
            <Feather name="edit" size={25} color="#F0EFF4" />
          </RectButton>
        </View>
        <View>
          {imgCarro.length == 0
            ? <View style={{ marginTop: 20 }}></View>
            :
            <View style={styles.imagesContainer}>
              <ScrollView horizontal pagingEnabled>
                {imgCarro.map((image) => {
                  return (
                    <Image
                      key={image.id_imagem}
                      source={{ uri: image.path }}
                      style={styles.imgVeiculo}
                    />
                  );
                })}
              </ScrollView>
            </View>
          }
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Informações</Text>
            <Infos
              marca={carros.marca}
              ano={carros.ano}
              motorizacao={carros.motorizacao}
              modelo={modelo}
              combustivel={carros.combustivel}
              quilometragem={quilometragem?.quilometragem || 0}
            />
          </View>
          <View style={styles.card}>
            <RectButton onPress={handleNavigateToServicos}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>Serviços</Text>
                <Feather name="chevron-right" size={24} color="#F0EFF4" />
              </View>
            </RectButton>
            {servicos.length == 0
              ?
              <View style={styles.noInfo}>
                <Feather name="alert-circle" size={25} color="#eca400" />
                <Text style={styles.noInfoText}>Você ainda não possui uma serviço cadastrado!</Text>
              </View>
              :
              servicos.map(servico => {
                return (
                  <View key={servico.id_servicos}>
                    <RectButton style={styles.buttonServico} onPress={() => handleNavigateToVisualizarServicos(servico.id_servicos)}>
                      <View style={styles.buttonGroupTextServico}>
                        <Text style={styles.buttonServicoText}>{servico.nome}</Text>
                        <Text style={styles.textInfo2}>{servico.local || "-----"}</Text>
                        <Text style={styles.textInfo2}>{servico.data}</Text>
                      </View>
                    </RectButton>
                  </View>
                );
              })
            }
          </View>
          <View style={styles.cardStyle}>
            <TouchableOpacity style={styles.cardHeader} onPress={!autonomia ? () => { navigation.navigate("Autonomia"); } : handleListaAutonomia}>
              <Text style={styles.cardTitle}>Autonomia</Text>
              <Feather name="chevron-right" size={24} color="#F0EFF4" />
            </TouchableOpacity>
            {!autonomia
              ?
              <View style={styles.noInfo}>
                <Feather name="alert-circle" size={25} color="#eca400" />
                <Text style={styles.noInfoText}>Você ainda não possui uma autonomia cadastrada!</Text>
              </View>
              :
              <View style={[carros.combustivel.includes("flex") ? styles.infoGroup : styles.info]}>
                <View>
                  <Text style={styles.buttonServicoText}>{autonomia.tipo_combustivel}</Text>
                  <Text style={styles.textInfo2}>{autonomia.percurso}</Text>
                  <Text style={styles.textInfo2}>{autonomia.media_consumo} Km/L</Text>
                </View>
              </View>
            }
          </View>
          <View style={styles.deleteButton}>
            <ButtonDeletar title="Deletar" onPress={() => deteleVeiculo()}></ButtonDeletar>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default VisualizarVeiculo;
