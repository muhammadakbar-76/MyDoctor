import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Logo } from '../../assets';
import { Button, Gap, Input, Link } from '../../components/atoms';

const Login = () => {
    return (
        <View style={styles.page}>
            <View>
            <Logo style={styles.logo}/>
            <Text style={styles.text}>Masuk dan Mulai Berkonsultasi</Text>
            </View>
            <View style={styles.form}>
                <View>
                <Input label="Email Address"/>
                <Gap height={24} />
                <Input label="Password"/>
                <Link link="Forget Password?" size={12}/>
                </View>
                <Button title="Sign In" />
                <Link link="Create New Account" size={16} align="center"/>
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
        backgroundColor: "white"
    },
    text: {
        fontSize: 20,
        fontFamily: "Nunito-SemiBold",
        color: "#112340",
        maxWidth: 153,
        marginVertical: 40
    },
    form: {
        flex: 1,
        justifyContent: "space-between"
    }
})
