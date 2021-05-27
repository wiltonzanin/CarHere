import React, { useState } from "react";
import { View, Text } from "react-native";
import { CheckBox } from "react-native-elements";
import styles from "./styles";

interface CheckboxProps {
  title: string;
}

export function Checkbox({ title, ...rest }: CheckboxProps) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <View style={styles.checkbox}>
      <CheckBox
        containerStyle={{
          backgroundColor: "#252525",
          borderColor: "#252525",
          padding: 0,
          margin: 0,
          marginLeft: 0,
        }}
        checkedIcon="check-square-o"
        checkedColor="#8F1622"
        size={25}
        checked={isSelected}
        onPress={() => setIsSelected(!isSelected)}
      />

      <Text style={styles.text}>{title}</Text>
    </View>
  );
}
