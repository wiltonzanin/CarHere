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

  buttonsHeader: {
    height: 30,
    width: 30,
  },

  headerText: {
    color: '#F0EFF4',
    fontSize: 20,
  },

  search: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  content: {    
    paddingTop: 20,
  },

  button: {
    backgroundColor: '#5863f8',
    height: 40,
    borderRadius: 5,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },

  buttonText: {
    color: '#F0EFF4',
    fontSize: 18,
  },

  veiculos: {
    marginTop: 20,
  },

  buttonVeiculo: {
    backgroundColor: '#F0EFF4',
    height: 100,
    flexDirection: 'row',
    justifyContent: "space-between",
    borderRadius: 5,
  },

  buttonGroupText: {
    padding: 10,
    justifyContent: 'space-between'
  },

  buttonVeiculoText: {
    color: '#252525',
    fontSize: 18,
    fontWeight: 'bold',
  },

  buttonVeiculoTextManutencaoGreen: {
    color: '#5CB85C',
    fontSize: 16
  },

  buttonVeiculoTextManutencaoRed: {
    color: '#D9534F',
    fontSize: 16
  },

  imgVeiculo:{
    width: 120,
    height: 100,
    backgroundColor: '#5863f8',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  }
});

export default styles;