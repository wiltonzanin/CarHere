import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#252525'
    },

    header: {
        backgroundColor: '#F0EFF4',
        height: '30%',
    },

    textHeaderAlign: {
        paddingTop: 50,
        marginLeft: '8%'
    },

    title: {
        color: "#252525",
        fontSize: 35,
        fontWeight: 'bold',
    },

    subtitle: {
        color: "#252525",
        fontSize: 18,
        paddingTop: 5
    },

    svgFlag: {
        marginTop: 20,
        marginLeft: '-11%'
    },

    content: {
        marginTop: 100,
        width: '80%',
        alignSelf: 'center'
    },

    forgotPassword: {
        color: '#F0EFF4',
        fontSize: 14,
        marginTop: -15,
        fontWeight: 'bold',
        alignSelf: 'flex-end'
    },

    buttonsSection: {
        alignSelf: 'center',
        marginTop: 100,
        width: '100%',
        paddingBottom: 15,
    },

    button: {
        backgroundColor: '#5863f8',
        height: 60,
        borderRadius: 8,
        padding: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonText: {
        color: '#F0EFF4',
        fontSize: 20,
        fontWeight: 'bold',
    },

    textButton: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    registerText: {
        paddingTop: 12,
        color: '#F0EFF4',
        fontSize: 18,
    },

    registerTextBold: {
        color: '#F0EFF4',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default styles;