import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#252525'
    },

    header: {
        backgroundColor: '#F0EFF4',
        height: '30%',
        justifyContent: 'space-between'
    },

    textHeaderAlign: {
        paddingTop: 45,
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

    forgotPassword: {
        color: '#F0EFF4',
        fontSize: 14,
        marginTop: -15,
        fontWeight: 'bold',
        alignSelf: 'flex-end'
    },

    buttonsSection: {
        alignSelf: 'center',
        width: '100%',
    },

    button: {
        backgroundColor: '#5863f8',
        height: 60,
        borderRadius: 8,
        padding: 24,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,    
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