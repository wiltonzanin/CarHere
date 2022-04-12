import { StyleSheet } from "react-native";
import colors from '../../Styles/colors'
import fonts from '../../Styles/fonts'

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.button,
    height: 60,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: colors.grayLight,
    fontSize: 20,
    fontFamily: fonts.title
  },

  buttonAdicionar: {
    backgroundColor: colors.button,
    height: 50,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  textAdicionar: {
    color: colors.grayLight,
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
    color: colors.grayLight,
    paddingLeft: 5,
    fontFamily: fonts.text
  },
});

export default styles;
