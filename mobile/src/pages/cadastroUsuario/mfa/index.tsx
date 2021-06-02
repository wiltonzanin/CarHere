import React from "react";
import { Text, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import TextField from "../../../components/textField";
import { Button } from "../../../components/buttons";
import DropDownPicker from "react-native-dropdown-picker";

function Mfa() {

  const { navigate } = useNavigation();

  function handleNavigateToIncial() {
    navigate("Inicial");
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Autenticação em duas etapas</Text>
        </View>
        <View>
          <Text style={styles.subtitle}>Opcional</Text>
          <View>
            <Text style={styles.dropdownLabel}>Escolha sua pergunta de segurança</Text>
            <DropDownPicker
              placeholder="Escolher pergunta"
              dropDownStyle={{
                backgroundColor: "#333333",
                borderColor: "#525252"
              }}
              labelStyle={{
                fontSize: 16,
                color: "#F0EFF4",
              }}
              arrowColor={"#F0EFF4"}
              items={[
                { label: "Nome do primeiro animal de estimação", value: "Nome do primeiro animal de estimação" },
                { label: "Nome do primeiro chefe", value: "Nome do primeiro chefe" },
                { label: "Nome do primeiro carro", value: "Nome do primeiro carro" },
                { label: "Comida preferida", value: "Comida preferida" },
                { label: "Animal preferido", value: "Animal preferido" },
              ]}
              style={styles.dropdown}
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <TextField labelName={'Resposta'} />
          </View>
          <Button title="Concluir" onPress={handleNavigateToIncial} />
        </View>
      </View>
    </ScrollView>
  );
}
export default Mfa;