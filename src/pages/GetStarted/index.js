import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Bg, Logo } from '../../assets';
import { Gap, Button } from '../../components/atoms';

const GetStarted = ({navigation}) => {
    return (
        <ImageBackground source={Bg} style={styles.page}>
            <View>
                <Logo />
                <Text style={styles.text}>Konsultasi dengan dokter jadi lebih mudah dan fleksibel</Text>
            </View>
            <View style={styles.button}>
                <Button title="Get Started" onPress={() => {
                    navigation.navigate("Register");
                }}/>
                <Gap height={16} />
                <Button title="Sign In" type="secondary" onPress={() => {
                    navigation.navigate("Login")
                }}/>
            </View>
        </ImageBackground>
    )
}

export default GetStarted

const styles = StyleSheet.create({
    page: {
        padding: 40,
        justifyContent: "space-between",
        flex: 1
    },
    text: {
        fontSize: 28,
        color: "white",
        marginTop: 91,
        fontFamily: "Nunito-SemiBold" //semibold = 600
    },
    button: {
        alignItems: "center"
    }
});
