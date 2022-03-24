import React, { useState } from "react";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Text, View, ScrollView } from "react-native";

import styles from "./styles";
import TextField from "../../components/textField";
import BackScreen from "../../components/backScreen";
import api from "../../services/api";
import { Button } from "../../components/buttons";
import { CheckBox } from 'react-native-elements';
import { SuccessModal, FeedbackModal } from "../../components/feedbackModal";

import LoadingScreen from "../../components/loadingScreen";

function CadastroUsuario({navigation}:any) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [isSelected, setIsSelected] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalWarning, setModalWarning] = useState(false);

  const [carregando, setCarregando] = useState(false);

  async function handleCreateUsuario() {
    const data = new FormData();

    data.append("nome", nome);
    data.append("email", email);
    data.append("senha", senha);

    //envia os dados do usuário para a api
    await api.post('/usuarios', data)
    .then(function (response) {
      navigation.navigate("Inicial");
      console.log(response);
    })
    //caso ocorra algum erro
    .catch(function (error) {
      setCarregando(false)
      // setModalVisible(true);
      setModalWarning(true);
    });
  
  }

  function handleNavigateToTermos() {
    navigation.navigate("Termos");
  }

  function handleNavigateToIncial() {
    setModalVisible(!modalVisible);
    setCarregando(false);
    navigation.navigate("Inicial");
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <LoadingScreen carregando={carregando} />
      <FeedbackModal
        modalVisible={modalVisible}
        funcaoOnRequestClose={handleNavigateToIncial} />
      <View style={styles.container}>
        <View style={styles.header}>
          <BackScreen />
          <Text style={styles.title}>Vamos começar</Text>
          <View />
        </View>
        <View>
          <TextField
            labelName="Nome"
            value={nome}
            onChangeText={setNome}
          />
          <TextField
            labelName="E-mail"
            value={email}
            onChangeText={setEmail}
            tipoTeclado={"email-address"}
          />
          <TextField
            labelName="Senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry={true}
          />
          <TextField
            labelName="Confirme sua senha"
            secureTextEntry={true}
          />
        </View>
        <View>
          {/* documentação: https://reactnativeelements.com/docs/checkbox/ */}
          <View style={styles.termosECondicoes}>
            <CheckBox
              containerStyle={{ backgroundColor: '#252525', borderColor: '#252525', padding: 0, margin: 0, marginLeft: 0 }}
              checkedIcon='check-square-o'
              checkedColor='#8F1622'
              size={25}
              checked={isSelected}
              onPress={() => setIsSelected(!isSelected)} />
            <RectButton style={styles.buttonTermosECondicoes} onPress={handleNavigateToTermos}>
              <Text style={styles.textTermosECondicoes}>Aceito os termos e condições de uso de dados</Text>
            </RectButton>
          </View>
          <Button title="Concluir" onPress={() => handleCreateUsuario()} />
        </View>
      </View>
    </ScrollView >
  );
}

export default CadastroUsuario;