import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { color } from '../../../utils'
import { SendDark, SendLight } from '../../../assets'

const ChatInputButton = ({onPress, type}) => {
    const Icon = () => {
        return type === "chatInputDark" ?  <SendLight /> : <SendDark />
    }
    return (
       <TouchableOpacity style={styles.button(type)} onPress={onPress}>
           {<Icon />}
       </TouchableOpacity>
    )
}

export default ChatInputButton

const styles = StyleSheet.create({
    button: type => ({
        borderRadius: 10,
        backgroundColor: type === "chatInputDark" ? color.button.darkInput.background : color.button.disabled.background,
        height: 55,
        width: 55,
        justifyContent: "center",
        alignItems: "center"
    })
})
