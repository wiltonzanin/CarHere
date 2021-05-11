import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252525",
    padding: 20,
  },

  header: {
    width: "100%",
    paddingTop: 20,
    justifyContent: "space-between",
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
    color: "white",
    fontSize: 20,
  },

  button: {
    height: 30,
    width: 30,
  },

  content: {
    alignContent: "space-between",
    paddingTop:15
  },

  drawer: {
    backgroundColor: "#252525",
  },

  drawerText: {
    color: "#F0EFF4",
  },
});

export default styles;
