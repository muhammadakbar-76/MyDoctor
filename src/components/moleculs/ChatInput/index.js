import React from 'react'
import { Keyboard, StyleSheet, TextInput, View } from 'react-native'
import {Button, Gap} from '../../atoms'
import { color } from '../../../utils'

const ChatInput = ({onPress,onChangeText,value,onSubmitEditing,isFocus}) => {

    return (
        <View style={styles.page} onPress={onPress}>
            <TextInput 
            placeholder='Type Here' 
            style={styles.input}
            value={value}
            onSubmitEditing={onSubmitEditing}
            onChangeText={onChangeText}
            />
            <Gap width={10} />
            <Button type={isFocus ? "chatInputDark" : "chatInputLight"} onPress={onPress}/>
        </View>
    )
}

export default ChatInput

const styles = StyleSheet.create({
    page: {
        flexDirection: "row",
        padding: 16,
        paddingTop: 10
    },
    input: {
        backgroundColor: color.text.formInput,
        borderRadius: 10,
        flex: 2,
        padding: 14
    }
})
