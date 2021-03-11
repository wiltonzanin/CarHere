import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#252525',
        alignItems: 'center',
        padding: 40
    },

    header: {
        width: '100%',
        height: 240,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },

    textHeaderAlign: {
        paddingTop: 10
    },

    title: {
        color: '#F0EFF4',
        fontSize: 25,
        fontWeight: 'bold',
    }
});

export default styles;