import React from "react";
import { Feather } from "@expo/vector-icons";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text, TouchableOpacityProps, View, Image } from "react-native";

import { darkTheme } from "../../Styles/colors";
import styles from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} {...rest}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

export function ButtonAdicionar({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.buttonAdicionar} {...rest}>
      <Text style={styles.textAdicionar}><Feather name="plus" size={18} color={darkTheme.grayLight} /> {title}</Text>
    </TouchableOpacity>
  );
}

export function ButtonDeletar({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} {...rest}>
      <Text style={styles.text}><Feather name="trash" size={18} color={darkTheme.grayLight} /> {title}</Text>
    </TouchableOpacity>
  );
}

export function ButtonMenu({ ...rest }) {

  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.buttonMenu} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} {...rest}>
      <Feather name="align-justify" size={25} color={darkTheme.grayLight} />
    </TouchableOpacity>
  );
}

export function ButtonPadrao({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.buttonAjuda} {...rest}>
      <Text style={styles.textAjuda}>{title}</Text><Feather name="chevron-right" size={25} color={darkTheme.grayLight} />
    </TouchableOpacity>
  );
}
