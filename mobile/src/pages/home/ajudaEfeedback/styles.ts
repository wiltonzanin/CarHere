import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252525",
    padding: 20,
    justifyContent: "space-between",
  },

  header: {
    width: "100%",
    paddingTop: 10,
    flexDirection: "row",
  },

  search: {
    justifyContent: "flex-start",
    width: "30%",
  },

  button: {
    paddingTop:10,
    height: 30,
    width: 30,
  },

  buttonContent: {
    //backgroundColor: "#333333",
    height: 60,
    padding: 5,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection:'row',
  },

  buttonAvaliar:{
    height: 58,
    width:329,
    padding:5,
    backgroundColor:'#5863f8',
    borderRadius:5
  },

  feather:{
    alignContent:'center', 
    alignSelf:'center', 
  },

  top:{
    backgroundColor: "#333333",
    borderRadius:10,
    borderColor:'#525252',
    borderWidth:1,
    borderBottomWidth: 1,
  },

  meio:{
    borderBottomWidth: 1,
    borderColor:'#525252',

  },

  bottomSection: {
    width: "100%",
    height: "100%",
  },

  inputGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
  },

  drawer: {
    backgroundColor: "#252525",
  },

  text: {
    color: "#fff",
    fontSize: 20,
    paddingTop:10
  },

  bottomtext:{
    color: "#fff",
    fontSize: 20,
    alignSelf:'center'
  },

  content: {
    color: "#fff",
    justifyContent: "flex-start",
    paddingTop: 20,
    width: "100%",
    height: "85%",
  },
});

export default styles;