import { StyleSheet } from 'react-native';
import colors from '../../Styles/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        backgroundColor: colors.grayLight,
        height: '30%',
        justifyContent: 'space-between'
    },

    textHeaderAlign: {
        paddingTop: 45,
        marginLeft: '8%'
    },

    title: {
        color: colors.background,
        fontSize: 35,
        fontWeight: 'bold',
    },

    subtitle: {
        color: colors.background,
        fontSize: 18,
        paddingTop: 5
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
        paddingLeft: 15
    },

    forgotPassword: {
        color: colors.grayLight,
        fontSize: 14,
        fontWeight: 'bold',
        alignSelf: 'flex-end'
    },

    buttonsSection: {
        alignSelf: 'center',
        width: '100%',
    },

    textButton: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    registerText: {
        color: colors.grayLight,
        fontSize: 18,
    },

    registerTextBold: {
        color: colors.grayLight,
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default styles;