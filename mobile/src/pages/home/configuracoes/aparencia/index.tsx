import React from "react";
import { Text, View, ScrollView } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Feather } from "@expo/vector-icons";

import styles from "./styles";
import BackScreen from "../../../../components/backScreen";

function Aparencia() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <BackScreen />
          <Text style={styles.headerTitle}>Aparência</Text>
          <Feather name="save" size={24} color='#F0EFF4' />
        </View>
        <Text style={styles.title}>Tema</Text>
        <DropDownPicker
          placeholder="Selecione um item"
          dropDownStyle={{
            backgroundColor: "#333333",
            borderColor: "#525252",
          }}
          labelStyle={{
            fontSize: 16,
            color: "#F0EFF4",
          }}
          arrowColor={"#F0EFF4"}
          items={[
            { label: "Claro", value: "Claro" },
            { label: "Escuro", value: "Escuro" },
          ]}
          style={styles.dropdown}
        ></DropDownPicker>
      </View>
    </ScrollView>
  );
}

export default Aparencia;
