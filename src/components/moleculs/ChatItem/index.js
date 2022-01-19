import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { color, fonts } from '../../../utils'
import { Doc1 } from '../../../assets'

const ChatItem = ({isMe,message,time}) => {
    return (
        <View style={styles.page(isMe)}>
            { !isMe && <Image source={Doc1} style={styles.image} /> }
            <View>
            <View style={styles.container(isMe)}>
            <Text style={styles.text(isMe)}>{message}</Text>
            </View>
            <Text style={styles.date(isMe)}>{time}</Text>
            </View>
        </View>
    )
}

export default ChatItem

const styles = StyleSheet.create({
    container: isMe => ({
        padding: 12,
        paddingRight: 18,
        backgroundColor: isMe ? color.cardLight : color.primary,
        borderRadius: 10,
        borderBottomRightRadius: isMe ? 0 : 10,
        borderBottomLeftRadius: isMe ? 10 : 0,
        maxWidth: isMe ? "70%" : "80%"
    }),
    page: isMe => ({
        marginBottom: 20,
        alignItems: "flex-end",
        paddingHorizontal: 16,
        flexDirection: isMe ? "column" : "row",
    }),
    text: isMe => ({
        fontSize: 14,
        fontFamily: fonts.primary.normal,
        color: isMe ? color.text.primary : color.white
    }),
    date: isMe => ({
        fontSize: 11,
        fontFamily: fonts.primary.normal,
        color: color.text.secondary,
        marginTop: 8,
        textAlign: isMe ? "right" : "left"
    }),
    image: {
        width: 30,
        height: 30,
        borderRadius: 30/2,
        marginRight: 12,
    }
})
