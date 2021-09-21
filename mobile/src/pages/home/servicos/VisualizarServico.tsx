import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import styles from "./stylesDetalhes";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import BackButton from "../../../components/backScreen";

function VisualizarServicos({ navigation }: any) {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.search}>
            <BackButton />
            <Text style={styles.title}> Detalhes sobre o serviço </Text>
            <View style={styles.search}>
              <RectButton
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                style={styles.buttonsHeader}
              >
                <Feather name="edit" size={25} color="#F0EFF4" />
              </RectButton>
            </View>
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Troca de óleo </Text>
          <Text style={styles.subtitle}> Realizado no dia 09/09/2021 </Text>
          <View style={styles.secao}>
            <Text style={styles.title}>Local onde foi realizado </Text>
            <Text style={styles.subtitle}>Centro, 1234 </Text>
          </View>
          <View style={styles.secao}>
            <Text style={styles.title}>Descrição dos serviçoes realizados</Text>
            <Text style={styles.subtitle}>Realizado troca de óleo e filtro, óleo: Ipiranga 2030w</Text>
          </View>
          <View style={styles.secao}>
            <Text style={styles.title}>Valor Total </Text>
            <Text style={styles.subtitle}>R$ 120,00 </Text>
          </View>
          <View style={styles.secao}>
            <Text style={styles.title}>Observações</Text>
            <Text style={styles.subtitle}>Nenhuma</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
export default VisualizarServicos;
