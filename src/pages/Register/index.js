import React, { useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { color } from '../../utils';
import { Button, Gap, Header, Input } from '../../components';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { fire } from '../../config';

const Register = ({navigation}) => {
    const [data, setData] = useState({
        fullName: "",
        job: "",
        email: "",
        password: ""
    })

    const onContinue = () => {
        if (
            data.fullName === "" ||
            data.email === "" ||
            data.job === "" ||
            data.password === ""
        ) return alert("Mohon Dilengkapi");

        const auth = getAuth(fire);
        createUserWithEmailAndPassword(auth, data.email, data.password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log("register berhasil : ",user);
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error({
                code: errorCode,
                message: errorMessage
            })
            // ..
          });
    }

    return (
        <View style={styles.page}>
            <Header title="Daftar Akun" onPress={() => navigation.goBack()}/>
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                <Input label="Full Name" name="fullName" 
                onSubmitEditing={e => setData({
                    ...data,
                    [e.nativeEvent.name]: e.nativeEvent.value
                })}
                onEndEditing={e => setData({
                    ...data,
                    [e.nativeEvent.name]: e.nativeEvent.value
                })}
                />
                <Gap height={24} />
                <Input label="Pekerjaan" name="job"
                onSubmitEditing={e => setData({
                    ...data,
                    [e.nativeEvent.name]: e.nativeEvent.value
                })}
                onEndEditing={e => setData({
                    ...data,
                    [e.nativeEvent.name]: e.nativeEvent.value
                })}
                />
                <Gap height={24} />
                <Input type="emailAddress" label="Email" name="email" 
                onSubmitEditing={e => setData({
                    ...data,
                    [e.nativeEvent.name]: e.nativeEvent.value
                })}
                onEndEditing={e => setData({
                    ...data,
                    [e.nativeEvent.name]: e.nativeEvent.value
                })}
                />
                <Gap height={24} />
                <Input type="password" label="Password" name="password"
                onSubmitEditing={e => setData({
                    ...data,
                    [e.nativeEvent.name]: e.nativeEvent.value
                })}
                onEndEditing={e => setData({
                    ...data,
                    [e.nativeEvent.name]: e.nativeEvent.value
                })}
                />
                </View>
                <Gap height={24} />
                <Button title="Continue" onPress={() => onContinue()}/>
                <Gap height={24} />
                </ScrollView>
            </View>
        </View>
    )
}

export default Register;

const styles = StyleSheet.create({
    page: {
        backgroundColor: color.white,
        flex: 1
    },
    content: {
        paddingHorizontal: 40,
        paddingBottom: 20,
        flex: 1,
        justifyContent: "space-between"
    }
})
