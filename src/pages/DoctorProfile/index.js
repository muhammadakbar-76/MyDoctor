import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Button, Header, Profile, ProfileItem, Gap } from '../../components'
import { color } from '../../utils'

const DoctorProfile = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title="Doctor Profile" onPress={() => navigation.goBack()}/>
            <View style={styles.container}>
            <ScrollView>
            <Profile name="Carl Johnson" profession="Dokter Anak" edit="female"/>
            <Gap height={10} />
            <ProfileItem label="Alumnus" desc="Poliban - 2020" />
            <ProfileItem label="Tempat Praktik" desc="Kuburan"/>
            <ProfileItem label="No. STR" desc="0010101011100"/>
            <View style={styles.button}>
            <Button title="Start Consultation" onPress={() => navigation.navigate("Chatting")}/>
            </View>
            </ScrollView>
            </View>
        </View>
    )
}

export default DoctorProfile

const styles = StyleSheet.create({
    page: {
        backgroundColor: color.white,
        flex: 1
    },
    button: {
        paddingHorizontal: 40,
        paddingVertical: 23
    },
    container: {
        backgroundColor: color.white,
        flex: 1
    }
})
