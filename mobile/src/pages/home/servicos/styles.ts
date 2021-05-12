import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252525",
    padding: 20,
  },

  header: {
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight:"38%"
  },

  buttonsHeader: {
    height: 30,
    width: 30,
  },

  headerText: {
    color: "#F0EFF4",
    fontSize: 20,
  },

  content: {
    paddingTop: 20,
  },

  servicos: {
    marginTop: 15,
  },

  buttonServico: {
    backgroundColor: "#F0EFF4",
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 5,
  },

  ButtonText: {
    flexDirection: "column",
    padding: 10,
  },

  buttonGroupText: {
    justifyContent: "space-between",
  },

  buttonServiceTextGreen: {
    color: "#5CB85C",
    fontSize: 16,
    padding: 35,
  },

  buttonVeiculoTextManutencaoRed: {
    color: "#D9534F",
    fontSize: 16,
  },

});

export default styles;
