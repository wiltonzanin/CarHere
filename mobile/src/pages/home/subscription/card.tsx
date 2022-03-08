import React, { useState } from "react";
import { Alert, Button, ScrollView, TextInput } from "react-native";
import styles from './styles'
import {CardField, useConfirmPayment} from '@stripe/stripe-react-native'
import { API_URL } from "../../../../Config";

export default function Card() {
  const [name, setName] = useState("");
  const {confirmPayment, loading} = useConfirmPayment()
  const handlePayPress = async() => {
    const response = await fetch(`${API_URL}/create-payment-intent`,{
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        paymentMethodType: 'card',
        currency: 'BRL'
      })
    })
    const {clientsecret} = await response.json()
    
    const {error, paymentIntent } = await confirmPayment(clientsecret,{
      type: 'Card',
      billingDetails: {name}
    })
    
    if(error) {
      Alert.alert(`Error code: ${error.code}`, error.message)
    }else if (paymentIntent){
      Alert.alert('Success', `Payment successful: ${paymentIntent.id}`)
    }
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
      postalCodeEnabled={false}
      style={styles.cardField}
      />
      <Button title="Pay" onPress={handlePayPress} disabled={loading}/>
    </ScrollView>
  );
}
