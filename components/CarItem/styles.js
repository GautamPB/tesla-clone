import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    carContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },

    titles: {
        marginTop: '30%',
        alignItems: 'center',
    },

    title: {
        fontSize: 40,
        fontWeight: '400',
    },

    sub_title: {
        fontSize: 16,
        color: 'gray',
    },

    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
    },

    buttonContainer: {
        position: 'absolute',
        bottom: 50,
        width: '100%',
    },

    sub_titleCTA: {
        textDecorationLine: 'underline',
    },
})

export default styles
