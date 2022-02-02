import { EmailAuthProvider, getAuth, reauthenticateWithCredential, updatePassword } from 'firebase/auth'
import { ref, update } from 'firebase/database'
import React, {useEffect, useState} from 'react'
import { Keyboard, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { launchImageLibrary } from 'react-native-image-picker'
import { useDispatch } from 'react-redux'
import { Button, Header, Profile, Gap, Input } from '../../components'
import { database, fire } from '../../config'
import { color, fonts, getData, showError, showSuccess, storeData } from '../../utils'

const UpdateProfile = ({navigation}) => {

    const [value, setValue] = useState({
        fullname: "",
        job: "",
        email: "",
        photo: ""
    });

    const [password,setPassword] = useState({
        old: "",
        new: ""
    });

    const dispatch = useDispatch();

    const setLoading = val => {
        dispatch({
            type: "SET_LOADING",
            value: val
        });    
    }


    const updateDb = () => {
        update(ref(database, `users/${value.userId}/`),value)
        .then(() => {
            setLoading(false);
            showSuccess("Update Success!");
            storeData("user", value);
            setTimeout(() => {
                navigation.navigate("UserProfile");
            }, 1500);
        })
        .catch(error => {
            setLoading(false);
            showError(error.message)
        })
    }

    const updateThePassword = () => {
        const user = getAuth(fire).currentUser;
        const credential = new EmailAuthProvider.credential(value.email,password.old);
        reauthenticateWithCredential(user,credential)
        .then(() => {
            updatePassword(user,password.new)
            .then(() => updateDb())
            .catch(err => {
                setLoading(false)
                showError(err.message);
            });
        })
        .catch(err => {
            setLoading(false);
            showError(err.message);
        })
    }

    const submit = () => {
        setLoading(true);
        if (password.new.length > 0) {
            if (password.new.length < 6 || password.old.length < 6) {
                showError("Password must at least 6 characters");
            } else {
                updateThePassword();
            }
        } else {
            updateDb();
        }
    }

    const onChange = (key, val) => {
        setValue({
            ...value,
            [key]: val
        })
    }

    const changeImage = async () => {
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
        onChange("photo",`data:${data.type};base64, ${data.base64}`);
    }

    useEffect(() => {
        getData("user").then(val => {
            setValue(val);
        })
    },[]);


    return (
        <View style={styles.page}>
            <Header title="Edit Profile" onPress={() => navigation.goBack()}/>
            <View style={styles.container} onPress={() => Keyboard.dismiss()}>
            <ScrollView showsVerticalScrollIndicator={false}>
            {
                value.photo.length > 0 &&
                <TouchableOpacity onPress={() => changeImage()}>
                    <Profile edit="change" image={value.photo} onPress={() => setValue({
                        ...value,
                        photo: "null"
                    })}/>
                </TouchableOpacity>
            }
            <Gap height={26} />
            <Input value={value.fullname} label="Nama Lengkap" onChangeText={e => onChange("fullname",e)} />
            <Gap height={24} />
            <Input value={value.job} label="Pekerjaan" onChangeText={e => onChange("job",e)} />
            <Gap height={24} />
            <Input value={value.email} type="disabled" label="Email" />
            <Gap height={24} />
            <Input value={password.old} type="password" label="Old Password" onChangeText={e => setPassword({
                ...password,
                old: e
            })} />
             <Text style={styles.password}>Put your old password if you need to change password</Text>
            <Gap height={24} />
            <Input value={password.new} type="password" label="New Password" onChangeText={e => setPassword({
                ...password,
                new: e
            })} />
            <Gap height={40} />
            <Button title="Save Profile" onPress={() => submit()} />
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
    },
    password: {
        marginTop: 5,
        fontFamily: fonts.primary[300],
        fontSize: 11
    }
})
