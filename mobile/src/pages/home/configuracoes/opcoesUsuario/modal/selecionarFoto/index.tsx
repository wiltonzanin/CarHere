import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function SelecionarFotoGaleria() {

  const [image, setImage] = useState<string>();
  
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Opa, precisamos da permissão de acesso a galeria para que possamos salvar as imagens :)");
          return;
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (result.cancelled) {
      return;
    }

    const { uri } = result;

    setImage(uri)
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      
      <Button title="Botão chato" onPress={pickImage} />
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
    </View>
  );
}
