import * as React from "react";
import { View, Text } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { ButtonMenu } from '../../../components/buttons';

function AjudaFeedback({ navigation }: any) {
  const { navigate } = useNavigation();

  function handleNavigateToRelatarProblema() {
    navigate("RelatarProblema");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.search}>
          <ButtonMenu title="" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
        </View>
        <Text style={styles.headerTitle}>Ajuda e Feedback</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>Ajuda</Text>
        <View style={styles.top}>
          <View style={styles.meio}>
            <RectButton style={styles.buttonContent}>
              <Text style={styles.buttonText}>Entre em contato</Text>
              <Feather name="chevron-right" size={25} color="#F0EFF4" />
            </RectButton>
          </View>
          <View style={styles.meio}>
            <RectButton
              onPress={handleNavigateToRelatarProblema}
              style={styles.buttonContent}>
              <Text style={styles.buttonText}>Relatar um problema</Text>
              <Feather name="chevron-right" size={25} color="#F0EFF4" />
            </RectButton>
          </View>
          <RectButton style={styles.buttonContent}>
            <Text style={styles.buttonText}>Enviar diagnóstico</Text>
            <Feather name="chevron-right" size={25} color="#F0EFF4" />
          </RectButton>
        </View>
        <Text style={styles.text}>Feedback</Text>
        <View style={styles.bottomSection}>
          <RectButton style={styles.buttonAvaliar}>
            <Feather name="star" size={20} color="#F0EFF4" />
            <Text style={styles.buttonText}>Nos avalie na Google Play!</Text>
          </RectButton>
        </View>
      </View>
      <View style={styles.bottomSection}>
        <Text style={styles.bottomtext}>Versão do App</Text>
        <Text style={styles.bottomtext}>1.0.0</Text>
      </View>
    </View>
  );
}

export default AjudaFeedback;
