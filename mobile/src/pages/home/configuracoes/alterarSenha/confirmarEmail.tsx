import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { Text, View, ScrollView } from "react-native";
import styles from "./styles";
import TextField from "../../../../components/textField";
import BackScreen from "../../../../components/backScreen";
import { Button } from '../../../../components/buttons';
import { useNavigation } from "@react-navigation/native";

function AlterarSenha({navigation}: any) {

  function handleNavigateToCodigoConfirmacao() {
    navigation.navigate("CodigoConfirmacao");
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <BackScreen />
          <Text style={styles.headerTitle}>Alterar senha</Text>
          <View />
        </View>
        <View>
          <Text style={styles.instructions}>
            Insira o email vinculado a sua conta e nós iremos enviar um e-mail
            com as instruções para a alteração da senha.
          </Text>
          <View style={styles.formContent}>
            <TextField labelName="Email" tipoTeclado={"email-address"} />
            <Button title="Enviar instruções" onPress={handleNavigateToCodigoConfirmacao} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default AlterarSenha;
