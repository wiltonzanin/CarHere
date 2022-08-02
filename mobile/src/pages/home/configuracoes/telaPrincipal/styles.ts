import { StyleSheet } from "react-native";
import {darkTheme} from '../../../../Styles/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkTheme.background,
    padding: 20
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },

  headerTitle: {
    color: darkTheme.grayLight,
    fontSize: 20,
  },

  sectionTitle: {
    color: darkTheme.grayLight,
    fontSize: 18,
    paddingTop: 20,
    paddingBottom: 20,
  },

  buttonsGroup: {
    backgroundColor: darkTheme.textField,
    borderRadius: 10,
    borderColor: darkTheme.grayMedium,
    borderWidth: 1,
    borderBottomWidth: 1,
  },

  buttonsGroupContent: {
    borderBottomWidth: 1,
    borderColor: darkTheme.grayMedium,
  },

  buttonText: {
    color: darkTheme.grayLight,
    justifyContent: "center",
    paddingLeft: 5,
  }
});

export default styles;
