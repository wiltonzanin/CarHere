import React, { useState } from "react";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Text, View, ScrollView, Modal, Pressable } from "react-native";
import styles from "./styles";
import TextField from "../../components/textField";
import BackScreen from "../../components/backScreen";
import api from "../../services/api";
import { Button } from "../../components/buttons";
import { CheckBox } from 'react-native-elements';
import { Feather } from "@expo/vector-icons";

function CadastroUsuario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [isSelected, setIsSelected] = useState(false);

  const { navigate } = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalWarning, setModalWarning] = useState(false);

  async function handleCreateUsuario() {
    const data = new FormData();

    data.append("nome", nome);
    data.append("email", email);
    data.append("senha", senha);

    try {
      await api.post("/usuarios", data);
    } catch (error) {
      setModalWarning(true);
    }

    setModalVisible(true);
  }

  function handleNavigateToTermos() {
    navigate("Termos");
  }

  function handleNavigateToMfa() {
    setModalVisible(!modalVisible);
    navigate("Mfa");
  }

  function handleNavigateToIncial() {
    setModalVisible(!modalVisible);
    navigate("Inicial");
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => { handleNavigateToIncial() }}
        statusBarTranslucent={true}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {modalWarning
              ? <Feather name='alert-circle' size={50} color={'#eca400'} style={{ marginTop: 20 }} />
              : <Feather name='check-circle' size={50} color={'#5CB85C'} style={{ marginTop: 20 }} />
            }
            {modalWarning
              ? <Text style={styles.modalText}>Ops, tivemos um problema! Por favor tente novamente mais tarde.</Text>
              : <Text style={styles.modalText}>Cadastro realizado com sucesso!</Text>
            }
            {modalWarning
              ? <Pressable
                style={styles.button}
                onPress={() => handleNavigateToIncial()}>
                <Text style={styles.textStyle}>OK</Text>
              </Pressable>
              : <Pressable
                style={styles.button}
                onPress={() => handleNavigateToMfa()}>
                <Text style={styles.textStyle}>OK</Text>
              </Pressable>
            }
          </View>
        </View>
      </Modal>
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
            funcaoOnChangeText={setNome}
          />
          <TextField
            labelName="E-mail"
            value={email}
            funcaoOnChangeText={setEmail}
            tipoTeclado={"email-address"}
          />
          <TextField
            labelName="Senha"
            value={senha}
            funcaoOnChangeText={setSenha}
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
          <Button title="Próximo" onPress={() => handleCreateUsuario()} />
        </View>
      </View>
    </ScrollView>
  );
}

export default CadastroUsuario;