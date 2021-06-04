import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252525",
    padding: 20
  },

  header: {
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  headerTitle: {
    color: "#F0EFF4",
    fontSize: 20,
  },

  text: {
    color: "#F0EFF4",
    fontSize: 18,
    paddingTop: 20,
    paddingBottom: 20,
  },

  top: {
    backgroundColor: "#333333",
    borderRadius: 5,
    borderColor: "#525252",
    borderWidth: 1,
  },

  meio: {
    borderBottomWidth: 1,
    borderColor: "#525252",
  },
});

export default styles;
