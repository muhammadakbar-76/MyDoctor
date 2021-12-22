import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { color } from '../../utils';
import { Button, Gap, Header, Input } from '../../components';

const Register = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title="Daftar Akun" onPress={() => navigation.goBack()}/>
            <View style={styles.content}>
                <View>
                <Input label="Full Name" />
                <Gap height={24} />
                <Input label="Pekerjaan" />
                <Gap height={24} />
                <Input label="Email" />
                <Gap height={24} />
                <Input label="Password" />
                </View>
            <Button title="Continue" />
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
