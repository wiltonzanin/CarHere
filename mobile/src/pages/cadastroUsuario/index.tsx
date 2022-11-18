import React, { useState } from "react";
import { RectButton } from "react-native-gesture-handler";
import { Text, View, ScrollView } from "react-native";
import NetInfo from "@react-native-community/netinfo";

import styles from "./styles";
import TextField from "../../components/textField";
import BackScreen from "../../components/backScreen";
import { SuccessModal, FeedbackModal, ErrorModal } from "../../components/feedbackModal";
import { Button } from "../../components/buttons";
import { CheckBox } from 'react-native-elements';

import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile} from "firebase/auth";
import { FirebaseInit } from '../../database/Firebase';

import LoadingScreen from "../../components/loadingScreen";
import { darkTheme } from "../../Styles/colors";

FirebaseInit();
const auth = getAuth();

function CadastroUsuario({ navigation }: any) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senhaconf, setSenhaconf] = useState("");
  const [senha, setSenha] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const [modalMensage, setModalMensage] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalWarning, setModalWarning] = useState(false);

  const [nomevalmsg, setValnome] = useState("")
  const [nomecheck, setnomeCheck] = useState(false)
  const [emailvalmsg, setValEmail] = useState("")
  const [emailcheck, setEmailCheck] = useState(false)
  const [senhavalmsg, setvalSenhas] = useState("")
  const [senhacheck, setSenhaCheck] = useState(false)

  const [carregando, setCarregando] = useState(false);

  function StatusNet() {
    var Status
    NetInfo.addEventListener(state => {
      Status = state.isConnected;
    });
    return Status
  } 
  
  function handleCreateUsuario() {

    //Valicação conexão internet
    if (StatusNet() === false){
      setModalMensage("Necessario estar conectado a internet para continuar!");
      setModalWarning(true);
    }
    // Validação Nome
    if (!nome === false) {
      setValnome("")
      setnomeCheck(true)
    }
    else {
      setValnome("Nome é nescessario!")
    }
    // Validação E-mail
    if (!email === true) {
      setValEmail("E-mail é nescessario!")
    }
    else {
      if (validateEmail(email) === false) {
        setValEmail("E-mail está incorreto")
      }
      else {
        setValEmail("")
        setEmailCheck(true)
      }
    }
    if ((!senha) === false && (!senhaconf) === false) {
      if (senha.length >= 6) {
        if (senha === senhaconf) {
          setvalSenhas("")
          setSenhaCheck(true)
        }
        else {
          setvalSenhas("Senhas não coincidem!")
        }
      }
      else {
        setvalSenhas("A senha tem que ter mais de 6 caracteres!")
      }
    }
    else {
      setvalSenhas("Senha é nescessario");
    }

    // Validação Geral // Checkbox
    if (isSelected === false) {
      setModalMensage("Nescessario aceitar os termos e condições !");
      setModalWarning(true);
    }
    else {
      if (nomecheck === true && emailcheck === true && senhacheck === true) {
        createUserWithEmailAndPassword(auth, email, senha)
          .then((userCredential) => {
            const user = userCredential.user;
            sendEmailVerification(userCredential.user)
            .then(() => {
              setModalMensage("Email de verificação enviado, verificar o lixo eletronico ou a caixa de Spam");
              setModalVisible(true);
                // Email verification sent!
                // ...
            });
            updateProfile(userCredential.user, {
                displayName: nome
              }).then(() => {
             
              }).catch((error) => {
                // An error occurred
                // ...
              });
            
            setModalMensage("Usuario cadastrado com sucesso!");
            setModalVisible(true);
          })
          .catch((error) => {
            setModalMensage("E-mail ja cadastrado !");
            setModalWarning(true);
          });
      }
    }
  }

  function validateEmail(emailval: string) {
    var re = /\S+@\S+\.\S+/;
    return re.test(emailval);
  }


  function handleNavigateToTermos() {
    navigation.navigate("Termos");
  }

  function handleNavigateToIncial() {
    setModalVisible(!modalVisible);
    setCarregando(false);
    navigation.navigate("Inicial");
  }

  function closeModal() {
    setModalWarning(false);
    setCarregando(false);
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <LoadingScreen carregando={carregando} />
      <SuccessModal
        modalVisible={modalVisible}
        funcaoOnRequestClose={handleNavigateToIncial}
        mensage={modalMensage} />
      <FeedbackModal
        modalVisible={modalWarning}
        funcaoOnRequestClose={closeModal}
        mensage={modalMensage} />
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
            mensagemErro={nomevalmsg}
          />
          <TextField
            labelName="E-mail"
            value={email}
            onChangeText={setEmail}
            mensagemErro={emailvalmsg}
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
            value={senhaconf}
            onChangeText={setSenhaconf}
            secureTextEntry={true}
            mensagemErro={senhavalmsg}
          />
        </View>
        <View>
          {/* documentação: https://reactnativeelements.com/docs/checkbox/ */}
          <View style={styles.termosECondicoes}>
            <CheckBox
              containerStyle={{ backgroundColor: darkTheme.background, borderColor: darkTheme.background, padding: 0, margin: 0, marginLeft: 0 }}
              checkedIcon='check-square-o'
              checkedColor='#8F1622'
              size={25}
              checked={isSelected}
              onPress={() => setIsSelected(!isSelected)} />
            <RectButton style={styles.buttonTermosECondicoes} onPress={handleNavigateToTermos}>
              <Text style={styles.textTermosECondicoes}>Aceito os termos e condições de uso de dados</Text>
            </RectButton>
          </View>
          <Button title="Concluir" onPress={handleCreateUsuario} />
        </View>
      </View>
    </ScrollView >
  );
}

export default CadastroUsuario;