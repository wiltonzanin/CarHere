import * as React from "react";
import { View, Text } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

function Principal({ navigation }: any) {
  /* const { navigate } = useNavigation();

  function handleNavigateToAlterarSenhaPage() {
    navigate("AlterarSenha");
  }

  function handleNavigateToSobre() {
    navigate("Sobre");
  }
  function handleNavigateToVersionApp() {
    navigate("VersionApp");
  } */

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
        </View>
        <View style={{ width: "50%" }}>
          <Text style={styles.headerTitle}>Ajuda e Feedback</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>Ajuda</Text>
        <View style={styles.top}>
          <View style={styles.meio} >
            <RectButton
              style={styles.buttonContent}>
              <Text style={styles.buttonText}>Entre em contato</Text>
              <Feather name="chevron-right" size={25} color="white" />
            </RectButton>
          </View>
          <View style={styles.meio} >
            <RectButton style={styles.buttonContent}>
              <Text style={styles.buttonText}>Relatar um problema</Text>
              <Feather name="chevron-right" size={25} color="white" />
            </RectButton>
          </View>
          <RectButton style={styles.buttonContent}>
            <Text style={styles.buttonText}>Enviar diagnóstico</Text>
            <Feather name="chevron-right" size={25} color="white" />
          </RectButton>
        </View>
        <Text style={styles.text}>Feedback</Text>
        <View style={styles.bottomSection}>
          <RectButton style={styles.buttonAvaliar}>
            <Feather name="star" size={20} color="white" />
            <Text style={styles.buttonText}>Nos avalie na Google Play!</Text>
          </RectButton>
        </View>
      </View>
      <View style={styles.bottomSection}>
        <Text style={styles.bottomtext}>Versão 1.0</Text>
      </View>
    </View>
  );
}

export default Principal;
