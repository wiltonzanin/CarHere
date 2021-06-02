import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30
    },

    header: {
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20
    },

    title: {
        color: '#F0EFF4',
        fontSize: 20,
    },

    subtitle: {
        fontStyle: 'italic',
        color: '#F0EFF4',
        paddingBottom: 20
    },

    dropdownLabel: {
        color: '#F0EFF4',
        fontSize: 18,
        paddingBottom: 10
    },

    dropdown: {
        backgroundColor: '#333333',
        borderColor: '#525252',
    }
});

export default styles;