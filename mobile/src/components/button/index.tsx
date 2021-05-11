import { Feather } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
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
      <Text style={styles.textAdicionar}>{title}</Text>
    </TouchableOpacity>
  );
}