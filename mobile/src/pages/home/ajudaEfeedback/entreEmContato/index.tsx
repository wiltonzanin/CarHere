import * as React from "react";
import { View, Text } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { ButtonMenu, ButtonPadrao } from '../../../../components/buttons';

function EntreEmContato({ navigation }: any) {
  const { navigate } = useNavigation();

  function handleNavigateTosolicitacao() {
    navigate("Solicitacao");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ButtonMenu title="" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
        <Text style={styles.headerTitle}>Entre em contato</Text>
        <View />
      </View>
      <View style={styles.content}>
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
