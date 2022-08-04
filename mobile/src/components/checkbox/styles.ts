import { StyleSheet } from "react-native";
import {darkTheme} from '../../Styles/colors'
import fonts from '../../Styles/fonts'

const styles = StyleSheet.create({
  text: {
    color: darkTheme.grayLight,
    fontSize: 18,
    paddingBottom: 10,
    paddingTop: 10,
    fontFamily: fonts.text
  },

  checkbox: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default styles;
