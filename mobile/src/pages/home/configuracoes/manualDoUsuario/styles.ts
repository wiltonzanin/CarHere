import { StyleSheet } from "react-native";
import {darkTheme} from "../../../../Styles/colors";
import fonts from "../../../../Styles/fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },

  header: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  headerTitle: {
    color: darkTheme.grayLight,
    fontSize: 20,
    fontFamily: fonts.title
  },

  accordion: {
    backgroundColor: darkTheme.background
  },

  accordionTitle: {
    color: darkTheme.grayLight,
    fontSize: 15,
    fontFamily: fonts.title
  },

  textBody: {
    borderColor: darkTheme.grayMedium,
    padding: 20,
    borderRadius: 5,
    marginBottom: 20,
    fontFamily: fonts.text
  },

  title: {
    color: darkTheme.grayLight,
    fontSize: 15,
    fontFamily: fonts.title
  },

  text: {
    color: darkTheme.grayLight,
    textAlign: 'justify',
    fontSize: 14,
    fontFamily: fonts.text
  },
});

export default styles;
