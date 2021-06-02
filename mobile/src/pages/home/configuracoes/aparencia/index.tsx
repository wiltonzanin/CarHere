import React from "react";
import { Text, View, ScrollView } from "react-native";
import styles from "./styles";
import DropDownPicker from "react-native-dropdown-picker";
import BackScreen from "../../../../components/backScreen";

function Aparencia() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
          <View style={{width:'100%', alignItems:'center', flexDirection:'row'}}>
        <View style={styles.header}>
          <BackScreen />
          </View>
          <View style={{paddingLeft:'40%'}}>
          <Text style={styles.title}>Aparência</Text>
        </View>
        </View>
        <View style={styles.content}>
          <View style={styles.inputGroup}>
            <View>
              <Text style={styles.title}>Tema</Text>
              <DropDownPicker
                placeholder="Selecione um item"
                dropDownStyle={{
                  backgroundColor: "#333333",
                  borderColor: "#525252",
                  width: '100%',
                }}
                
                labelStyle={{
                  fontSize: 16,
                  color: "#fff",
                }}
                arrowColor={"white"}
                items={[
                  { label: "Claro", value: "Claro" },
                  { label: "Escuro", value: "Escuro" },
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

export default Aparencia;
