import { StyleSheet } from "react-native";
import colors from "../../../../Styles/colors";
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
    color: colors.grayLight,
    fontSize: 20,
    fontFamily: fonts.title
  },

  title: {
    color: colors.grayLight,
    fontSize: 18,
    marginTop: 20,
    marginBottom: 20,
    fontFamily: fonts.title
  },

  dropdown: {
    backgroundColor: colors.grayDark,
    borderColor: colors.grayMedium,
  },
  
  dropdownText: {
    fontFamily: fonts.text,
    fontSize: 16,
    color: colors.grayLight,
  },
});

export default styles;
