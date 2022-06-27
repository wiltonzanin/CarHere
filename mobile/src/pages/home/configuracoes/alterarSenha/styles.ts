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
    marginBottom: 20
  },

  headerTitle: {
    color: darkTheme.grayLight,
    fontSize: 20,
    fontFamily: fonts.title
  },

  instructions: {
    color: darkTheme.grayLight,
    fontSize: 16,
    textAlign: "auto",
    fontFamily: fonts.text
  },

  formContent: {
    paddingTop: 20,
    
  },
});

export default styles;
