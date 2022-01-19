import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Header, Profile, Chats, Gap } from '../../components';
import { color } from '../../utils';

const UserProfile = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title="Profile" onPress={() => navigation.goBack()}/>
            <Gap height={10} />
            <Profile name="Calon Istri" profession="Ibu Rumah Tangga"/>
            <Gap height={14} />
            <ScrollView showsVerticalScrollIndicator={false}>
            <Chats name="Edit Profile" lastChat="Last Updated Yesterday" tipe="list" pic="account" onPress={() => navigation.navigate("UpdateProfile")}/>
            <Chats name="Languages" lastChat="Available 12 languages" tipe="list" pic="translate" />
            <Chats name="Give Us Rate" lastChat="On Google Play Store" tipe="list" pic="star" />
            <Chats name="Help Center" lastChat="Read our guidelines" tipe="list" pic="desc" />
            </ScrollView>
        </View>
    )
}

export default UserProfile

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: color.white
    }
})
