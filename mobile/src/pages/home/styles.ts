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
  },

  buttonAdicionar: {
    height: 120,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 20,
  },

  buttonText: {
    color: "#fff",
    fontSize: 28,
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    width: "100%",
    textAlign: "center",
  },

  drawer: {
    backgroundColor: "#252525",
  },

  drawerText: {
    color: "#F0EFF4",
  },
});

export default styles;
