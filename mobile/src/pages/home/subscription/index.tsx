import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { Button } from "../../../components/buttons";
import BackScreen from "../../../components/backScreen";
// import car from '../../../assets/images/car.png'

export default function Subscription({ navigation }: any) {
  function handleNavigateToPaymentScreen() {
    navigation.navigate("PaymentScreen");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>

      <BackScreen />
      <Text style={styles.title}>
        Modo premium!✨
      </Text>
      </View>
      <View>
        <Image source={require('./car.png')} style={styles.image}/>
        <Text style={styles.text}>
          Possibilidade de cadastrar mais de 5 veículos. E o melhor, sem mais anúncios atrapalhando 😉
        </Text>

        <Text style={styles.text}>
          Por apenas R$5,50
        </Text>
      </View>
      <Button title="Inscrever-se" onPress={handleNavigateToPaymentScreen} />
    </View>
  );
}
