import { StyleSheet } from 'react-native';
import colors from '../../Styles/colors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'space-between',
        backgroundColor: colors.background
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20,
    },

    title: {
        color: colors.grayLight,
        fontSize: 20,
    },

    labelGroup: {
        flex: 1,
        flexDirection: 'row',
    },

    text: {
        color: colors.grayLight,
        fontSize: 18,
        marginBottom: 10
    },

    labelOpcional:{
        color: 'rgba(240, 239, 244, 0.5)',
        fontSize: 10,
        paddingLeft: 10,
        paddingTop: 8
    },

    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },

    inputGroupColumn: {
        flex: 1,
        marginRight: 15
    },

    inputGroupSecondColumn: {
        flex: 1
    },

    dropdown: {
        backgroundColor: colors.grayDark,
        borderColor: colors.grayMedium,
        height: 40
    },

    dropdownList: {
        backgroundColor: colors.grayDark,
        borderColor: colors.grayMedium,
    },

    dropdownText: {
        fontSize: 16,
        color: colors.grayLight,
    },

    imageSelector: {
        backgroundColor: colors.grayDark,
        borderWidth: 1,
        borderColor: colors.grayMedium,
        alignItems: 'center',
        justifyContent: 'center',
        width: 120,
        height: 120,
        borderRadius: 10
    },

    buttonDelete: {
        borderWidth: 1,
        borderColor: colors.button,
        alignItems: 'center',
        justifyContent: 'center',
        width: 120,
        height: 120,
        borderRadius: 10,
        marginLeft: 10
    },

    carImages:{
        width: 120,
        height: 120,
        borderRadius: 10,
        marginRight: 10
    }
});

export default styles;