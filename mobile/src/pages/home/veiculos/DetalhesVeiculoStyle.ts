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

  card: {
    backgroundColor: '#333333',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20
  },

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  cardStyle: {
    backgroundColor: '#333333',
    padding: 20,
    borderRadius: 10
  },

  text: {
    color: "#F0EFF4",
    fontSize: 20,
  },

  cardTitle: {
    color: "#F0EFF4",
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },

  imagesContainer: {
    backgroundColor: '#333333',
    marginLeft: -20,
    marginRight: -20,
    marginBottom: -30,
    height: 300,
  },

  imgVeiculo: {
    width: Dimensions.get('window').width,
    height: 300,
    resizeMode: 'cover',
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
    marginTop: 20,
  },

  cardServices: {
    backgroundColor: '#F0EFF4',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20
  },

  buttonServico: {
    backgroundColor: "#F0EFF4",
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 5,
  },

  buttonGroupTextServico: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },

  servicesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20
  },

  servicesTitle: {
    fontWeight: "bold",
    fontSize: 18
  },

  buttonServicoText: {
    color: '#252525',
    fontSize: 18,
    fontWeight: 'bold',
  },

  servicesText: {
    fontSize: 18
  },

  noInfo: {
    backgroundColor: "#F0EFF4",
    padding: 10,
    borderRadius: 10,
    alignItems: 'center'
  },

  noInfoText: {
    color: "#252525",
    fontSize: 18,
    textAlign: 'center'
  },

  info: {
    backgroundColor: "#F0EFF4",
    padding: 10,
    borderRadius: 10,
  },

  infoGroup: {
    backgroundColor: "#F0EFF4",
    width: 145,
    height: 140,
    padding: 10,
    borderRadius: 10
  },

  titleInfo: {
    color: "#252525",
    fontSize: 18,
    paddingBottom: 5,
  },

  textInfo2: {
    color: "#252525",
    fontSize: 14,
  },

  deleteButton: {
    marginTop: 20
  }
});

export default styles;
