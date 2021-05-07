import React from "react";
import { Text, View, ScrollView } from "react-native";
import styles from "./styles";

function Notificacao() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}> Notificação </Text>
          <Text style={styles.instructions}> </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default Notificacao;
