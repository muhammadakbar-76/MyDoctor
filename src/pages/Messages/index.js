import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Chats} from '../../components'
import { color, fonts } from '../../utils'
import anjay from "../../dummy.json";

const Messages = ({navigation}) => {
    return (
        <View style={styles.page}>
            <View style={styles.container}>
            <Text style={styles.title}>Messages</Text>
            {anjay.chat.map(data => {
               return(
                <Chats key={data.id} name={data.name} pic={data.pic} lastChat={data.lastChat}/>
               ) 
            })}
            </View>
        </View>
    )
}

export default Messages

const styles = StyleSheet.create({
    page: {
        backgroundColor: color.secondary,
        flex: 1
    },
    container: {
        backgroundColor: color.white,
        flex: 1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,

    },
    title: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: color.text.primary,
        marginTop: 30,
        marginLeft: 16
    }
})
