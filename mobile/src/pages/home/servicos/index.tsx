import * as React from "react";
import { View, Text } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { ButtonAdicionar } from '../../../components/buttons';
import {ButtonMenu} from '../../../components/buttons';


function Servicos({ navigation }: any) {
  const { navigate } = useNavigation();

  function handleNavigateToVisualizarServicos() {
    navigate("VisualizarServicos");
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.search}>
        <ButtonMenu title="" onPress={() => navigation.dispatch(DrawerActions.openDrawer())}/>
          <Text style={styles.headerText}>Serviços</Text>
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
        <ButtonAdicionar title="Adicionar serviço" />
        <View style={styles.servicos}>
          <RectButton style={styles.buttonServico} onPress={handleNavigateToVisualizarServicos}>
            <View style={styles.ButtonText}>
              <Text style={styles.buttonGroupText}> *nome do serviço* </Text>
              <Text > *data* </Text>
            </View>
            <Text style={styles.buttonServiceTextGreen}><Feather name="check-circle" size={16} color="#5CB85C" /> Tudo certo</Text>
          </RectButton>
        </View>
        <View style={styles.servicos}>
          <RectButton style={styles.buttonServico} onPress={handleNavigateToVisualizarServicos}>
            <View style={styles.ButtonText}>
              <Text style={styles.buttonGroupText}> *nome do serviço* </Text>
              <Text > *data* </Text>
            </View>
            <Text style={styles.buttonServiceTextGreen}><Feather name="check-circle" size={16} color="#5CB85C" /> Tudo certo</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}
export default Servicos;