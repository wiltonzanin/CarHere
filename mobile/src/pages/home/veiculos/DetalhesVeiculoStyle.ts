import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252525",
    padding: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
    marginBottom: 10
  },

  text: {
    color: "#F0EFF4",
    fontSize: 20,
  },

  sectionTitle: {
    color: "#F0EFF4",
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },

  imagesContainer: {
    backgroundColor: '#333333',
    marginLeft: -20,
    marginRight: -20,
    marginBottom: 20,
    height: 180,
  },

  imgVeiculo: {
    width: Dimensions.get('window').width,
    height: 180,
    resizeMode: 'cover',
  },

  infosServicos: {
    flexDirection: "row",
    justifyContent: 'space-between',
    marginBottom: 20
  },

  autonomia: {
    backgroundColor: '#F0EFF4',
    width: 160,
    height: 140,
    padding: 10,
    borderRadius: 10,
  },

  textInfo1: {
    color: "#252525",
    fontSize: 18,
    paddingBottom: 5
  },

  textInfo2: {
    color: "#252525",
    fontSize: 14,
  },

  textStatusOk: {
    color: "#5CB85C",
    fontSize: 14,
  },

  textStatusWarning: {
    color: "#F0AD4E",
    fontSize: 14,
  },

  textStatusError: {
    color: "#D9534F",
    fontSize: 14,
  },

  servicos: {
    backgroundColor: "#F0EFF4",
    width: 126,
    height: 140,
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
  },

  infos: {
    flexDirection: "row",
    justifyContent: 'space-between'
  },

  textInfo: {
    color: "#F0EFF4",
    fontSize: 18,
  },

  textInfoCampo: {
    color: "#F0EFF4",
    fontSize: 16,
    paddingBottom: 20,
  },
});

export default styles;
