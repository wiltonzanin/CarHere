import * as React from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./styles";
import { Button } from "../../../../components/button";
import BackScreen from "../../../../components/backScreen";

function RelatarProblema() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackScreen />
        <Text style={styles.headerTitle}>Relatar um Problema</Text>
        <View />{/* Remover esta linha e substituir por um css que funcione */}
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>Descreva o problema que você está enfrentando</Text>
        {/* documentação: https://reactnative.dev/docs/textinput */}
        <TextInput style={styles.textInput} multiline={true} textAlignVertical='top' />
      </View>
      <Button title="Enviar" />
    </View>
  );
}

export default RelatarProblema;
