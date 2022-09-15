import React, { useState } from "react";
import { Text, View, ScrollView } from "react-native";
import { Switch } from 'react-native-elements';
import * as Notifications from 'expo-notifications';

import styles from "./styles";
import { darkTheme } from "../../../../Styles/colors";
import BackScreen from "../../../../components/backScreen";
import { TouchableOpacity } from "react-native-gesture-handler";

function Notificacao() {

  const [checked, setChecked] = useState(true);

  const toggleSwitch = () => {
    setChecked(!checked);
  };

  async function handleNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Você recebeu uma notificação! 📬",
        body: 'Esse é o conteudo da notificação.',
        data: { data: 'goes here' },
      },
      trigger: { seconds: 5 },
    });
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <BackScreen />
          <Text style={styles.headerTitle}>Notificações</Text>
          <View />
        </View>
        <View style={styles.optionContainer}>
          <Text style={styles.optionText}>Ativar notificações</Text>
          <Switch
            color={darkTheme.grayLight}
            value={checked}
            onValueChange={(value) => setChecked(value)}
          />
        </View>
        <TouchableOpacity onPress={() => { handleNotification() }}>
          <Text>Enviar notificação</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default Notificacao;
