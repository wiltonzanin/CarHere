import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { DrawerActions, useRoute } from "@react-navigation/native";
import styles from "./DetalhesVeiculoStyle";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import BackButton from "../../../components/backScreen";
import { Infos, InfoServico } from "../../../components/infos";
import { ButtonAdicionar } from '../../../components/buttons';
import api from "../../../services/api";

interface DetalhesCarroRouteParams {
  id: number;
};

interface Carro {
  id: number;
  marca: string;
  modelo: string;
  motorizacao: string;
  ano: number;
  combustivel: string,
  images: Array<{
    id: number;
    url: string;
  }>;
}

function visualizarVeiculo({ navigation }: any) {

  const route = useRoute();
  const params = route.params as DetalhesCarroRouteParams;

  const [carro, setCarro] = useState<Carro>();

  useEffect(() => {
    api
      .get(`carros/detalhes/${params.id}`)
      .then((response) => setCarro(response.data));
  }, [params.id]);

  if (!carro) {
    return (
      <Text>Erro</Text>
    );
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <BackButton />
          <Text style={styles.text}>{carro.modelo}</Text>
          <RectButton onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <Feather name="edit" size={25} color="#F0EFF4" />
          </RectButton>
        </View>
        <View>
          <View style={styles.imagesContainer}>
            <ScrollView horizontal pagingEnabled>
              {carro.images.map((image) => {
                return (
                  <Image
                    key={image.id}
                    source={{ uri: image.url }}
                    style={styles.imgVeiculo}
                  />
                );
              })}
            </ScrollView>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Informações</Text>
            <Infos
              marca={carro.marca}
              ano={carro.ano}
              motorizacao={carro.motorizacao}
              modelo={carro.modelo}
              combustivel={carro.combustivel}
            />
          </View>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Serviços</Text>
              <Feather name="chevron-right" size={24} color="#F0EFF4" />
            </View>
            <TouchableOpacity style={styles.cardServices}>
              <View style={styles.servicesHeader}>
                <Text style={styles.servicesTitle}>Troca de óleo</Text>
                <Text style={styles.servicesText}>24/08/2021</Text>
              </View>
              <Text style={styles.textStatusOk}>
                <Feather name="check-circle" size={14} color="#5CB85C" />{" "}
                Tudo certo!
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardServices}>
              <View style={styles.servicesHeader}>
                <Text style={styles.servicesTitle}>Revisão dos freios</Text>
                <Text style={styles.servicesText}>24/08/2021</Text>
              </View>
              <Text style={styles.textStatusWarning}>
                <Feather name="alert-circle" size={14} color="#F0AD4E" />{" "}
                Requer ação!
              </Text>
            </TouchableOpacity>
            <ButtonAdicionar title="Adicionar serviço"></ButtonAdicionar>
          </View>
          <View style={styles.cardStyle}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Autonomia</Text>
              <Feather name="chevron-right" size={24} color="#F0EFF4" />
            </View>
            <View style={styles.infos}>
              <InfoServico
                info1="Gasolina"
                info2="Cidade"
                info3="12 km/L"
                info4="Estrada"
                info5="12 km/L"
              />
              <InfoServico
                info1="Álcool"
                info2="Cidade"
                info3="n/a km/L"
                info4="Estrada"
                info5="n/a km/L"
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default visualizarVeiculo;
