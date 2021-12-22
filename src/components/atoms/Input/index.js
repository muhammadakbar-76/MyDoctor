import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { color } from '../../../utils'

const Input = ({label}) => {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.input} />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    input: {
        borderWidth: 1, 
        borderColor: color.border, 
        borderRadius: 10,
        padding: 12
    },
    label: {
        fontFamily: "Nunito_Regular",
        fontSize: 16,
        marginBottom: 6,
        color: color.text.secondary
    }
})
