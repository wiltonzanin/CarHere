import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { ButtonMenu, ButtonPadrao } from "../../../../components/buttons";
import { Feather } from "@expo/vector-icons";

function OpcoesUsuario({ navigation }: any) {
  const { navigate } = useNavigation();

  function handleNavigateToAlterarSenhaPage() {
    navigate("AlterarSenha");
  }
  function handleNavigateToPadroesComunidade() {
    navigate("PadroesComunidade");
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
          <View style={{ paddingLeft:'15%' }}>
            <Text style={styles.headerTitle}>Opções do Usuário</Text>
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>Foto</Text>
          <Text style={styles.text}>Fulana da Silva<Feather name="edit" color="#fff" size={18}/> </Text>
          <View style={styles.top}>
            <View style={styles.meio}>
              <ButtonPadrao
                title="Alterar senha"
                onPress={handleNavigateToAlterarSenhaPage}
              />
            </View>
            <View style={styles.meio}>
              <ButtonPadrao
                title="Alterar foto"
              />
            </View>
              <ButtonPadrao
                title="Segurança"
              />
        </View>
        </View>
        <View style={styles.buttonsSection}></View>
      </View>
    </ScrollView>
  );
}

export default OpcoesUsuario;
