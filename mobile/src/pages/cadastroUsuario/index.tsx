import React, { useState } from "react";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Text, View, ScrollView } from "react-native";
import styles from "./styles";
import TextField from "../../components/textField";
import BackScreen from "../../components/backScreen";
import api from "../../services/api";
import { Button } from "../../components/button";
import { CheckBox } from 'react-native-elements';
import { color } from "react-native-elements/dist/helpers";

function CadastroUsuario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  //const [confirmeSenha, setConfirmeSenha] = useState('');

  const { navigate } = useNavigation();

  async function handleCreateUsuario() {
    const data = new FormData();

    data.append("nome", nome);
    data.append("email", email);
    data.append("senha", senha);
    //data.append('confirmeSenha', confirmeSenha);

    await api.post("/usuarios", data);

    navigate("CadastroVeiculo");
  }
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <BackScreen />
          <Text style={styles.title}>Vamos começar:</Text>
        </View>
        <View style={styles.content}>
          <TextField
            labelName="Nome"
            value={nome}
            funcaoOnChangeText={setNome}
          />
          <TextField
            labelName="Email"
            value={email}
            funcaoOnChangeText={setEmail}
            tipoTeclado={"email-address"}
          />
          <TextField
            labelName="Senha"
            value={senha}
            funcaoOnChangeText={setSenha}
          />
          {/* <TextField labelName="Confirme sua senha" value={confirmeSenha} funcaoOnChangeText={setConfirmeSenha} /> */}
        </View>
        <View style={styles.buttonStyle}>
          {/* documentação: https://reactnativeelements.com/docs/checkbox/ */}
          <CheckBox title="Aceito os termos e condições" 
          containerStyle={{backgroundColor:'#252525', borderColor:'#252525'}}
          textStyle={{color:'#fff'}}
          checkedIcon='dot-circle-o'
          checkedColor='#8F1622'/>
          <Button title="Próximo" onPress={handleCreateUsuario} />
        </View>
      </View>
    </ScrollView>
  );
}

export default CadastroUsuario;
