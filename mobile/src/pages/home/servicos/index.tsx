import * as React from "react";
import { View, Text } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { ButtonAdicionar } from "../../../components/buttons";
import { ButtonMenu } from "../../../components/buttons";
import { Servico } from "../../../components/infos";

function Servicos({ navigation }: any) {
  const { navigate } = useNavigation();

  function handleNavigateToVisualizarServicos() {
    navigate("VisualizarServicos");
  }
  
  function handleNavigateToCadastrarServicos() {
    navigate("CadastroServicos");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.search}>
          <ButtonMenu
            title=""
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          />
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
        <ButtonAdicionar title="Adicionar serviço" onPress={handleNavigateToCadastrarServicos}/>
        <Servico nome="*nome do serviço*" data="*data*" />
        <Servico nome="*nome do serviço*" data="*data*" />
      </View>
    </View>
  );
}
export default Servicos;
