import React from "react";
import { Text, View, ScrollView } from "react-native";

import styles from "./styles";
import BackScreen from "../../../../components/backScreen";

function Notificacao() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
      <View style={styles.header}>
          <BackScreen />
          <Text style={styles.headerTitle}>Notificações</Text>
          <View />
        </View>
      </View>
    </ScrollView>
  );
}

export default Notificacao;
