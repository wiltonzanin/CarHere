import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, ScrollView } from "react-native";
import styles from "./styles";
import DropDownPicker from "react-native-dropdown-picker";
import BackScreen from "../../../../components/backScreen";

function CadastroVeiculo() {
  const { navigate } = useNavigation();

  function handleNavigateToApp() {
    navigate("App");
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <BackScreen />
          <View style={{ paddingStart: "30%" }}>
            <Text style={styles.title}>Métrica</Text>
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Tipo de Métrica</Text>
          <View style={styles.inputGroup}>
            <View>
              <DropDownPicker
                placeholder="Selecione um item"
                dropDownStyle={{
                  backgroundColor: "#333333",
                  borderColor: "#525252",
                  width: 300,
                }}
                labelStyle={{
                  fontSize: 16,
                  color: "#fff",
                }}
                arrowColor={"white"}
                items={[
                  { label: "Quilômetros", value: "Quilômetros" },
                  { label: "Milhas", value: "Milhas" },
                ]}
                style={styles.dropdown}
              ></DropDownPicker>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default CadastroVeiculo;
