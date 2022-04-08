import { StyleSheet } from "react-native";
import colors from '../../../../Styles/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },

  headerTitle: {
    color: colors.grayLight,
    fontSize: 20,
  },

  sectionTitle: {
    color: colors.grayLight,
    fontSize: 18,
    paddingTop: 20,
    paddingBottom: 20,
  },

  buttonsGroup: {
    backgroundColor: colors.grayDark,
    borderRadius: 10,
    borderColor: colors.grayMedium,
    borderWidth: 1,
    borderBottomWidth: 1,
  },

  buttonsGroupContent: {
    borderBottomWidth: 1,
    borderColor: colors.grayMedium,
  },

  buttonText: {
    color: colors.grayLight,
    justifyContent: "center",
    paddingLeft: 5,
  }
});

export default styles;
