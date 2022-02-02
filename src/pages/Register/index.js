import React, { useState } from 'react'
import { ScrollView, StyleSheet, ToastAndroid, View } from 'react-native'
import { color, showError } from '../../utils';
import { Button, Gap, Header, Input } from '../../components';
import { useDispatch } from 'react-redux';
import { checkSingle } from '@reacherhq/api/lib/single';

const Register = ({navigation}) => {

    const [data, setData] = useState({
        fullname: "",
        job: "",
        email: "",
        password: ""
    })

    const dispatch = useDispatch();

    const setLoading = val => {
        dispatch({
            type: "SET_LOADING",
            value: val
        });    
    }

    const onContinue = async () => {
        if (
            data.fullname === "" ||
            data.email === "" ||
            data.job === "" ||
            data.password === ""
        ) return ToastAndroid.showWithGravityAndOffset("Please fill all the fields",ToastAndroid.SHORT,ToastAndroid.TOP,0,70);

        setLoading(true);
       
        const result = await checkSingle({to_email: data.email});

        if(
            result.is_reachable === "invalid" || 
            result.is_reachable === "unknown" || 
            result.is_reachable === "risky"
            ){
                setLoading(false);
                return showError("Email is Invalid");
            }

        setLoading(false);
        navigation.navigate("Verify",data);
    }

    return (
        <View style={styles.page}>
            <Header title="Daftar Akun" onPress={() => navigation.goBack()}/>
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                <Input value={data.fullname} label="Full Name"
                onChangeText={e => setData({
                    ...data,
                    fullname: e
                })}
                />
                <Gap height={24} />
                <Input value={data.job} label="Pekerjaan"
                onChangeText={e => setData({
                    ...data,
                    job: e
                })}
                />
                <Gap height={24} />
                <Input value={data.email} type="emailAddress" label="Email"
                onChangeText={e => setData({
                    ...data,
                    email: e
                })}
                />
                <Gap height={24} />
                <Input value={data.password} type="password" label="Password"
                onChangeText={e => setData({
                    ...data,
                    password: e
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
