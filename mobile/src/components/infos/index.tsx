import React from "react";
import { Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";
import {darkTheme} from '../../Styles/colors'

interface InfoProps {
  info1: string;
  info2: string;
  info3: string;
  info4: string;
  info5: string;
}

interface InfoProps2 {
  marca: string;
  ano: number;
  modelo: string;
  motorizacao: string;
  combustivel: string;
  quilometragem: number;
}

interface InfoPropsService {
  nome: string;
  local: string;
  veiculo: string;
  quilometragem: string;
  datafor: string;
  ValorServico: string;
  descricao: string;
}

interface IAutonomia {
  km_inicial: number;
  km_final: number;
  tipo_combustivel: string;
  litros_abastecidos: number;
  percurso: string;
  data_criacao: string;
  media_consumo: number;
}

interface Servicos {
  nome: string;
  data: string;
}
/*
export function InfoServico({
  info1,
  info2,
  info3,
  info4,
  info5,
  ...rest
}: InfoProps) {
  return (
    <View style={styles.autonomia}>
      <Text style={styles.textInfo1}>{info1}</Text>
      <Text style={styles.textInfo2}>{info2}</Text>
      <Text style={styles.textInfo2}>{info3}</Text>
      <Text style={styles.textInfo2}>{info4}</Text>
      <Text style={styles.textInfo2}>{info5}</Text>
    </View>
  );
}
*/
export function Infos({
  marca,
  ano,
  modelo,
  motorizacao,
  combustivel,
  quilometragem,
  ...rest
}: InfoProps2) {
  return(
    <View style={styles.infos}>
      <View>
        <Text style={styles.textInfo}>Marca</Text>
        <Text style={styles.textInfoCampo}>{marca}</Text>
        <Text style={styles.textInfo}>Ano</Text>
        <Text style={styles.textInfoCampo}>{ano}</Text>
        <Text style={styles.textInfo}>Motorização</Text>
        <Text style={styles.textInfoCampo}>{motorizacao}</Text>
      </View>
      <View>
        <Text style={styles.textInfo}>Modelo</Text>
        <Text style={styles.textInfoCampo}>{modelo}</Text>
        <Text style={styles.textInfo}>Combustível</Text>
        <Text style={styles.textInfoCampo}>{combustivel}</Text>
        <Text style={styles.textInfo}>Quilometragem</Text>
        <Text style={styles.textInfoCampo}>{quilometragem}</Text>
      </View>
    </View>
  );
}

export function InfosService({
  nome,
  local,
  veiculo,
  quilometragem,
  datafor,
  ValorServico,
  descricao,
  ...rest
}: InfoPropsService){
  return (
    <View style={styles.infos}>
      <View>
        <Text style={styles.textInfoService}>Nome</Text>
        <Text style={styles.textInfoCampo}>{nome}</Text>
        <Text style={styles.textInfoService}>Local</Text>
        <Text style={styles.textInfoCampo}>{local}</Text>
        <Text style={styles.textInfoService}>Veiculo</Text>
        <Text style={styles.textInfoCampo}>{veiculo}</Text>
        <Text style={styles.textInfoService}>Quilometragem</Text>
        <Text style={styles.textInfoCampo}>{quilometragem}</Text>
        <Text style={styles.textInfoService}>Data</Text>
        <Text style={styles.textInfoCampo}>{datafor}</Text>
        <Text style={styles.textInfoService}>Valor</Text>
        <Text style={styles.textInfoCampo}>{ValorServico}</Text>
        <Text style={styles.textInfoService}>Descrição</Text>
        <Text style={styles.textInfoCampo}>{descricao}</Text>
      </View>
    </View>
  );
}

export function InfosAutonomia({
  km_inicial,
  km_final,
  tipo_combustivel,
  litros_abastecidos,
  percurso,
  data_criacao,
  media_consumo,
  ...rest
}: IAutonomia){
  return (
    <View style={styles.infos}>
      <View>
        <Text style={styles.textInfoService}>Quilometragem incial</Text>
        <Text style={styles.textInfoCampo}>{km_inicial} Km</Text>
        <Text style={styles.textInfoService}>Quilometragem final</Text>
        <Text style={styles.textInfoCampo}>{km_final} Km</Text>
        <Text style={styles.textInfoService}>Tipo de combustivel</Text>
        <Text style={styles.textInfoCampo}>{tipo_combustivel}</Text>
        <Text style={styles.textInfoService}>Percurso</Text>
        <Text style={styles.textInfoCampo}>{percurso}</Text>
        <Text style={styles.textInfoService}>Data</Text>
        <Text style={styles.textInfoCampo}>{data_criacao}</Text>
        <Text style={styles.textInfoService}>Media de consumo</Text>
        <Text style={styles.textInfoCampo}>{media_consumo} Km/h</Text>
      </View>
    </View>
  );
}

export function Servico({ nome, data, ...rest }: Servicos , {navigation}: any) {

  function handleNavigateToVisualizarServicos() {
    navigation.navigate("VisualizarServicos");
  }
  return (
    <View style={styles.servicos}>
      <RectButton
        style={styles.buttonServico}
        onPress={handleNavigateToVisualizarServicos}
      >
        <View style={styles.ButtonText}>
          <Text style={styles.buttonGroupText}> {nome} </Text>
          <Text> {data} </Text>
        </View>
        <Text style={styles.buttonServiceTextGreen}>
          <Feather name="check-circle" size={16} color={darkTheme.green} /> Tudo certo
        </Text>
      </RectButton>
    </View>
  );
}
