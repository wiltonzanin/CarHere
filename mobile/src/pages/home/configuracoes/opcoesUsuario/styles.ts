import { StyleSheet } from "react-native";
import colors from '../../../../Styles/colors'
import fonts from '../../../../Styles/fonts'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
    justifyContent: "space-between",
  },

  header: {
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  },

  headerTitle: {
    color: colors.grayLight,
    fontSize: 20,
    fontFamily: fonts.title
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
    paddingTop: 20,
    paddingBottom: 20,
    alignSelf:'center',
    fontFamily: fonts.text
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

});

export default styles;
