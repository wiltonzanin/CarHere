import React, { useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import { ButtonPadrao } from "../../../../components/buttons";
import { Feather } from "@expo/vector-icons";
import BackScreen from "../../../../components/backScreen";
import { useAuth } from '../../../../contexts/auth';

function OpcoesUsuario({navigation}: any) {
  const { navigate } = useNavigation();

  const { signOut } = useAuth();
  const [image, setImage] = useState<string>();

  async function handleSelecionarFoto() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Opa, precisamos da permissão de acesso a galeria para que possamos salvar as imagens :)");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (result.cancelled) {
      return;
    }

    const { uri } = result;

    setImage(uri)
  }

  function handleSignOut() {
    signOut();
  }

  function handleNavigateToAlterarSenhaPage() {
    navigation.navigate("AlterarSenha");
  }
  function handleNavigateToSeguranca() {
    navigation.navigate("Seguranca");
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <BackScreen />
          <View>
            <Text style={styles.headerTitle}>Opções do Usuário</Text>
          </View>
          <View />
        </View>
        <View style={styles.content}>
          <View style={styles.foto}>
            <TouchableOpacity onPress={handleSelecionarFoto}>
              <Image source={{ uri: image }} style={styles.foto} />
            </TouchableOpacity>
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
              <ButtonPadrao title="Alterar foto" onPress={handleSelecionarFoto} />
            </View>
            <View style={styles.meio}>
              <ButtonPadrao title="Segurança" onPress={handleNavigateToSeguranca} />
            </View>
            <ButtonPadrao title="Sair" onPress={handleSignOut} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default OpcoesUsuario;
