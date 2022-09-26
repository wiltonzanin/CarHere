import React, { useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import * as ImagePicker from 'expo-image-picker';

import styles from "./styles";
import { darkTheme } from '../../../../Styles/colors'
import { ButtonPadrao } from "../../../../components/buttons";
import { Feather } from "@expo/vector-icons";
import BackScreen from "../../../../components/backScreen";
import { useAuth } from '../../../../contexts/auth';
import { FeedbackModal, SuccessModal } from "../../../../components/feedbackModal";
import LoadingScreen from "../../../../components/loadingScreen";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { FirebaseInit } from '../../../../database/Firebase';
import { getAuth, sendPasswordResetEmail, updateProfile } from "firebase/auth";

FirebaseInit();

function OpcoesUsuario({ navigation }: any) {

  const auth = getAuth();
  const user = auth.currentUser;

  const { signOut } = useAuth();
  const [modalMensage, setModalMensage] = useState("");
  const [modalWarning, setModalWarning] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const storage = getStorage();
  const storageRef = ref(storage, "/user/" + user?.uid + "/photo.jpg");

  async function handleSelecionarFoto() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Opa, precisamos da permissão de acesso a galeria para que possamos salvar as imagens :)");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (result.cancelled) {
      return;
    }

    const { uri } = result;
    const blob : Blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });
  
    //const result1 = await uploadBytes(fileRef, blob);
    uploadBytes(storageRef, blob).then((snapshot) => {
      getDownloadURL(storageRef)
      .then((url) => {
        updateProfile((user)!, {
          photoURL: url
        }).then(()=>{
          //setImage(url)
          console.log("Salvou fotoooooo")
      })
      })
    });
  }

  function handleSignOut() {
    auth.signOut().then(() => {
      // Sign-out successful.
      signOut();
    }).catch((error) => {
      // An error happened.
      console.log(error)
      console.log("erro")
    });
  }

  function handleNavigateToAlterarSenhaPage() {
    if (user?.uid != null) {
      sendPasswordResetEmail(auth, user?.uid, undefined)
        .then(() => {
          setModalMensage("E-mail enviado, por favor verificar a caixa de lixo eletronico");
          setModalVisible(true);
        }).catch((error) => {
          console.log("erro " + error.code)
        })
    }
  }

  function closeModal() {
    setModalWarning(false);
    setCarregando(false);
    setModalVisible(false);
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <LoadingScreen carregando={carregando} />
      <SuccessModal
        modalVisible={modalVisible}
        funcaoOnRequestClose={closeModal}
        mensage={modalMensage} />
      <FeedbackModal
        modalVisible={modalWarning}
        funcaoOnRequestClose={closeModal}
        mensage={modalMensage} />
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
              <Image source={{ uri: user?.photoURL || "" }} style={styles.foto} />
            </TouchableOpacity>
          </View>
          <Text style={styles.text}>
            {user?.displayName || "-----" + " "} <Feather name="edit" color={darkTheme.grayLight} size={18} />{" "}
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
            {/* <View style={styles.meio}>
              <ButtonPadrao title="Segurança" onPress={handleNavigateToSeguranca} />
            </View> */}
            <ButtonPadrao title="Sair" onPress={handleSignOut} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default OpcoesUsuario;
