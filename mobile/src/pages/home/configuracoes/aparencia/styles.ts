import { StyleSheet } from "react-native";

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
    color: "#F0EFF4",
    fontSize: 20
  },

  title: {
    color: "#F0EFF4",
    fontSize: 18,
    marginTop: 20,
    marginBottom: 20
  },

  dropdown: {
    backgroundColor: "#333333",
    borderColor: "#525252",
  },
});

export default styles;
