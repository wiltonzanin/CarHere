import { StyleSheet } from "react-native";
import colors from "../../../../Styles/colors";
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
    color: colors.grayLight,
    fontSize: 20,
    fontFamily: fonts.title
  },

  accordion: {
    backgroundColor: colors.background
  },

  accordionTitle: {
    color: colors.grayLight,
    fontSize: 15,
    fontFamily: fonts.title
  },

  textBody: {
    borderColor: colors.grayMedium,
    padding: 20,
    borderRadius: 5,
    marginBottom: 20,
    fontFamily: fonts.text
  },

  title: {
    color: colors.grayLight,
    fontSize: 15,
    fontFamily: fonts.title
  },

  text: {
    color: colors.grayLight,
    textAlign: 'justify',
    fontSize: 14,
    fontFamily: fonts.text
  },
});

export default styles;
