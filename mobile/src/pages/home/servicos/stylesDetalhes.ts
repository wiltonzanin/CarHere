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
    marginBottom: 10,
  },
  
  search: {
    flexDirection: "row",
    justifyContent: "space-between",
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

  secao: {
    marginTop: 24,
  },

  title: {
      color: "#F0EFF4",
      fontSize: 20,
  },

  subtitle: {
    fontSize: 16,
    color:'white'
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
    fontSize: 22,
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

  cardServices: {
    backgroundColor: '#F0EFF4',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20
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

  card: {
    backgroundColor: '#333333',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20
  },

  textInfo2: {
    color: "#252525",
    fontSize: 14,
  },

  deleteButton: {
    marginTop: 20
  },
  checkbox: {
    flexDirection: 'row',
    paddingBottom: 20
  },
  buttoncheckbox: {
    alignSelf: 'center'
  },

  textcheckbox: {
    color: '#F0EFF4',
    fontSize: 15,

  },

});

export default styles;
