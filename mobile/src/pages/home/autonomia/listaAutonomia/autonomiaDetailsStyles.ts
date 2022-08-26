import { StyleSheet, Dimensions } from "react-native";
import {darkTheme} from "../../../../Styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkTheme.background,
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
    color: darkTheme.grayLight,
    fontSize: 20,
  },

  content: {
    paddingTop: 20,
  },

  secao: {
    marginTop: 24,
  },

  title: {
      color: darkTheme.grayLight,
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
    backgroundColor: darkTheme.textField,
    padding: 20,
    borderRadius: 10
  },

  text: {
    color: darkTheme.grayLight,
    fontSize: 20,
  },

  cardTitle: {
    color: darkTheme.grayLight,
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20
  },

  imagesContainer: {
    backgroundColor: darkTheme.textField,
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
    color: darkTheme.green,
    fontSize: 14,
  },

  textStatusWarning: {
    color: darkTheme.yellow,
    fontSize: 14,
  },

  textStatusError: {
    color: darkTheme.red,
    fontSize: 14,
  },

  cardServices: {
    backgroundColor: darkTheme.grayLight,
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
    backgroundColor: darkTheme.grayLight,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center'
  },

  noInfoText: {
    color: darkTheme.background,
    fontSize: 18,
    textAlign: 'center'
  },

  info: {
    backgroundColor: darkTheme.grayLight,
    padding: 10,
    borderRadius: 10,
  },

  infoGroup: {
    backgroundColor: darkTheme.grayLight,
    width: 145,
    height: 140,
    padding: 10,
    borderRadius: 10
  },

  titleInfo: {
    color: darkTheme.grayLight,
    fontSize: 18,
    paddingBottom: 5,
  },

  card: {
    backgroundColor: darkTheme.textField,
    padding: 20,
    borderRadius: 10,
    marginBottom: 20
  },

  textInfo2: {
    color: darkTheme.background,
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
    color: darkTheme.grayLight,
    fontSize: 15,

  },

});

export default styles;
