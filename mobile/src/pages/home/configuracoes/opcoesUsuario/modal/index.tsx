import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

const { height } = Dimensions.get("window");

const Modal = ({ show, close }: any) => {
  const [state, setState] = useState({
    opacity: new Animated.Value(0),
    container: new Animated.Value(height),
    modal: new Animated.Value(height),
  });

  const openModal = () => {
    Animated.sequence([
      Animated.timing(state.container, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(state.opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.spring(state.modal, {
        toValue: 0,
        bounciness: 5,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const closeModal = () => {
    Animated.sequence([
      Animated.timing(state.modal, {
        toValue: height,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(state.opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(state.container, {
        toValue: height,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  useEffect(() => {
    console.log(show);
    if (show) {
      openModal();
    } else {
      closeModal();
    }
  }, [show]);

  const { navigate } = useNavigation();

  function handleNavigateToSelecionarFoto() {
    navigate("SelecionaFoto");
  }

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: state.opacity,
          transform: [{ translateY: state.container }],
        },
      ]}
    >
      <Animated.View
        style={[
          styles.modal,
          {
            transform: [{ translateY: state.modal }],
          },
        ]}
      >
        <TouchableOpacity
          style={styles.indicator}
          onPress={close}
        ></TouchableOpacity>
        <ScrollView>
          <Text style={styles.textTitle}> Escolha um App </Text>
        <View style={{ flexDirection: "row", justifyContent:'space-between', paddingTop:10 }}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={styles.buttonFoto}
            >
              <Feather name='camera' size={40} color={'#F0EFF4'} style={styles.imgVeiculo}/>
              <Text style={styles.textModal}>Camera</Text>
            </TouchableOpacity>
            
          </View>

          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={styles.buttonFoto}
              onPress={handleNavigateToSelecionarFoto}
            >
              <Image
                source={require("../../../../../assets/images/galeria.png")}
                style={styles.imgVeiculo}
              />
              <Text style={styles.textModal}>Galeria</Text>
            </TouchableOpacity>
          </View>
          </View>
            <TouchableOpacity style={styles.btn} onPress={close}>
              <Text style={{color:'white'}}>Cancelar</Text>
            </TouchableOpacity>
        </ScrollView>
      </Animated.View>
    </Animated.View>
  );
};

export default Modal;