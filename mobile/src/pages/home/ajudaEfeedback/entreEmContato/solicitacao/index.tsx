import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./styles";
import { Button } from "../../../../../components/buttons";
import BackScreen from "../../../../../components/backScreen";
import { CheckBox } from "react-native-elements";

function Solicitacao() {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackScreen />
        <Text style={styles.headerTitle}>Enviar solicitação</Text>
        <View />
        {/* Remover esta linha e substituir por um css que funcione */}
      </View>
      <View style={styles.content}>
      <Text style={styles.text}>Assunto</Text>
        <View style={styles.checkbox}>
          <CheckBox
            containerStyle={{
              backgroundColor: "#252525",
              borderColor: "#252525",
              padding: 0,
              margin: 0,
              marginLeft: 0,
            }}
            checkedIcon="check-square-o"
            checkedColor="#8F1622"
            size={25}
            checked={isSelected}
            onPress={() => setIsSelected(!isSelected)}
          />
          <Text style={styles.text}>Bugs</Text>
        </View>
        <View style={styles.checkbox}>
          <CheckBox
            containerStyle={{
              backgroundColor: "#252525",
              borderColor: "#252525",
              padding: 0,
              margin: 0,
              marginLeft: 0,
            }}
            checkedIcon="check-square-o"
            checkedColor="#8F1622"
            size={25}
            checked={isSelected}
            onPress={() => setIsSelected(!isSelected)}
          />
          <Text style={styles.text}>Travamento</Text>
        </View>
        <View style={styles.checkbox}>
          <CheckBox
            containerStyle={{
              backgroundColor: "#252525",
              borderColor: "#252525",
              padding: 0,
              margin: 0,
              marginLeft: 0,
            }}
            checkedIcon="check-square-o"
            checkedColor="#8F1622"
            size={25}
            checked={isSelected}
            onPress={() => setIsSelected(!isSelected)}
          />
          <Text style={styles.text}>Erros no App</Text>
        </View>
        <View style={styles.checkbox}>
          <CheckBox
            containerStyle={{
              backgroundColor: "#252525",
              borderColor: "#252525",
              padding: 0,
              margin: 0,
              marginLeft: 0,
            }}
            checkedIcon="check-square-o"
            checkedColor="#8F1622"
            size={25}
            checked={isSelected}
            onPress={() => setIsSelected(!isSelected)}
          />
          <Text style={styles.text}>Problema ao realizar cadastro do veículo</Text>
        </View>
        <View style={styles.checkbox}>
          <CheckBox
            containerStyle={{
              backgroundColor: "#252525",
              borderColor: "#252525",
              padding: 0,
              margin: 0,
              marginLeft: 0,
            }}
            checkedIcon="check-square-o"
            checkedColor="#8F1622"
            size={25}
            checked={isSelected}
            onPress={() => setIsSelected(!isSelected)}
          />
          <Text style={styles.text}>Outro:</Text>
        </View>
          <TextInput
          style={styles.textOutro}
          multiline={true}
          textAlignVertical="top"
        />

        <Text style={styles.text}>
          Descrição:
        </Text>
        {/* documentação: https://reactnative.dev/docs/textinput */}
        <TextInput
          style={styles.textInput}
          multiline={true}
          textAlignVertical="top"
          />
      </View>
      <Button title="Enviar" />
    </View>
  );
}

export default Solicitacao;
