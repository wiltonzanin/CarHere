import * as React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { ButtonPadrao } from '../../../../components/buttons';
import BackScreen from "../../../../components/backScreen";

function EntreEmContato({ navigation }: any) {
  const { navigate } = useNavigation();

  function handleNavigateTosolicitacao() {
    navigate("Solicitacao");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackScreen />
        <Text style={styles.headerTitle}>Entre em contato</Text>
        <View />
      </View>
      <View>
        <Text style={styles.text}>Escolha a melhor forma para entrar em contato</Text>
        <View style={styles.top}>
          <View style={styles.meio}>
            <ButtonPadrao title="Enviar um email" />
          </View>
          <ButtonPadrao title="Enviar uma solicitação pelo App" onPress={handleNavigateTosolicitacao} />
        </View>
      </View>
    </View >
  );
}

export default EntreEmContato;
