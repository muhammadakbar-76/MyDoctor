import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import IconOnly from './IconOnly';
import { color, fonts } from '../../../utils';
import ChatInputButton from './ChatInputButton';

const Button = ({title,type,onPress,icon}) => {

    let tipe = {
        background: "",
        text: ""
    }

    switch (type) {
        case "icon-only":
            return (
                <IconOnly onPress={onPress} icon={icon} />
            );
        case "secondary":
            tipe.background = color.button.secondary.background;
            tipe.text = color.button.secondary.text;
            break;
        case "disabled":
            tipe.background = color.button.disabled.background;
            tipe.text = color.button.disabled.text;
            break;
        case "chatInputLight":
        case "chatInputDark":
            return <ChatInputButton onPress={onPress} type={type}/>
        default:
            tipe.background = color.button.primary.background;
            tipe.text = color.button.primary.text;
            break;
    }

    return (
        <TouchableOpacity style={styles.container(tipe)} onPress={onPress}>
            <Text style={styles.text(tipe)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button;

const styles = StyleSheet.create({
    container: (type) => ({
        backgroundColor: type.background,
        paddingVertical: 10,
        borderRadius: 10,
        width: "100%"
    }),
    text: (type) => ({
        fontSize: 18,
        fontFamily: fonts.primary[600],
        textAlign: "center",
        color: type.text
    })
})
