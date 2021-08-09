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
    justifyContent: "space-between"
  },

  headerTitle: {
    color: "#fff",
    fontSize: 20,
  },

  content: {
    flex:1,
    color: "#fff",
    justifyContent: "flex-start",
    width: "100%",
    height: "85%",
    paddingTop:20
  },

  foto:{
borderRadius:100,
height:150,
width:150,
backgroundColor:'black',
alignSelf:'center'
  },

  text: {
    color: "#fff",
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignSelf:'center'
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

  buttonContent: {
    height: 60,
    padding: 5,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  buttonText: {
    color: "#fff",
    justifyContent: "center",
    paddingLeft: 5,
  },

  buttonsSection: {
    width: "100%",
    height: "100%",
  },
});

export default styles;
