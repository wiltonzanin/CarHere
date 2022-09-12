import { StyleSheet } from 'react-native';
import {darkTheme} from '../../Styles/colors'
import fonts from '../../Styles/fonts'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'space-between',
        backgroundColor: darkTheme.background
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20,
        marginBottom: 20
    },

    title: {
        color: darkTheme.grayLight,
        fontSize: 20,
    fontFamily: fonts.title
    },

    labelGroup: {
        flex: 1,
        flexDirection: 'row',
    },

    text: {
        color: darkTheme.grayLight,
        fontSize: 18,
        marginBottom: 10,
    fontFamily: fonts.text
    },

    labelOpcional:{
        color: 'rgba(240, 239, 244, 0.5)',
        fontSize: 10,
        paddingLeft: 10,
        paddingTop: 8,
    fontFamily: fonts.text
    },

    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    inputGroupColumn: {
        flex: 1,
        marginRight: 15
    },

    inputGroupSecondColumn: {
        flex: 1
    },

    dropdown: {
        backgroundColor: darkTheme.textField,
        borderColor: darkTheme.grayMedium,
        height: 40,
        marginBottom: 20
    },

    dropdownList: {
        backgroundColor: darkTheme.textField,
        borderColor: darkTheme.grayMedium,
    },

    dropdownText: {
        fontSize: 16,
        color: darkTheme.grayLight,
    fontFamily: fonts.text
    },

    imageSelector: {
        backgroundColor: darkTheme.textField,
        borderWidth: 1,
        borderColor: darkTheme.grayMedium,
        alignItems: 'center',
        justifyContent: 'center',
        width: 120,
        height: 120,
        borderRadius: 10
    },

    buttonDelete: {
        borderWidth: 1,
        borderColor: darkTheme.button,
        alignItems: 'center',
        justifyContent: 'center',
        width: 120,
        height: 120,
        borderRadius: 10,
        marginLeft: 10
    },

    carImages:{
        width: 120,
        height: 120,
        borderRadius: 10,
        marginRight: 10
    }
});

export default styles;