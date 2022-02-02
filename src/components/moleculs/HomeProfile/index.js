import React, {useState,useEffect} from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Gap } from '../../atoms/';
import { Null } from '../../../assets';
import { color, fonts, getData, showError } from '../../../utils';
import { useIsFocused } from '@react-navigation/native';

const HomeProfile = ({onPress}) => {

    const [profile, setProfile] = useState({
        photo: Null,
        fullname: "",
        job: ""
    });

    const isFocused = useIsFocused();

    useEffect(() => {
            getData("user").then(res => {
                const data = res; //ingat, kalo kita cuman nambah = doang yang mengandung object itu bukan ngopy tapi refrence
                data.photo = res.photo !== "null" ? {uri: res.photo} : Null;
                setProfile(res);
            }).catch(err => 
               showError(err.message)
            );
    },[isFocused])

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={profile.photo} style={styles.image}/>
            <Gap width={12} />
            <View>
            <Text style={styles.name}>{profile.fullname}</Text>
            <Text style={styles.profession}>{profile.job}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default HomeProfile;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center"
    },
    image: {
        width: 46,
        height: 46,
        borderRadius: 46/2
    },
    name: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: color.text.primary,
        textTransform: "capitalize"
    },
    profession: {
        fontSize: 12,
        fontFamily: fonts.primary[400],
        color: color.text.secondary,
        textTransform: "capitalize"
    }
})
