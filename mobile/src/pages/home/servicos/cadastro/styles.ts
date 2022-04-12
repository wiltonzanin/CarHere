import { StyleSheet } from 'react-native';
import colors from '../../../../Styles/colors';
import fonts from '../../../../Styles/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
    backgroundColor: colors.background
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
  },

  title: {
    color: colors.grayLight,
    fontSize: 20,
    fontFamily: fonts.title
  },

  text: {
    color: colors.grayLight,
    fontSize: 18,
    marginBottom: 10,
    fontFamily: fonts.text
  },

  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  inputGroupColumn: {
    flex: 1,
    marginLeft: 15
  },

  inputGroupSecondColumn: {
    flex: 1
  },

  dropdown: {
    backgroundColor: colors.grayDark,
    borderColor: colors.grayMedium,
    height: 40,
    marginBottom: 20,
  },

  dropdownList: {
    backgroundColor: colors.grayDark,
    borderColor: colors.grayMedium,
  },

  dropdownText: {
    fontSize: 16,
    color: colors.grayLight,
    fontFamily: fonts.text,
  },

  textInput: {
    padding: 10,
    //height: 40,
    minHeight: 85, 
    backgroundColor: colors.grayDark,
    borderColor: colors.grayMedium,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 16,
    color: colors.grayLight,
    flex: 1,
    marginBottom: 20,
    fontFamily: fonts.text
  },

  /*: {
    height: 40,
    padding: 10,
    backgroundColor: colors.grayDark,
    borderColor: colors.grayMedium,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 4,
    color: colors.grayLight,
    fontSize: 16,  
}*/

Icon: {
  padding: 10,
},

checkbox: {
  flexDirection: 'row',
  paddingBottom: 20
},
buttoncheckbox: {
  alignSelf: 'center'
},

textcheckbox: {
  color: colors.grayLight,
  fontSize: 15,
  fontFamily: fonts.text
},

});

export default styles;