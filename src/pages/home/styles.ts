import { StyleSheet } from 'react-native';
import { clockRunning } from 'react-native-reanimated';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#252525',
        alignItems: 'center',
    },
    
    footer:{
        backgroundColor: '#F0EFF4',
        width: '100%',
        height: 250,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },

    textFooterAlign: {
        marginTop: '15%',
        marginLeft: '8%'
    },

    title: {
        color: '#252525',
        fontSize: 30,
        fontWeight: 'bold',

    },

    subtitle: {
        color: '#252525',
        fontSize: 15,
        paddingTop: 5
    },

    buttonsSection:{
        width: '80%',
    },

    button: {
        backgroundColor: '#cc2936',
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
});

export default styles;