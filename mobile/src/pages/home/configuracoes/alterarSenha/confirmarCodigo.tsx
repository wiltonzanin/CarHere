import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { Text, View, ScrollView } from "react-native";
import styles from "./codigoStyles";
import TextField from "../../../../components/textField";
import BackScreen from "../../../../components/backScreen";

function CodigoConfirmacao() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <BackScreen />
          <Text style={styles.title}>Confirme o código</Text>
          <Text style={styles.instructions}>
            Insira o código enviado para o endereço de Email.
          </Text>
          <View style={styles.buttonContent}>
            <TextField labelName="Código" tipoTeclado={"email-address"} />
          </View>
        </View>
        <View style={styles.buttonStyle}>
          <RectButton style={styles.button}>
            <Text style={styles.buttonText}>Enviar</Text>
          </RectButton>
        </View>
      </View>
    </ScrollView>
  );
}

export default CodigoConfirmacao;
