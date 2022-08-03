import * as React from "react";
import { View, Text } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { ButtonMenu, ButtonPadrao } from '../../../components/buttons';
import {darkTheme} from "../../../Styles/colors";

function AjudaFeedback({ navigation }: any) {

  function handleNavigateToEntrarEmContato() {
    navigation.navigate("EntrarEmContato");
  }
  function handleNavigateToManualDoUsuario() {
    navigation.navigate("ManualDoUsuario");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ButtonMenu title="" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
        <Text style={styles.headerTitle}>Ajuda e Feedback</Text>
        <View />
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>Ajuda</Text>
        <View style={styles.top}>
          <View style={styles.meio}>
            <ButtonPadrao title="Entre em contato"
              onPress={handleNavigateToEntrarEmContato} />
          </View>
          <ButtonPadrao title="Manual do usuário" 
          onPress={handleNavigateToManualDoUsuario} />
        </View>
        <Text style={styles.text}>Feedback</Text>
        <View style={styles.bottomSection}>
          <RectButton style={styles.buttonAvaliar}>
            <Feather name="star" size={20} color={darkTheme.grayLight} />
            <Text style={styles.buttonText}>Nos avalie na Google Play!</Text>
          </RectButton>
        </View>
      </View>
      <View style={styles.bottomSection}>
        <Text style={styles.bottomtext}>Versão do App</Text>
        <Text style={styles.bottomtext}>1.0.0</Text>
      </View>
    </View>
  );
}

export default AjudaFeedback;
