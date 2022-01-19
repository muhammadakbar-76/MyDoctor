import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { color,fonts } from '../../../utils'

const Input = ({label, name, onSubmitEditing, onEndEditing, type}) => {

    const [border, setBorder] = useState(color.border);

    const onFocusForm = () => {
        setBorder(color.tertiary)
    }

    const onBlurForm = () => {
        setBorder(color.border)
    }

    const submit = (event) => {
        if (onSubmitEditing) {
            if (name) {
                onSubmitEditing({
                    nativeEvent: {
                        name,
                        value: event.nativeEvent.text
                    }
                })
            }
            else {
                onSubmitEditing(event.nativeEvent.text);
            }
        }
        if (onEndEditing){
            if (name) {
                onEndEditing({
                    nativeEvent: {
                        name,
                        value: event.nativeEvent.text
                    }
                })
            }
            else {
                onEndEditing(event.nativeEvent.text);
            }
        }
    }

    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput 
            textContentType={type ? type : "none"}
            secureTextEntry={type === "password" ? true : false}
            style={styles.input(border)} onBlur={() => onBlurForm()} 
            onFocus={() => onFocusForm()} 
            onSubmitEditing={e => submit(e)} 
            onEndEditing={e => submit(e)}
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
