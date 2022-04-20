import { StyleSheet } from 'react-native';
import colors from '../../Styles/colors';
import fonts from '../../Styles/fonts';

const styles = StyleSheet.create({

    containerModalLoading: {
        flex: 1,
        backgroundColor: colors.grayDark,
        justifyContent: "center",
        alignItems: "center",
    },

    modalLoadingText: {
        marginTop: 20,
        color: colors.grayLight,
        fontSize: 15,
        fontFamily: fonts.text
    }
});

export default styles;