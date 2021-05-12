import * as React from "react";
import { View, Text, TextInput } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { Button } from "../../../../components/button";

function Principal({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.search}>
          <RectButton
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            style={styles.button}
          >
            <Feather name="align-justify" size={25} color="#F0EFF4" />
          </RectButton>
        </View>
          <Text style={styles.headerTitle}>Relatar um Problema</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>
          Descreva o problema que {"\n"}
          você está enfrentando{" "}
        </Text>
        <View style={{ backgroundColor: "#252525", height: "70%" }}>
        {/* documentação: https://reactnative.dev/docs/textinput */}
        <TextInput style={{height:'100%', width:'100%', backgroundColor:'#525252', fontSize:16, color:'white'}}
        multiline={true}/>
        </View>
      </View>
      <View style={styles.bottomSection}>
        <Button title="Enviar" />
        <Text style={styles.bottomtext}>Versão do App</Text>
        <Text style={styles.bottomtext}>1.0</Text>
      </View>
    </View>
  );
}

export default Principal;
