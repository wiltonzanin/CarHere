import * as React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import styles from "./styles";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

function CustomDrawerContent(props: DrawerContentComponentProps) {
  const { navigate } = useNavigation();

  function handleNavigateToConfiguracoes() {
    navigate("Configuracoes");
  }

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} labelStyle={styles.text} />
      <View style={styles.itens}>
        <Feather name="log-out" size={20} color="white" />
        <DrawerItem
          label="Fechar menu"
          style={{ width: "60%" }}
          labelStyle={styles.text}
          onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
        />
      </View>
      <View style={styles.itens}>
        <RectButton
          onPress={handleNavigateToConfiguracoes}
          style={styles.buttonDrawer}
        >
          <Feather name="settings" size={20} color="white" />
          <Text style={styles.drawerText}>configurações</Text>
        </RectButton>
      </View>
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;
