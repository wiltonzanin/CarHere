import React, { useState } from "react";
import { Button, ScrollView, TextInput } from "react-native";
import styles from './styles'
import {CardField} from '@stripe/stripe-react-native'
import { API_URL } from "../../../../Config";

export default function Card() {
  const [name, setName] = useState("");
  const handlePayPress = async() => {
    const response = await fetch(`${API_URL}/create-payment-intent`,{
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        paymentMethodType: 'card',
        // CURRENCY
      })
    })
  }

  return (
    <ScrollView>
      <TextInput autoCapitalize="none" 
      placeholder="Name"
      keyboardType="name-phone-pad"
      onChange={(value) => setName(value.nativeEvent.text)}
      style ={styles.input}
      />
      <CardField 
      style={styles.cardField}
      />
      <Button title="Pay" onPress={handlePayPress}/>
    </ScrollView>
  );
}
