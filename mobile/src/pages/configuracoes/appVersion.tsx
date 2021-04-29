import React from "react";
import { View, Text } from "react-native";
import styles from "../configuracoes/telaPrincipal/styles";
import BackScreen from "../../components/backScreen";

function VersionApp({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackScreen />
      </View>
      <View
        style={{
          alignContent: "center",
          justifyContent: "flex-start",
          width: "100%",
        }}
      >
        <Text style={styles.text}>Versão 1.0</Text>
      </View>
    </View>
  );
}

export default VersionApp;
