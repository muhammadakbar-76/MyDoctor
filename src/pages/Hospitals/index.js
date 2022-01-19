import React from 'react'
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import { BgHospital, Hospital1, Hospital2, Hospital3 } from '../../assets'
import { ListHospital } from '../../components'
import { color, fonts } from '../../utils'

const Hospitals = () => {
    return (
        <View style={styles.page}>
            <ImageBackground source={BgHospital} style={styles.background}>
            <Text style={styles.title}>Nearby Hospital</Text>
            <Text style={styles.subTitle}>3 Tersedia</Text>
            </ImageBackground>
            <View style={styles.content}>
            <ListHospital type="Rumah Sakit Jiwa" name="Sambang Lihum" address="Jln.orgil no 69" pic="hospital1"/>
            <ListHospital type="Rumah Sakit Anjay" name="Anjayani" address="Jln.orgil no 69" pic="hospital2"/>
            <ListHospital type="Rumah Sakit Biasa" name="Biasa" address="Jln.orgil no 69" pic="hospital3"/>
            </View>
        </View>
    )
}

export default Hospitals

const styles = StyleSheet.create({
    page: {
        backgroundColor: color.secondary,
        flex: 1
    },
    background: {
        height: 240,
        paddingTop: 30,
    },
    title: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: color.white,
        textAlign: "center"
    },
    subTitle: {
        fontSize: 14,
        fontFamily: fonts.primary[300],
        color: color.white,
        marginTop: 6,
        textAlign: "center"
    },
    content: {
        backgroundColor: color.white,
        flex: 1,
        borderRadius: 20,
        marginTop: -30
    },
    scroll: {
        
    }
})
