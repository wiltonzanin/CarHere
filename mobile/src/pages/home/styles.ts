import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252525",
    padding: 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
},

  title: {
    color: '#F0EFF4',
    fontSize: 20,
  },

  buttonsHeader: {
    height: 30,
    width: 30,
  },

  text: {
    color: "#F0EFF4",
    fontSize: 20,
  },

  content: {
    paddingTop: 20
  },

  imgVeiculo: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width: Dimensions.get('window').width - 40,
    height: 200,
    resizeMode: 'cover',
  },

  cardImg: {
    backgroundColor: '#F0EFF4',
    padding: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },

  card: {
    marginTop: 20,
    backgroundColor: '#333333',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20
  },

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  cardTitle: {
    color: "#F0EFF4",
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
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

  cardStyle: {
    backgroundColor: '#333333',
    padding: 20,
    borderRadius: 10
  },

  drawer: {
    backgroundColor: "#252525",
  },

  drawerText: {
    color: "#F0EFF4",
  },
});

export default styles;
