import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252525",
    padding: 20,
  },

  header: {
    paddingTop: 20,
    marginBottom: 20
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

  contentServico: {
    flexGrow: 1
  },

  ButtonText: {
    flexDirection: "column",
    padding: 10,
  },

  headerGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  buttonServiceTextGreen: {
    color: "#5CB85C",
    fontSize: 16,
    padding: 35,
  },

  listagemErroServico: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  servicos: {
    marginTop: 20,
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

  buttonServicoText: {
    color: '#252525',
    fontSize: 18,
    fontWeight: 'bold',
  },

  buttonServicoTextManutencaoGreen: {
    color: '#5CB85C',
    fontSize: 16
  },

  buttonServicoTextManutencaoRed: {
    color: "#D9534F",
    fontSize: 16,
  },
  textInfo3: {
    color: "#252525",
    fontSize: 14,
  },

});

export default styles;
