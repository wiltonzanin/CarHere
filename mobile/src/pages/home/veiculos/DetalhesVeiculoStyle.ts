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

  infos: {
    flexDirection: "row",
    justifyContent: 'space-between'
  }
});

export default styles;
