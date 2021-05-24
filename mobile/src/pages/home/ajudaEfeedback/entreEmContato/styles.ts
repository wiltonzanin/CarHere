import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252525",
    padding: 20,
    justifyContent: "space-between",
  },

  header: {
    paddingTop: 20,
    flexDirection: "row",
  },

  headerTitle: {
    color: "#F0EFF4",
    fontSize: 20,
  },

  content: {
    color: "#F0EFF4",
    justifyContent: "flex-start",
    height: "100%",
  },

  text: {
    color: "#F0EFF4",
    fontSize: 20,
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

  buttonText: {
    color: "#F0EFF4",
    paddingLeft: 5,
  },

  bottomSection: {
    height: "100%",
  },

  buttonAvaliar: {
    height: 60,
    backgroundColor: "#8F1622",
    alignItems: "center",
    paddingTop: 10,
    borderRadius: 5,
  },

  bottomtext: {
    color: "#F0EFF4",
    fontSize: 18,
    alignSelf: "center",
  },
});

export default styles;
