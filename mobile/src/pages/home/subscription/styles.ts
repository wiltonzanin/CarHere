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
        paddingTop: 20,
        justifyContent:"space-between"
    },

    title: {
        color: '#F0EFF4',
        fontSize: 20,
        // marginTop: 20,
        marginLeft:"auto",
        marginRight:"auto"
    },

    centeredView:{
        alignContent: 'center',
    },

    text: {
        color: '#F0EFF4',
        fontSize: 18,
        marginBottom: 10,
        marginTop: 10,
        alignSelf: "center",
        justifyContent: "flex-end"
    },

});

export default styles;