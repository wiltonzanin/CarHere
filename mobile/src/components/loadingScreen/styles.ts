import { StyleSheet } from 'react-native';
import {darkTheme} from '../../Styles/colors';
import fonts from '../../Styles/fonts';

const styles = StyleSheet.create({

    containerModalLoading: {
        flex: 1,
        backgroundColor: darkTheme.textField,
        justifyContent: "center",
        alignItems: "center",
    },

    modalLoadingText: {
        marginTop: 20,
        color: darkTheme.grayLight,
        fontSize: 15,
        fontFamily: fonts.text
    }
});

export default styles;