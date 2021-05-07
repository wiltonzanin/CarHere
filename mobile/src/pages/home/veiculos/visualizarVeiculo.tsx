import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

function visualizarVeiculo({ navigation }: any) {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.search}>
          <RectButton
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            style={styles.button}
          >
            <Feather name="align-justify" size={25} color="#F0EFF4" />
          </RectButton>
          <Text style={styles.text}> *nome do veiculo* </Text>
          <View style={styles.search}>
            <RectButton
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
              style={styles.button}
            >
              <Feather name="edit" size={25} color="#F0EFF4" />
            </RectButton>
          </View>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.imagemVeiculo}>
          <Text style={styles.text}>Imagem do veículo</Text>
        </View>
        <Text style={styles.text}>Autonomia</Text>
        <View style={styles.search}>
        <View style={styles.autonomia}>
          <Text style={{color:'black', fontSize:18}}>Gasolina</Text>
          <Text style={{color:'black', fontSize:14}}>Cidade</Text>
          <Text style={{color:'black', fontSize:14}}>*valor* Km/L</Text>
          <Text style={{color:'black', fontSize:14}}>Estrada</Text>
          <Text style={{color:'black', fontSize:14}}>*valor* Km/L</Text>
        </View>
        <View style={styles.autonomia}>
          <Text style={{color:'black', fontSize:18}}>Álcool</Text>
          <Text style={{color:'black', fontSize:14}}>Cidade</Text>
          <Text style={{color:'black', fontSize:14}}>*valor* Km/L</Text>
          <Text style={{color:'black', fontSize:14}}>Estrada</Text>
          <Text style={{color:'black', fontSize:14}}>*valor* Km/L</Text>
        </View>
        </View>
        <Text style={styles.text}>Serviços</Text>
        <View style={styles.search}>
          <View style={styles.servicos}>
            <Text style={{color:'black', fontSize:18}}>Nome do serviço</Text>
            <Text style={{color:'black', fontSize:14}}>Data</Text>
          </View>
          <View style={styles.servicos}>
          <Text style={{color:'black', fontSize:18}}>Nome do serviço</Text>
          <Text style={{color:'black', fontSize:14}}>Data</Text>

          </View>
        </View>
        <Text style={styles.text}>Informações</Text>
      </View>
    </View>
    </ScrollView>
  );
}

export default visualizarVeiculo;
