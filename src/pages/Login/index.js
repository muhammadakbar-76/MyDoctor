import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { get, ref } from 'firebase/database';
import React, {useState} from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Logo } from '../../assets';
import { Button, Gap, Input, Link } from '../../components';
import { database, fire } from '../../config';
import { color, fonts, showError, showSuccess, storeData } from '../../utils';

const Login = ({navigation}) => {
    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const login = async () => {
        try {
            setLoading(true);
            const auth = getAuth(fire);
            const data = await signInWithEmailAndPassword(auth, form.email, form.password);
            setLoading(false);
            showSuccess("Login Success");
            const storeDb = await get(ref(database, `users/${data.user.uid}/`));
            await storeData("user",storeDb);
            setTimeout(() => {
                navigation.replace("MainApp");
            },1500)
        } catch (error) {
            setLoading(false);
            showError(error.message)
        }
    }

    const dispatch = useDispatch();

    const setLoading = val => {
        dispatch({
            type: "SET_LOADING",
            value: val
        })
    }

    return (
        <View style={styles.page}>
            <View style={styles.scroll}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                <Logo style={styles.logo}/>
                <Text style={styles.text}>Masuk dan Mulai Berkonsultasi</Text>
                <Input label="Email Address" onChangeText={e => setForm({
                    ...form,
                    email: e
                })} value={form.email}/>
                <Gap height={24} />
                <Input label="Password" type="password" onChangeText={e => setForm({
                    ...form,
                    password: e
                })} value={form.password}/>
                <Link link="Forget Password?" size={12}/>
                <Gap height={10} />
                </View>
                <Button title="Sign In" onPress={() => login()}/>
                <Gap height={10} />
                <Link link="Create New Account" size={16} align="center" onPress={() => navigation.navigate("Register")}/>
            </ScrollView>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    page: {
        flex: 1,
        padding: 40,
        paddingBottom: 10,
        backgroundColor: color.white
    },
    text: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: "#112340",
        maxWidth: 153,
        marginVertical: 40
    },
    scroll: {
        flex: 1,
        backgroundColor: color.white,
        justifyContent: "space-between"
    }
})
