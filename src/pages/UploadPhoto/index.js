import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Button, Gap, Header, Link } from '../../components'
import { Null,BtnAdd } from '../../assets'
import { color, fonts } from '../../utils'

const UploadPhoto = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title="Upload Photo" onPress={() => navigation.goBack()}/>
            <View style={styles.photoContainer}>
                <View style={styles.photoWrapper}>
                <Image source={Null} style={styles.photo}/>
                <BtnAdd style={styles.add}/>
                </View>
                <Gap height={26} />
                <Text style={styles.text}>Nama Anda</Text>
                <Gap height={4} />
                <Text style={styles.textSecond}>Profesi</Text>
            </View>
            <View style={styles.button}>
            <Button title="Upload and Continue" type="disabled" />
            <Gap height={30} />
            <Link link="Skip for now" size={16} align="center" onPress={() => navigation.replace("MainApp")}/>
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
