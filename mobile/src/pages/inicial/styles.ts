import { StyleSheet } from 'react-native';
import {darkTheme} from '../../Styles/colors';
import fonts from '../../Styles/fonts'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        backgroundColor: darkTheme.grayLight,
        height: '30%',
        justifyContent: 'space-between'
    },

    textHeaderAlign: {
        paddingTop: 45,
        marginLeft: '8%'
    },

    title: {
        color: darkTheme.background,
        fontSize: 35,
        fontFamily: fonts.title
    },

    subtitle: {
        color: darkTheme.background,
        fontSize: 18,
        paddingTop: 5,
        fontFamily: fonts.text
    },

    svgFlag: {
        marginBottom: -5,
        marginLeft: '-11%'
    },

    content: {
        paddingTop: '35%',
        width: '80%',
        height: '68%',
        justifyContent: 'space-between',
        alignSelf: 'center'
    },

    forgotPasswordTextButton: {
        width: '50%',
        marginTop: -26,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        paddingTop: 15,
        paddingLeft: 15,
    },

    forgotPassword: {
        color: darkTheme.grayLight,
        fontSize: 14,
        alignSelf: 'flex-end',
        fontFamily: fonts.title
    },

    buttonsSection: {
        alignSelf: 'center',
        width: '100%',
    },

    textButton: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    registerText: {
        color: darkTheme.grayLight,
        fontSize: 18,
        fontFamily: fonts.text
    },

    registerTextBold: {
        color: darkTheme.grayLight,
        fontSize: 18,
        fontFamily: fonts.title
    },
});

export default styles;