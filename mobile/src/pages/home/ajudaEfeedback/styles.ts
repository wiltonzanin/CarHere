import { StyleSheet } from "react-native";
import {darkTheme} from '../../../Styles/colors'
import fonts from '../../../Styles/fonts'

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

  search: {
    justifyContent: "flex-start",
  },

  headerTitle: {
    color: darkTheme.grayLight,
    fontSize: 20,
    fontFamily: fonts.title
  },

  content: {
    color: darkTheme.grayLight,
    justifyContent: "flex-start",
    height: "85%",
  },

  text: {
    color: darkTheme.grayLight,
    fontSize: 20,
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

  meio: {
    borderBottomWidth: 1,
    borderColor: darkTheme.grayMedium,
  },

  buttonText: {
    color: darkTheme.grayLight,
    paddingLeft: 5,
    fontFamily: fonts.text
  },

  bottomSection: {
    height: "100%",
  },

  buttonAvaliar: {
    height: 60,
    backgroundColor: darkTheme.button,
    alignItems: "center",
    paddingTop: 10,
    borderRadius: 5
  },

  bottomtext: {
    color: darkTheme.grayLight,
    fontSize: 18,
    alignSelf: 'center',
    fontFamily: fonts.text
  }
});

export default styles;
