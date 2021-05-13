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
    paddingTop: 20,
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

  headerTitle: {
    color: "#fff",
    fontSize: 20,
  },

  content: {
    color: "#fff",
    justifyContent: "flex-start",
    paddingTop: 20,
    width: "100%",
    height: "85%",
  },
  
  text: {
    color: "#fff",
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10
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

  buttonContent: {
    height: 60,
    padding: 5,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection:'row',
  },
  
  buttonText: {
    color: "#fff",
    paddingLeft: 5
  },

  bottomSection: {
    width: "100%",
    height: "100%",
  },

  buttonAvaliar:{
    height: 60,
    backgroundColor:'#8F1622',
    alignItems: "center",
    paddingTop: 10,   
    borderRadius:5
  },

  bottomtext:{
    color: "#fff",
    fontSize: 18,
    alignSelf:'center',
  }
 
});

export default styles;
