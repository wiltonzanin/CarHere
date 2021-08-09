import React, { useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { ButtonPadrao } from "../../../../components/buttons";
import { Feather } from "@expo/vector-icons";
import BackScreen from "../../../../components/backScreen";
import { useAuth } from '../../../../contexts/auth';
import Modal from "./modal";

function OpcoesUsuario() {
  const { navigate } = useNavigation();
  const [modal, setModal] = useState(false);
  const [image, setImage] = useState(null);

  const { signOut } = useAuth();

  function handleSignOut() {
    signOut();
}

  function handleNavigateToAlterarSenhaPage() {
    navigate("AlterarSenha");
  }
  function handleNavigateToSeguranca() {
    navigate("Seguranca");
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <BackScreen />
          <View>
            <Text style={styles.headerTitle}>Opções do Usuário</Text>
          </View>
          <View/>
        </View>
        <View style={styles.content}>
          <View style={styles.foto}>
            <Image source={require('../../../../assets/images/muie.jpg')} style={styles.foto} />
          </View>
          <Text style={styles.text}>
            Fulana da Silva <Feather name="edit" color="#fff" size={18} />{" "}
          </Text>
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
                onPress={() => setModal(true)}
              />
            </View>
            <View style={styles.meio}>
              <ButtonPadrao title="Segurança" onPress={handleNavigateToSeguranca} />
            </View>
            <ButtonPadrao title="Sair" onPress={handleSignOut} />
          </View>
        </View>
      </View>
      <Modal show={modal} close={() => setModal(false)} />
    </ScrollView>
  );
}

export default OpcoesUsuario;
