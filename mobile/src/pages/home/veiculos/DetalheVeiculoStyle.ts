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
  },

  imagemVeiculo: {
    backgroundColor: "#FFFFFF",
    height: 189,
    width: "100%",
    justifyContent: "center",
  },

  infosServicos: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },

  autonomia: {
    width: 148,
    height: 142,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "white",
    borderRadius: 10,
  },

  textInfo1: {
    color: "black",
    fontSize: 18,
  },

  textInfo2: {
    color: "black",
    fontSize: 14,
  },

  espacamentoAutonomia: {
    paddingHorizontal: "7%",
  },

  servicos: {
    width: 117,
    height: 142,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 5,
  },

  espacamentoServicos: {
    paddingEnd: 5,
  },

  infos: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingTop: 20,
  },

  textInfo: {
    color: "white",
    fontSize: 18,
  },

  textInfoCampo: {
    color: "white",
    fontSize: 18,
    paddingBottom: 20,
  },

  espacamentoInfos: {
    paddingHorizontal: "30%",
  },
});

export default styles;
