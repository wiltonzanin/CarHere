import * as React from "react";
import { View, Text } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

function Configuracoes({ navigation }: any) {
  const { navigate } = useNavigation();

  function handleNavigateToAlterarSenhaPage() {
    navigate("AlterarSenha");
  }
  function handleNavigateToMetrica() {
    navigate("Metrica");
  }

  function handleNavigateToSobre() {
    navigate("Sobre");
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
          <RectButton
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            style={styles.button}
          >
            <Feather name="align-justify" size={25} color="#F0EFF4" />
          </RectButton>
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
              <Feather name="chevron-right" size={25} color="white" />
            </RectButton>
          </View>
          <View style={styles.meio}>
            <RectButton
              onPress={handleNavigateToMetrica}
              style={styles.buttonContent}
            >
              <Text style={styles.buttonText}>Tipo de métrica</Text>
              <Feather name="chevron-right" size={25} color="white" />
            </RectButton>
          </View>
          <View style={styles.meio}>
            <RectButton style={styles.buttonContent}>
              <Text style={styles.buttonText}>Ajuda</Text>
              <Feather name="chevron-right" size={25} color="white" />
            </RectButton>
          </View>
          <RectButton
            onPress={handleNavigateToSobre}
            style={styles.buttonContent}
          >
            <Text style={styles.buttonText}>Notificações</Text>
            <Feather name="chevron-right" size={25} color="white" />
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
              <Feather name="chevron-right" size={25} color="white" />
            </RectButton>
          </View>
          <RectButton
            onPress={handleNavigateToAppVersion}
            style={styles.buttonContent}
          >
            <Text style={styles.buttonText}>Versão do App</Text>
            <Feather name="chevron-right" size={25} color="white" />
          </RectButton>
        </View>
      </View>
      <View style={styles.buttonsSection}></View>
    </View>
  );
}

export default Configuracoes;
