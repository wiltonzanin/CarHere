import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252525",
    padding: 20,
  },

  header: {
    //width: "20%",
    paddingTop: 20,
    justifyContent: "space-between",
  },

  search: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  veiculos: {
    height: 93,
    borderWidth: 1,
    borderColor: "#525252",
    width: 326,
  },

  imagemVeiculo: {
    height: 189,
    width: "100%",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#525252",
  },

  autonomia: {
    width: 148,
    height: 142,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "white",
    borderRadius:10
  },

  servicos:{
    width: 117,
    height: 142,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "white",
    borderRadius:10
  },

  button: {
    height: 30,
    width: 30,
  },

  buttonVeiculo: {
    width: "100%",
    height: "100%",
  },

  content: {
    width: "100%",
    height: "100%",
    alignContent: "space-between",
    paddingTop: 20,
  },

  text: {
    color: "white",
    fontSize: 20,
  },

  buttonContent: {
    height: 28,
    //padding: 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: "#5863F8",
  },

  buttonText: {
    color: "#fff",
    fontSize: 14,
    padding: 5,
    width: "100%",
    textAlign: "center",
  },
});

export default styles;
