import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { color } from '../../../utils'

const Link = ({link, size, align}) => {
    return (
        <View>
            <Text style={styles.text(size, align)}>{link}</Text>
        </View>
    )
}

export default Link

const styles = StyleSheet.create({
    text: (size, align) => ({
        color: color.text.secondary,
        fontFamily: "Nunito_Regular",
        fontSize: size,
        textDecorationLine: 'underline',
        paddingBottom: 10,
        textAlign: align
    })
})
