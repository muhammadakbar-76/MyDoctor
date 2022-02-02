import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Button, Header, Profile, ProfileItem, Gap } from '../../components'
import { color } from '../../utils'

const DoctorProfile = ({navigation, route}) => {
    const dataDoctor = route.params;
    return (
        <View style={styles.page}>
            <Header title="Doctor Profile" onPress={() => navigation.goBack()}/>
            <View style={styles.container}>
            <ScrollView>
            <Profile name={dataDoctor.data.fullName} profession={dataDoctor.data.profession} image={dataDoctor.data.photo} edit={dataDoctor.data.gender === "pria" ? "male" : "female"}/>
            <Gap height={10} />
            <ProfileItem label="Alumnus" desc={dataDoctor.data.university} />
            <ProfileItem label="Tempat Praktik" desc={dataDoctor.data.hospital_address}/>
            <ProfileItem label="No. STR" desc={dataDoctor.data.str_number}/>
            <View style={styles.button}>
            <Button title="Start Consultation" onPress={() => navigation.navigate("Chatting",dataDoctor)}/>
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
