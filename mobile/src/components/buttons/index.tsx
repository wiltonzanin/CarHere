import { Feather } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, Text, TouchableOpacityProps, View, Image } from "react-native";
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
      <Text style={styles.textAdicionar}><Feather name="plus" size={18} color={"#F0EFF4"}/> {title}</Text>
    </TouchableOpacity>
  );
}

export function ButtonMenu({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.buttonMenu} {...rest}>
      <Text><Feather name="align-justify" size={25} color={"#F0EFF4"}/>{title}</Text>
    </TouchableOpacity>
  );
}

export function ButtonPadrao({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.buttonAjuda} {...rest}>
      <Text style={styles.textAjuda}>{title}</Text><Feather name="chevron-right" size={25} color={"#F0EFF4"}/>
    </TouchableOpacity>
  );
}
 