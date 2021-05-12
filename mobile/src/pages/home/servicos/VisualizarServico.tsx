import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import styles from "./stylesDetalhes";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import BackButton from '../../../components/backScreen'


function VisualizarServicos({ navigation }: any) {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.search}>
            <BackButton/>
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
          <Text style={styles.title}> *nome do serviço* </Text>
          <Text style={styles.subtitle}> Realizado no dia *data* </Text>
        <View style={styles.secao}>
          <Text style={styles.title}> Local onde foi realizado </Text>
          <Text style={styles.subtitle}> *nome e endereço do local* </Text>
        </View>
        <View style={styles.secao}>
          <Text style={styles.title}> Descrição dos serviçoes realizados </Text>
          <Text style={styles.subtitle}> *descrição* </Text>
        </View>
        <View style={styles.secao}>
          <Text style={styles.title}>Valor Total </Text>
          <Text style={styles.subtitle}> R$ *valor* </Text>
        </View>
        <View style={styles.secao}>
          <Text style={styles.title}>Observações</Text>
          <Text style={styles.subtitle}> *obs* </Text>
        </View>
      </View>
    </View>
    </ScrollView>
  );
}
export default VisualizarServicos;
