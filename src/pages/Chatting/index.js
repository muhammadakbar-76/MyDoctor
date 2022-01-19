import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { ChatInput, ChatItem, Header } from '../../components';
import { color, fonts } from '../../utils';
import { Keyboard } from 'react-native';

const Chatting = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title="Sugiono" tipe="dark-profile" onPress={() => navigation.goBack()}/>
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.chatDate}>Sabtu, 8 Janurai 2022</Text>
                    <ChatItem isMe message="Oi mas, kapan hutang lu bayar?" time="03.30PM"/>
                    <ChatItem message="Halo, Selamat datang di aplikasi MyDoctor, Saat ini dokter sedang tidak aktif, silakan tinggalkan pesan dan akan kami balas segera, terima kasih" time="03.32PM"/>
                    <ChatItem isMe message="Ei lapet kali lah, saya yang bikin ni aplikasi ga ngasih fitur bot mas, gak bisa ngeles ente" time="03.33PM"/>
                    <ChatItem message="Shieet, nyicil yak" time="03.40PM" />
                </ScrollView>
            </View>
            <View><ChatInput onPress={() => Keyboard.dismiss()}/></View>
        </View>
    )
}

export default Chatting

const styles = StyleSheet.create({
    page: {
        backgroundColor: color.white,
        flex: 1
    },
    container: {
        backgroundColor: color.white,
        flex: 1
    },
    chatDate: {
        fontSize: 11,
        fontFamily: fonts.primary.normal,
        color: color.text.secondary,
        marginVertical: 20,
        textAlign: "center"
    }
})
