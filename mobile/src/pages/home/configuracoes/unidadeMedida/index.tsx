import React from "react";
import { Text, View, ScrollView } from "react-native";
import styles from "./styles";
import DropDownPicker from "react-native-dropdown-picker";
import BackScreen from "../../../../components/backScreen";

function UnidadeMedida() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <BackScreen />
          <Text style={styles.headerTitle}>Unidades de medida</Text>
          <View />
        </View>
        <View>
          <Text style={styles.title}>Tipo de métrica</Text>
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
              { label: "Quilômetros", value: "Quilometros" },
              { label: "Milhas", value: "Milhas" },
            ]}
            style={styles.dropdown}
          ></DropDownPicker>
          <Text style={styles.title}>Unidade de medida de volume</Text>
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
              { label: "Litros", value: "Litros" },
              { label: "Galões", value: "galoes" },
            ]}
            style={styles.dropdown}
          ></DropDownPicker>
        </View>
      </View>
    </ScrollView>
  );
}

export default UnidadeMedida;
