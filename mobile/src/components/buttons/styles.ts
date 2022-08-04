import { StyleSheet } from "react-native";
import {darkTheme} from '../../Styles/colors'
import fonts from '../../Styles/fonts'

const styles = StyleSheet.create({
  button: {
    backgroundColor: darkTheme.button,
    height: 60,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: darkTheme.grayLight,
    fontSize: 20,
    fontFamily: fonts.title
  },

  buttonAdicionar: {
    backgroundColor: darkTheme.button,
    height: 50,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  textAdicionar: {
    color: darkTheme.grayLight,
    fontSize: 18,
    padding: 10,
    textAlign: "center",
    fontFamily: fonts.text
  },

  buttonMenu: {
    height: 30,
    width: 30,
  },

  buttonAjuda: {
    height: 60,
    padding: 5,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  textAjuda: {
    color: darkTheme.grayLight,
    paddingLeft: 5,
    fontFamily: fonts.text
  },
});

export default styles;
