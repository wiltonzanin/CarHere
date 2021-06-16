import React from "react";
import { Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";

interface InfoProps {
  info1: string;
  info2: string;
  info3: string;
  info4: string;
  info5: string;
}

interface InfoProps2 {
  marca: string;
  ano: string;
  quilometragem: string;
  modelo: string;
  motorizacao: string;
  combustivel: string;
}

interface Servicos {
  nome: string;
  data: string;
}

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

export function Infos({
  marca,
  ano,
  modelo,
  motorizacao,
  quilometragem,
  combustivel,
  ...rest
}: InfoProps2) {
  return (
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

export function Servico({ nome, data, ...rest }: Servicos) {
  const { navigate } = useNavigation();

  function handleNavigateToVisualizarServicos() {
    navigate("VisualizarServicos");
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
          <Feather name="check-circle" size={16} color="#5CB85C" /> Tudo certo
        </Text>
      </RectButton>
    </View>
  );
}
