import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252525",
    padding: 20,
  },

  header: {
    paddingTop: 20,
  },

  search: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  buttonsHeader: {
    height: 30,
    width: 30,
  },

  text: {
    color: "white",
    fontSize: 20,
  },

  content: {
    width: "100%",
    height: "100%",
    alignContent: "space-between",
    paddingTop: 20,
  },

  buttonStyle: {
    width: "100%",
  },

  button: {
    backgroundColor: "#8F1622",
    height: 40,
    borderRadius: 8,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  buttonText: {
    color: "#F0EFF4",
    fontSize: 18,
  },

  veiculos: {
    marginTop: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#525252",
  },

  buttonVeiculo: {
    height: 100,
  },
});

export default styles;
