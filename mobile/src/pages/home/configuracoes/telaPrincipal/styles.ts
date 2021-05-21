import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252525",
    padding: 20,
    justifyContent: "space-between", 
  },

  header: {
   // width: "100%",
    paddingTop: 10,
    flexDirection: "row",
  },

  search: {
    justifyContent: "flex-start",
    paddingTop: 10,
  },

  headerTitle: {
    color: "#fff",
    fontSize: 20,
    paddingTop: 10,
  },

  content: {
    color: "#fff",
    justifyContent: "flex-start",
    flex:1,
    //paddingTop: 20,
    //width: "100%",
  },

  text: {
    color: "#fff",
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },

  top: {
    backgroundColor: "#333333",
    borderRadius: 10,
    borderColor: "#525252",
    borderWidth: 1,
    borderBottomWidth: 1,
  },

  meio: {
    borderBottomWidth: 1,
    borderColor: "#525252",
  },

  buttonText: {
    color: "#fff",
    justifyContent: "center",
    paddingLeft: 5,
  },

});

export default styles;
