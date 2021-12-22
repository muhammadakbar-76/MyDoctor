import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IconOnly } from '..';
import { color } from '../../../utils';

const Button = ({title,type,onPress,icon}) => {
    if (type === "icon-only") {
        return (
            <IconOnly onPress={onPress} icon={icon} />
        )
    }
    return (
        <TouchableOpacity style={styles.container(type)} onPress={onPress}>
            <Text style={styles.text(type)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button;

const styles = StyleSheet.create({
    container: (type) => ({
        backgroundColor: type === "secondary" ? color.button.secondary.background : color.button.primary.background,
        paddingVertical: 10,
        borderRadius: 10,
        width: "100%"
    }),
    text: (type) => ({
        fontSize: 18,
        fontFamily: "Nunito_SemiBold",
        textAlign: "center",
        color: type === "secondary" ? color.button.secondary.text : color.button.primary.text
    })
})
