import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#8F1622",
    height: 60,
    borderRadius: 8,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "#F0EFF4",
    fontSize: 20,
    fontWeight: "bold",
  },

  buttonAdicionar: {
    backgroundColor: "#8F1622",
    height: 28,
    borderRadius: 8,
    padding: 24,
    alignItems: "center",
    justifyContent: "center"
  },

  textAdicionar: {
    color: "#F0EFF4",
    fontSize: 18,
    padding: 10,
    textAlign: "center",
  },

  buttonMenu: {
    height: 30,
    width: 30,
  },

  buttonAjuda: {
    height: 60,
    padding: 5,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: 'row',
  },

  textAjuda: {
    color: "#F0EFF4",
    paddingLeft: 5
  },

  buttonFoto:{
    height:75,
    width:65,
  }
});

export default styles;
