import React from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import styles from "./styles";
import { Button } from "../../../../../components/buttons";
import BackScreen from "../../../../../components/backScreen";
import { Checkbox } from "../../../../../components/checkbox";

function Solicitacao() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.header}>
        <BackScreen />
        <Text style={styles.headerTitle}>Enviar solicitação</Text>
        <View />
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>Assunto</Text>
        <Checkbox title={"Bugs"} />
        <Checkbox title={"Travamento"} />
        <Checkbox title={"Erros no app"} />
        <Checkbox title={"Problema ao realizar cadastro do veículo"} />
        <Checkbox title={"Outro:"} />
        <TextInput
          style={styles.textInputOutro}
          multiline={true}
          textAlignVertical="top"
        />

        <Text style={styles.text}>Descrição:</Text>
        {/* documentação: https://reactnative.dev/docs/textinput */}
        <TextInput
          style={styles.textInput}
          multiline={true}
          textAlignVertical="top"
        />
      </View>
      <Button title="Enviar" />
    </View>
    </ScrollView>
  );
}

export default Solicitacao;
