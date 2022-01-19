import React, {useState} from 'react'
import { Keyboard, StyleSheet, TextInput, View } from 'react-native'
import {Button, Gap} from '../../atoms'
import { color } from '../../../utils'

const ChatInput = ({onPress}) => {

    const [isFocus, setIsFocus] = useState(false);
    const [data, setData] = useState("");

    function clear(){
        setData("");
        setIsFocus(false);
        alert("sended");
    }

    return (
        <View style={styles.page} onPress={onPress}>
            <TextInput 
            placeholder='Type Here' 
            style={styles.input}
            onChangeText={a => {
            setData(a);
            if(a.length != 0){
                setIsFocus(true);
            }
            else{
                setIsFocus(false);
            }
            }}
            value={data}
            onSubmitEditing={() => clear()}
            />
            <Gap width={10} />
            <Button type={isFocus ? "chatInputDark" : "chatInputLight"} onPress={() => {
                Keyboard.dismiss();
                clear();
                }}/>
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
