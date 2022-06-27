import { StyleSheet } from "react-native";
import {darkTheme} from '../../../../../Styles/colors'
import fonts from '../../../../../Styles/fonts'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkTheme.background,
    padding: 20,
    justifyContent: "space-between",
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

  content: {
    flex: 1,
    marginBottom: 20
  },

  text: {
    color: darkTheme.grayLight,
    fontSize: 18,
    paddingBottom: 20,
    paddingTop: 20,
    fontFamily: fonts.text
  },

  textInputOutro: {
    padding: 10,
    backgroundColor: darkTheme.textField,
    borderColor: darkTheme.grayMedium,
    borderStyle: 'solid',
    borderRadius: 5,
    borderWidth: 1,
    fontSize: 16,
    color: darkTheme.grayLight,
    fontFamily: fonts.text
  },

  textInput: {
    padding: 10,
    backgroundColor: darkTheme.textField,
    borderColor: darkTheme.grayMedium,
    borderStyle: 'solid',
    borderRadius: 5,
    borderWidth: 1,
    fontSize: 16,
    color: darkTheme.grayLight,
    flex: 1,
    fontFamily: fonts.text
  },
});

export default styles;
