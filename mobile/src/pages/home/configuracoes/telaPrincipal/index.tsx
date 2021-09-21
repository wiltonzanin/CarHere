import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { ButtonMenu, ButtonPadrao } from "../../../../components/buttons";

function Configuracoes({ navigation }: any) {
  const { navigate } = useNavigation();

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
  function handleNavigateToAcessibilidade() {
    navigate("Acessibilidade");
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <ButtonMenu
            title=""
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          />
          <Text style={styles.headerTitle}>Configurações</Text>
          <View />
        </View>
        <View>
          <Text style={styles.sectionTitle}>Preferências</Text>
          <View style={styles.buttonsGroup}>
            <View style={styles.buttonsGroupContent}>
              <ButtonPadrao
                title="Unidades de medida"
                onPress={handleNavigateToUnidadeMedida}
              />
            </View>
            <View style={styles.buttonsGroupContent}>
              <ButtonPadrao title="Acessibilidade"
                onPress={handleNavigateToAcessibilidade} />
            </View>
            <View style={styles.buttonsGroupContent}>
              <ButtonPadrao title="Dicas" />
            </View>
            <View style={styles.buttonsGroupContent}>
              <ButtonPadrao
                title="Aparência"
                onPress={handleNavigateToAparencia}
              />
            </View>
            <ButtonPadrao
              title="Notificações"
              onPress={handleNavigateToNotificacao}
            />
          </View>
          <Text style={styles.sectionTitle}>Conta</Text>
          <View style={styles.buttonsGroup}>
            <ButtonPadrao
              title="Opções de usuário"
              onPress={handleNavigateToOpcoesUsuario}
            />
          </View>
          <Text style={styles.sectionTitle}>Preferências</Text>
          <View style={styles.buttonsGroup}>
            <ButtonPadrao
              title="Termos de Serviço"
              onPress={handleNavigateToTermos}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default Configuracoes;
