import React, {useState} from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Button, EditProfileForm, Header, Profile } from '../../components'
import { color } from '../../utils'

const UpdateProfile = ({navigation}) => {

    const [value, setValue] = useState({
        name: "",
        job: "",
        email: "",
        password: ""
    });

    return (
        <View style={styles.page}>
            <Header title="Edit Profile" onPress={() => navigation.goBack()}/>
            <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <Profile edit="change"/>
            <EditProfileForm onSubmitEditing={e => setValue({
                ...value,
                [e.nativeEvent.name] : e.nativeEvent.value
            })} />
            <Button title="Save Profile" onPress={() => alert("anjay")} />
            </ScrollView>
            </View>
        </View>
    )
}

export default UpdateProfile

const styles = StyleSheet.create({
    page: {
        backgroundColor: color.white,
        flex: 1
    },
    container: {
        padding: 40,
        paddingTop: 0,
        flex: 1
    }
})
