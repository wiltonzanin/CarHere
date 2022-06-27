import { StyleSheet } from "react-native";
import {darkTheme} from "../../../../Styles/colors";
import fonts from "../../../../Styles/fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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

  title: {
    color: darkTheme.grayLight,
    fontSize: 18,
    marginTop: 20,
    marginBottom: 20,
    fontFamily: fonts.title
  },

  dropdown: {
    backgroundColor: darkTheme.textField,
    borderColor: darkTheme.grayMedium,
  },
  
  dropdownText: {
    fontFamily: fonts.text,
    fontSize: 16,
    color: darkTheme.grayLight,
  },
});

export default styles;
