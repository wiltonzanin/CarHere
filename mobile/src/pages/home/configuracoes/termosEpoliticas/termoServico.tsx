import React from "react";
import { Text, View, ScrollView } from "react-native";
import styles from "./styles";
import BackScreen from "../../../../components/backScreen";

function TermoServico() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <BackScreen />
          <View style={{ paddingLeft: "15%" }}>
            <Text style={styles.title}>Termos de serviço </Text>
          </View>
        </View>
        <View style={styles.content}>
        <Text style={styles.title}>Texto</Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default TermoServico;
