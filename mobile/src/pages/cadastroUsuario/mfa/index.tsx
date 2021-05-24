import React from "react";
import { Text, View, ScrollView } from "react-native";
import styles from "./styles";
import TextField from "../../../components/textField";
import BackScreen from "../../../components/backScreen";
import { Button } from "../../../components/buttons";
import DropDownPicker from "react-native-dropdown-picker";

function Mfa(){
return (
  <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    <View style={styles.container}>
      <View style={styles.header}>
        <BackScreen />
        <Text style={styles.title}>Autenticação em duas etapas</Text>
        <View />
      </View>
      <View style={styles.content}>
        <Text style={styles.subtitle}>Opcional</Text>
        <Text style={styles.text}>Escolha sua pergunta de segurança</Text>
        <View style={{paddingTop:10 }}>
        <DropDownPicker
                placeholder="Escolher pergunta"
                dropDownStyle={{
                  backgroundColor: "#333333",
                  borderColor: "#525252",
                }}
                labelStyle={{
                  fontSize: 16,
                  color: "#fff",
                }}
                arrowColor={"white"}
                items={[
                  { label: "Nome do primeiro animal de estimação", value: "Nome do primeiro animal de estimação" },
                  { label: "Nome do primeiro chefe", value: "Nome do primeiro chefe" },
                  { label: "Nome do primeiro carro", value: "Nome do primeiro carro" },
                  { label: "Comida preferida", value: "Comida preferida" },
                  { label: "Animal preferido", value: "Animal preferido" },
                ]}
                style={styles.dropdown}
              ></DropDownPicker>
              </View>
        <View style={{paddingTop:10 }}>

        <TextField labelName={'Resposta'}/>
      </View>
      <View style={styles.buttonStyle}>
          <Button title="Concluir" />
        </View>
      </View>
    </View>
  </ScrollView>
);
}
 export default Mfa;