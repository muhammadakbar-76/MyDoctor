import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Button, Gap, Header, Link } from '../../components'
import { Null,BtnAdd,BtnClose } from '../../assets'
import { color, fonts, showError, storeData } from '../../utils'
import { launchImageLibrary } from 'react-native-image-picker'
import { update,ref } from 'firebase/database';
import { database } from '../../config'

const UploadPhoto = ({navigation, route}) => {

    const {fullname, job, userId} = route.params;

    const [hasPhoto, setHasPhoto] = useState(false);
    const [photo, setPhoto] = useState(Null);
    const [photoDb, setPhotoDb] = useState("");

    const getImagesFromGallery = async () => {
       const result = await launchImageLibrary({
           includeBase64: true,
           quality: 0.5,
           maxWidth: 200,
           maxHeight: 200
       });
       if(result.didCancel || result.error){
           return showError("Upload Photo Canceled");
       }
       const data = result.assets[0];
       setPhotoDb(`data:${data.type};base64, ${data.base64}`);
       setPhoto({uri: data.uri});
       setHasPhoto(true);
    }

    const upload = () => {
        update(ref(database,`users/${userId}/`),{photo: photoDb});
        const data = {
            ...route.params,
            photo: photoDb
        };
        storeData("user",data);
        navigation.replace("MainApp");
    }

    return (
        <View style={styles.page}>
            <Header title="Upload Photo" onPress={() => navigation.goBack()}/>
            <View style={styles.photoContainer}>
                <TouchableOpacity onPress={() => !hasPhoto && getImagesFromGallery()} style={styles.photoWrapper}>
                <Image source={photo} style={styles.photo}/>
                {
                    hasPhoto ? 
                    <TouchableOpacity onPress={() => {
                        setPhoto(Null)
                        setHasPhoto(false)
                    }} style={styles.add}>
                        <BtnClose />
                    </TouchableOpacity>
                    : 
                    <BtnAdd style={styles.add}/>
                }
                </TouchableOpacity>
                <Gap height={26} />
                <Text style={styles.text}>{fullname}</Text>
                <Gap height={4} />
                <Text style={styles.textSecond}>{job}</Text>
            </View>
            <View style={styles.button}>
            <Button title="Upload and Continue" type={!hasPhoto && "disabled"} onPress={() => hasPhoto && upload()}/>
            <Gap height={30} />
            <Link link="Skip for now" size={16} align="center" onPress={() => !hasPhoto && navigation.replace("MainApp")}/>
            </View>
        </View>
    )
}

export default UploadPhoto

const styles = StyleSheet.create({
    page: {
        backgroundColor: color.white,
        flex: 1,
        paddingBottom: 20
    },
    photo: {
        height: 110,
        width: 110,
        borderRadius: 110/2
    },
    photoWrapper: {
        height: 130,
        width: 130,
        borderWidth: 1,
        borderColor: color.border,
        borderRadius: 130 /2,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontFamily: fonts.primary[600],
        fontSize: 24,
        color: color.text.primary
    },
    textSecond: {
        fontFamily: fonts.primary[400],
        fontSize: 18,
        color: color.text.secondary
    },
    photoContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        paddingHorizontal: 40
    },
    add: {
        position: "absolute",
        right: 6,
        bottom: 8
    }
})