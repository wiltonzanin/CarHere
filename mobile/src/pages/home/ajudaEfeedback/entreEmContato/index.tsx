import * as React from "react";
import { View, Text, Linking } from "react-native";
import styles from "./styles";
import { ButtonPadrao } from '../../../../components/buttons';
import BackScreen from "../../../../components/backScreen";

function EntreEmContato({ navigation }: any) {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackScreen />
        <Text style={styles.headerTitle}>Entre em contato</Text>
        <View />
      </View>
      <View>
        <Text style={styles.text}>
          Escolha a melhor forma para entrar em contato
        </Text>
        <View style={styles.top}>
          <ButtonPadrao title="Enviar um email" onPress={() => Linking.openURL('mailto:CarHere.Suporte@gmail.com?subject=Envie sugestões ou descreva um problema&body=Descrição')} />
        </View>
      </View>
    </View >
  );
}

export default EntreEmContato;
