import * as React from "react";
import { View, Text } from "react-native";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import styles from "./styles";

function Mapa({ navigation }: any) {

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -24.9635987,
          longitude: -53.5423926,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.map}
      />
    </View>
  );
}
export default Mapa;
