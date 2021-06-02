import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { ButtonMenu, ButtonPadrao } from "../../../../components/buttons";

function Acessibilidade({ navigation }: any) {
/*   const { navigate } = useNavigation();

  function handleNavigateToUnidadeMedida() {
    navigate("UnidadeMedida");
  }

  function handleNavigateToTermos() {
    navigate("Termos");
  }

  function handleNavigateToOpcoesUsuario() {
    navigate("OpcoesUsuario");
  }
  function handleNavigateToNotificacao() {
    navigate("Notificacao");
  }
  function handleNavigateToAparencia() {
    navigate("Aparencia");
  }
 */
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.search}>
            <ButtonMenu
              title=""
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            />
          </View>
          <Text style={styles.headerTitle}>Acessibilidade</Text>
          <View />
        </View>
        <View>
          <Text style={styles.sectionTitle}>Leitores de tela</Text>
          <View style={styles.buttonsGroup}>
            <View style={styles.buttonsGroupContent}>
              <ButtonPadrao
                title="Selecionar leitor de tela"
              />
            </View>
            <ButtonPadrao title="Conversão de texto em voz" />
          </View>

          <Text style={styles.sectionTitle}>Audio e texto na tela</Text>
          <View style={styles.buttonsGroup}>
            <ButtonPadrao
              title="Legendas"
            />
          </View>
          <Text style={styles.sectionTitle}>Controles de interação</Text>
          <View style={styles.buttonsGroup}>
            <View style={styles.buttonsGroupContent}>
              <ButtonPadrao
                title="Atraso ao tocar e pressionar"
              />
            </View>
              <ButtonPadrao
                title="Vibração"
              />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default Acessibilidade;
