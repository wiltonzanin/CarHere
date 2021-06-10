import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { ButtonPadrao } from "../../../../../components/buttons";
import { Feather } from "@expo/vector-icons";
import BackScreen from "../../../../../components/backScreen";

function Seguranca() {
  const { navigate } = useNavigation();

  function handleNavigateToMfa() {
    navigate("Mfa");
  }
  
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <BackScreen />
          <View style={{ paddingLeft: "20%" }}>
            <Text style={styles.headerTitle}>Segurança</Text>
          </View>
        </View>
        <View style={styles.content}>
    
          <View style={styles.top}>
  
              <ButtonPadrao
                title="MFA"
                onPress={handleNavigateToMfa}
              />
          
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default Seguranca;
