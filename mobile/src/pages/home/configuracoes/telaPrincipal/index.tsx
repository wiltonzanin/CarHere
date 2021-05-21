import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { ButtonMenu, ButtonPadrao } from "../../../../components/buttons";

function Configuracoes({ navigation }: any) {
  const { navigate } = useNavigation();

  function handleNavigateToAlterarSenhaPage() {
    navigate("AlterarSenha");
  }
  function handleNavigateToUnidadeMedida() {
    navigate("UnidadeMedida");
  }

  function handleNavigateToTermos() {
    navigate("Termos");
  }

  function handleNavigateToOpcoesUsuario() {
    navigate("OpcoesUsuario");
  }

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
          <View style={{ paddingLeft: '20%' }}>
            <Text style={styles.headerTitle}>Configurações</Text>
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>Preferências</Text>
          <View style={styles.top}>
            <View style={styles.meio}>
              <ButtonPadrao
                title="Unidades de medida"
                onPress={handleNavigateToUnidadeMedida}
              />
            </View>
            <View style={styles.meio}>
              <ButtonPadrao
                title="Acessibilidade"
              />
            </View>
            <View style={styles.meio}>
              <ButtonPadrao
                title="Dicas e Manual do usuário"
              />
            </View>
            <View style={styles.meio}>
              <ButtonPadrao title="Aparência" />
            </View>
            <ButtonPadrao title="Notificações" />
          </View>
          <Text style={styles.text}>Conta</Text>
          <View style={styles.top}>
            <ButtonPadrao title="Opções de usuário"
              onPress={handleNavigateToOpcoesUsuario} />
          </View>
          <Text style={styles.text}>Preferências</Text>
          <View style={styles.top}>
            <ButtonPadrao title="Termos de Serviço"
              onPress={handleNavigateToTermos} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default Configuracoes;
