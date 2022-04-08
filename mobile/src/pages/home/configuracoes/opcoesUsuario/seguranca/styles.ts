import { StyleSheet } from "react-native";
import colors from '../../../../../Styles/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
    justifyContent: "space-between",
  },

  header: {
    width: "100%",
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  },

  headerTitle: {
    color: colors.grayLight,
    fontSize: 20,
  },

  content: {
    flex:1,
    color: colors.grayLight,
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
    color: colors.grayLight,
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignSelf:'center'
  },

  top: {
    backgroundColor: colors.grayDark,
    borderRadius: 10,
    borderColor: colors.grayMedium,
    borderWidth: 1,
    borderBottomWidth: 1,
  },

  meio: {
    borderBottomWidth: 1,
    borderColor: colors.grayMedium,
  },

  buttonContent: {
    height: 60,
    padding: 5,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  buttonText: {
    color: colors.grayLight,
    justifyContent: "center",
    paddingLeft: 5,
  },

  buttonsSection: {
    width: "100%",
    height: "100%",
  },
});

export default styles;
