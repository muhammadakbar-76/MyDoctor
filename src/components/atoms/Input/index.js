import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { color,fonts } from '../../../utils'

const Input = ({label, type, onChangeText, value}) => {

    const [border, setBorder] = useState(color.border);

    const onFocusForm = () => {
        setBorder(color.tertiary)
    }

    const onBlurForm = () => {
        setBorder(color.border)
    }

    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput 
            secureTextEntry={type === "password" ? true : false}
            style={styles.input(border)} onBlur={() => onBlurForm()} 
            onFocus={() => onFocusForm()} 
            onChangeText={onChangeText}
            value={value}
            editable={type === "disabled" ? false : true}
            selectTextOnFocus={type === "disabled" ? false : true}
            />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    input: border => ({
        borderWidth: 1, 
        borderColor: border, 
        borderRadius: 10,
        padding: 12
    }),
    label: {
        fontFamily: fonts.primary[200],
        fontSize: 16,
        marginBottom: 6,
        color: color.text.secondary
    }
})
