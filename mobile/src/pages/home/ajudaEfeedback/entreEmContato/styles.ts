import { StyleSheet } from "react-native";
import {darkTheme} from '../../../../Styles/colors'
import fonts from '../../../../Styles/fonts'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkTheme.background,
    padding: 20
  },

  header: {
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  headerTitle: {
    color: darkTheme.grayLight,
    fontSize: 20,
    fontFamily: fonts.title
  },

  text: {
    color: darkTheme.grayLight,
    fontSize: 18,
    paddingTop: 20,
    paddingBottom: 20,
    fontFamily: fonts.text
  },

  top: {
    backgroundColor: darkTheme.textField,
    borderRadius: 5,
    borderColor: darkTheme.grayMedium,
    borderWidth: 1,
  },
});

export default styles;
