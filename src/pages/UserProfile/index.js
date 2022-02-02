import { useIsFocused } from '@react-navigation/native';
import { getAuth, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Header, Profile, Chats, Gap } from '../../components';
import { fire } from '../../config';
import { color, getData, showError } from '../../utils';

const UserProfile = ({navigation}) => {
    const [profile, setProfile] = useState({
        fullname: "",
        job: "",
        photo: ""
    });

    const isFocused = useIsFocused();

    useEffect(() => {
        getData("user").then(value => {
            setProfile(value);
        })
    },[isFocused]);

    const logOut = () => {
        const auth = getAuth(fire);
        signOut(auth)
        .then(() => {
            navigation.replace("GetStarted");
        })
        .catch(err => {
            showError(err.message);
        })
    }

    return (
        <View style={styles.page}>
            <Header title="Profile" onPress={() => navigation.navigate("MainApp","reload")}/>
            <Gap height={10} />
            {
                profile.fullname.length > 0 && <Profile name={profile.fullname} profession={profile.job} image={profile.photo}/>
            }
            <Gap height={14} />
            <ScrollView showsVerticalScrollIndicator={false}>
            <Chats name="Edit Profile" lastChat="Last Updated Yesterday" tipe="list" pic="account" onPress={() => navigation.navigate("UpdateProfile")}/>
            <Chats name="Languages" lastChat="Available 12 languages" tipe="list" pic="translate" />
            <Chats name="Give Us Rate" lastChat="On Google Play Store" tipe="list" pic="star" />
            <Chats name="Sign Out" tipe="list" pic="desc" onPress={() => logOut()} />
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
