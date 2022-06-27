import { StyleSheet } from 'react-native';
import fonts from '../../Styles/fonts';
import {darkTheme} from '../../Styles/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: darkTheme.background,
        padding: 30,
        justifyContent: 'space-between'
    },

    header: {
        width: '100%',
        paddingTop: 20
    },

    backButtonStyle:{
        paddingBottom: 20
    },

    title: {
        color: darkTheme.grayLight,
        fontSize: 25,
        fontWeight: 'bold',
        paddingBottom: 20,
        fontFamily: fonts.title
    },

    instructions:{
        color: darkTheme.grayLight,
        fontSize: 16,
        textAlign: 'auto'
    },

    buttonContent:{
        paddingTop: 20
    },


});

export default styles;