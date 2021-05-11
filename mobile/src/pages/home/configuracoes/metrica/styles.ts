import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
  },

  header: {
    width: "100%",
    paddingTop: 10,
    flexDirection: "row",
  },

  title: {
    color: "#F0EFF4",
    fontSize: 20,
  },

  content: {
    width: "100%",
    alignContent: "space-between",
  },

  inputGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: "100%",
    paddingTop:10
  },

  dropdown: {
    backgroundColor: "#333333",
    borderColor: "#525252",
    width: 300,
  },
});

export default styles;
