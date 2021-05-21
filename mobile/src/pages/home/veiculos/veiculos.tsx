import * as React from "react";
import { View, Text, Image,ScrollView } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import {ButtonAdicionar} from '../../../components/buttons';
import {ButtonMenu} from '../../../components/buttons';

function Veiculos({ navigation }: any) {
  const { navigate } = useNavigation();

  function handleNavigateToVisualizarVeiculo() {
    navigate("VisualizarVeiculo");
  }

  function handleNavigateToCadastroVeiculo() {
    navigate("CadastroVeiculo");
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}> 
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.search}>
        <ButtonMenu title="" onPress={() => navigation.dispatch(DrawerActions.openDrawer())}/>
          <Text style={styles.headerText}>Veículos</Text>
          <View style={styles.search}>
            <RectButton
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
              style={styles.buttonsHeader}
            >
              <Feather name="search" size={25} color="#F0EFF4" />
            </RectButton>
          </View>
        </View>
      </View>
      <View style={styles.content}>
        <ButtonAdicionar title= "Adicionar veículo" onPress={handleNavigateToCadastroVeiculo}/>
        <View style={styles.veiculos}>
          <RectButton style={styles.buttonVeiculo} onPress={handleNavigateToVisualizarVeiculo}>
            <View style={styles.buttonGroupText}>
              <Text style={styles.buttonVeiculoText}>Impreza GC8</Text>
              <Text style={styles.buttonVeiculoTextManutencaoGreen}><Feather name="check-circle" size={16} color="#5CB85C" /> Manutenção em dia</Text>
            </View>
            <Image source={require('../../../assets/images/impreza.jpg')} style={styles.imgVeiculo} />
          </RectButton>
        </View>
        <View style={styles.veiculos}>
          <RectButton style={styles.buttonVeiculo} onPress={handleNavigateToVisualizarVeiculo}>
            <View style={styles.buttonGroupText}>
              <Text style={styles.buttonVeiculoText}>Monza</Text>
              <Text style={styles.buttonVeiculoTextManutencaoRed}><Feather name="x-circle" size={16} color="#D9534F" /> Requer manutenção</Text>
            </View>
            <Image source={require('../../../assets/images/Monza.jpg')} style={styles.imgVeiculo} />
          </RectButton>
        </View>
      </View>
    </View>
    </ScrollView>
  );
}
export default Veiculos;