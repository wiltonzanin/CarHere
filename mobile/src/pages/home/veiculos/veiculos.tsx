import * as React from "react";
import { View, Text } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

function Veiculos({ navigation }: any) {
  const { navigate } = useNavigation();

  function handleNavigateToCadastroVeiculo() {
    navigate("CadastroVeiculo");
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.search}>
          <RectButton
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            style={styles.button}
          >
            <Feather name="align-justify" size={25} color="#F0EFF4" />
          </RectButton>
          <Text style={styles.text}>Veículos</Text>
          <View style={styles.search}>
            <RectButton
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
              style={styles.button}
            >
              <Feather name="search" size={25} color="#F0EFF4" />
            </RectButton>
          </View>
        </View>
      </View>
      <View style={styles.content}>
      <RectButton
          style={styles.buttonContent}
          onPress={handleNavigateToCadastroVeiculo}
        >
          <Text style={styles.buttonText}>+ Adicionar veículo </Text>
        </RectButton>
      </View>
    </View>
  );
}
export default Veiculos;
