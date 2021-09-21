import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },

    header: {
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        paddingBottom: 20
    },

    dropdown: {
        backgroundColor: '#333333',
        borderColor: '#525252',
    }
});

export default styles;