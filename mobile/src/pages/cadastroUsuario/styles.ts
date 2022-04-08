import { StyleSheet } from 'react-native';
import colors from '../../Styles/colors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'space-between'
    },

    header: {
        width: '100%',
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    title: {
        color: colors.grayLight,
        fontSize: 20,
    },

    termosECondicoes: {
        flexDirection: 'row',
        paddingBottom: 20
    },

    buttonTermosECondicoes: {
        alignSelf: 'center'
    },

    textTermosECondicoes: {
        color: colors.grayLight,
        fontSize: 15,
        textDecorationLine: 'underline'
    },

    containerModalLoading: {
        flex: 1,
        backgroundColor: 'rgba(51, 51, 51, 0.7)',
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