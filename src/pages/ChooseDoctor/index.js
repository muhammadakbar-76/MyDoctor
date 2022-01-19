import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Chats, Header } from '../../components'
import { color } from '../../utils'

const ChooseDoctor = ({navigation}) => {
    return (
        <View style={styles.page}>
        <Header title="Pilih Dokter Anak" tipe="secondary" onPress={() => navigation.goBack()}/>
        <View style={styles.container}>
            <Chats name="Sugiono" lastChat="Laki-laki" pic="Doc1" tipe="list" onPress={() => navigation.navigate("Chatting")}/>
            <Chats name="Muhammad Udin" lastChat="Laki-laki" pic="Doc2" tipe="list"/>
            <Chats name="Anas Ubaningrum" lastChat="Laki-laki" pic="Doc3" tipe="list"/>
            <Chats name="Muhammad Akbar" lastChat="Laki-laki" pic="Doc1" tipe="list"/>
            <Chats name="Muhammad Akbar" lastChat="Laki-laki" pic="Doc1" tipe="list"/>
        </View>
        </View>
    )
}

export default ChooseDoctor

const styles = StyleSheet.create({
    page: {
        backgroundColor: color.white,
        flex: 1
    },
    container: {
        backgroundColor: color.white,
        flex: 1
    }
})
