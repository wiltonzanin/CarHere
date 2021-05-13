import * as React from "react";
import { View, Text } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import {ButtonMenu} from '../../../../components/buttons';

function Configuracoes({ navigation }: any) {
  const { navigate } = useNavigation();

  function handleNavigateToAlterarSenhaPage() {
    navigate("AlterarSenha");
  }
  function handleNavigateToMetrica() {
    navigate("Metrica");
  }

  function handleNavigateToAppVersion() {
    navigate("AppVersion");
  }

  function handleNavigateToRelatarProblema() {
    navigate("RelatarProblema");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.search}>
          <ButtonMenu title="" onPress={() => navigation.dispatch(DrawerActions.openDrawer())}/>
        </View>
        <View style={{ width: "50%" }}>
          <Text style={styles.headerTitle}>Configurações</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>Preferências</Text>
        <View style={styles.top}>
          <View style={styles.meio}>
            <RectButton
              onPress={handleNavigateToAlterarSenhaPage}
              style={styles.buttonContent}
            >
              <Text style={styles.buttonText}>Alterar Senha</Text>
              <Feather name="chevron-right" size={25} color="#F0EFF4" />
            </RectButton>
          </View>
          <View style={styles.meio}>
            <RectButton
              onPress={handleNavigateToMetrica}
              style={styles.buttonContent}
            >
              <Text style={styles.buttonText}>Tipo de métrica</Text>
              <Feather name="chevron-right" size={25} color="#F0EFF4" />
            </RectButton>
          </View>
          <View style={styles.meio}>
            <RectButton style={styles.buttonContent}>
              <Text style={styles.buttonText}>Ajuda</Text>
              <Feather name="chevron-right" size={25} color="#F0EFF4" />
            </RectButton>
          </View>
          <RectButton style={styles.buttonContent}>
            <Text style={styles.buttonText}>Notificações</Text>
            <Feather name="chevron-right" size={25} color="#F0EFF4" />
          </RectButton>
        </View>
        <Text style={styles.text}>Sobre</Text>
        <View style={styles.top}>
          <View style={styles.meio}>
            <RectButton
              onPress={handleNavigateToRelatarProblema}
              style={styles.buttonContent}
            >
              <Text style={styles.buttonText}>Relatar um problema</Text>
              <Feather name="chevron-right" size={25} color="#F0EFF4" />
            </RectButton>
          </View>
          <RectButton
            onPress={handleNavigateToAppVersion}
            style={styles.buttonContent}
          >
            <Text style={styles.buttonText}>Versão do App</Text>
            <Feather name="chevron-right" size={25} color="#F0EFF4" />
          </RectButton>
        </View>
      </View>
      <View style={styles.buttonsSection}></View>
    </View>
  );
}

export default Configuracoes;
