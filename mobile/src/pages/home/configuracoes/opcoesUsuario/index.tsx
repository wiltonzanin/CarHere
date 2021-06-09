import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { ButtonMenu, ButtonPadrao } from "../../../../components/buttons";
import { Feather } from "@expo/vector-icons";
import BackScreen from "../../../../components/backScreen";
import { useAuth } from '../../../../contexts/auth';


function OpcoesUsuario() {
  const { navigate } = useNavigation();

  const { signOut } = useAuth();

  function handleNavigateToAlterarSenhaPage() {
    navigate("AlterarSenha");
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <BackScreen />
          <View style={{ paddingLeft: '20%' }}>
            <Text style={styles.headerTitle}>Opções do Usuário</Text>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.foto}>

            <Text style={styles.text}>Foto</Text>
          </View>
          <Text style={styles.text}>Fulana da Silva   <Feather name="edit" color="#fff" size={18} /> </Text>
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
            <View style={styles.meio}>
              <ButtonPadrao
                title="Segurança"
              />
            </View>
            <ButtonPadrao
              title="Sair"
              onPress={signOut}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default OpcoesUsuario;
