import { StyleSheet } from 'react-native';
import colors from '../../Styles/colors';

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
    }
});

export default styles;