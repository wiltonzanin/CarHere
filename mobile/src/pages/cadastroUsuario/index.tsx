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

function CadastroUsuario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmeSenha, setConfirmeSenha] = useState('');
  const [isSelected, setIsSelected] = useState(false);

  const { navigate } = useNavigation();

  async function handleCreateUsuario() {
    const data = new FormData();

    data.append("nome", nome);
    data.append("email", email);
    data.append("senha", senha);
    data.append('confirmeSenha', confirmeSenha);

    await api.post("/usuarios", data);

    navigate("CadastroVeiculo");
  }

  function handleNavigateToTermos() {
    navigate("Termos");
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
          <TextField
            labelName="Confirme sua senha"
            value={confirmeSenha}
            funcaoOnChangeText={setConfirmeSenha} />
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
              <Text style={styles.textTermosECondicoes}>Aceito os termos e condições</Text>
            </RectButton>
          </View>
          <Button title="Próximo" onPress={handleCreateUsuario} />
        </View>
      </View>
    </ScrollView>
  );
}

export default CadastroUsuario;
