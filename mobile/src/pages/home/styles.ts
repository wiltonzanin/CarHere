import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252525",
    padding: 20,
  },

  header: {
    paddingTop: 20,
  },

  search: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  buttonsHeader: {
    height: 30,
    width: 30,
  },

  text: {
    color: "#F0EFF4",
    fontSize: 20,
  },

  content: {
    paddingTop: 20
  },

  drawer: {
    backgroundColor: "#252525",
  },

  drawerText: {
    color: "#F0EFF4",
  },
});

export default styles;
