import { StyleSheet } from "react-native";
import colors from '../../../../Styles/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },

  header: {
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  headerTitle: {
    color: colors.grayLight,
    fontSize: 20,
  },

  title: {
    color: colors.grayLight,
    fontSize: 18,
    marginTop: 20,
    marginBottom: 20
  },

  dropdown: {
    backgroundColor: colors.grayDark,
    borderColor: colors.grayMedium,
  },
});

export default styles;
