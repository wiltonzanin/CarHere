import { StyleSheet } from 'react-native';
import { colors } from 'react-native-elements';
import {darkTheme} from '../../../Styles/colors'

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
        color: darkTheme.grayLight,
        fontSize: 20,
    },

    subtitle: {
        fontStyle: 'italic',
        color: darkTheme.grayLight,
        paddingBottom: 20
    },

    dropdownLabel: {
        color: darkTheme.grayLight,
        fontSize: 18,
        paddingBottom: 20
    },

    dropdown: {
        backgroundColor: darkTheme.textField,
        borderColor: darkTheme.grayMedium,
    }
});

export default styles;