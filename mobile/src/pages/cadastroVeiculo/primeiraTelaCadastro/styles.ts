import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'space-between',
        backgroundColor: "#252525"
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20,
    },

    title: {
        color: '#F0EFF4',
        fontSize: 20,
    },

    text: {
        color: '#F0EFF4',
        fontSize: 18,
        marginBottom: 10
    },

    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    inputGroupRow: {
        flex: 1,
        marginRight: 15
    },

    inputGroupSecondRow: {
        flex: 2
    },

    dropdown: {
        backgroundColor: "#333333",
        borderColor: "#525252"
    },

    dropdownText: {
        fontSize: 16,
        color: "#F0EFF4",
    }
});

export default styles;