import * as React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { DrawerActions } from "@react-navigation/native";
import styles from "./DetalhesVeiculoStyle";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import BackButton from "../../../components/backScreen";
import { Infos, InfoServico } from "../../../components/infos";
import { ButtonAdicionar } from '../../../components/buttons';

function visualizarVeiculo({ navigation }: any) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <BackButton />
          <Text style={styles.text}> Impreza GC8 </Text>
          <RectButton onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <Feather name="edit" size={25} color="#F0EFF4" />
          </RectButton>
        </View>
        <View>
          <View style={styles.imagesContainer}>
            <ScrollView horizontal pagingEnabled>
              <Image
                source={require("../../../assets/images/impreza.jpg")}
                style={styles.imgVeiculo}
              />
              <Image
                source={require("../../../assets/images/impreza2.jpg")}
                style={styles.imgVeiculo}
              />
            </ScrollView>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Informações</Text>
            <Infos
              marca="Subaru"
              ano="1996"
              motorizacao="2.5"
              modelo="Impreza GC8"
              combustivel="Gasolina"
              quilometragem="156148"
            />
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Serviços</Text>
            <View style={styles.cardServices}>
              <View style={styles.servicesHeader}>
                <Text style={styles.servicesTitle}>Troca de óleo</Text>
                <Text style={styles.servicesText}>24/08/2021</Text>
              </View>
              <Text style={styles.textStatusOk}>
                <Feather name="check-circle" size={14} color="#5CB85C" />{" "}
                Tudo certo!
              </Text>
            </View>
            <View style={styles.cardServices}>
              <View style={styles.servicesHeader}>
                <Text style={styles.servicesTitle}>Revisão dos freios</Text>
                <Text style={styles.servicesText}>24/08/2021</Text>
              </View>
              <Text style={styles.textStatusWarning}>
                <Feather name="alert-circle" size={14} color="#F0AD4E" />{" "}
                Requer ação!
              </Text>
            </View>
            <ButtonAdicionar title="Adicionar serviço"></ButtonAdicionar>
          </View>
          <View style={styles.cardStyle}>
            <Text style={styles.cardTitle}>Autonomia</Text>
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
