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

  veiculos: {
    marginTop: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#525252",
  },

  imagemVeiculo: {
    backgroundColor: '#FFFFFF',
    height: 189,
    width: "100%",
    justifyContent: "center",
  },

  autonomia: {
    width: 148,
    height: 142,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "white",
    borderRadius: 10
  },

  servicos: {
    width: 117,
    height: 142,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "white",
    borderRadius: 10
  },

  buttonsHeader: {
    height: 30,
    width: 30,
  },

  buttonVeiculo: {
    height: 100,
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

  buttonStyle: {
    width: '100%'
  },

  button: {
    backgroundColor: '#5863f8',
    height: 40,
    borderRadius: 8,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },

  buttonText: {
    color: '#F0EFF4',
    fontSize: 18,
  },
});

export default styles;
