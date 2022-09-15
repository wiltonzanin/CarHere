import { StyleSheet } from "react-native";
import {darkTheme} from "../../../../Styles/colors";
import fonts from "../../../../Styles/fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkTheme.background,
    padding: 20
  },

  header: {
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  headerTitle: {
    color: darkTheme.grayLight,
    fontSize: 20,
    fontFamily: fonts.title
  },

  optionContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  optionText:{
    color: darkTheme.grayLight,
    fontSize: 18,
  }
});

export default styles;
