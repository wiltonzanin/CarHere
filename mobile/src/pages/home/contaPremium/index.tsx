import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { StripeProvider } from '@stripe/stripe-react-native';
import styles from "./styles";
import { Feather } from "@expo/vector-icons";

import BackScreen from "../../../components/backScreen";
import { Button } from "../../../components/buttons";

function PremiumAccount({ navigation }: any) {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <BackScreen />
                    <Text style={styles.title}>Conta premium</Text>
                    <View />
                </View>
                <View style={styles.content}>
                    <Feather
                        name="check-circle"
                        size={25}
                        color={'#F0EFF4'}
                    />
                    <Text style={styles.containerText}>Torne-se um premium agora e fique livre de todos os anúncios :)</Text>
                </View>
                <View style={styles.content}>
                    <Feather
                        name="help-circle"
                        size={25}
                        color={'#F0EFF4'}
                    />
                    <View style={styles.duvidas}>
                        <Text style={styles.containerText}>Como funciona?</Text>
                        <Text style={styles.containerText}>Por apenas R$ 10
                            00 (dez reais) você compra a versão premium do aplicativo de forma definitiva, ou seja, é feito apenas um pagamento!
                            Desta forma, você nos ajuda a continuar melhorando o aplicativo :)</Text>
                    </View>
                </View>
                <Button title="Premium por R$ 10,00"></Button>
            </View>
        </ScrollView>
    );
}

export default PremiumAccount;
