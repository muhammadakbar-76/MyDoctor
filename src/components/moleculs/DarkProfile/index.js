import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { color,fonts } from '../../../utils'
import {Button,Gap} from '../../atoms'
import { Doc1 } from '../../../assets'

const DarkProfile = ({onPress, title}) => {
    const Pic = () => {
        return <Image source={Doc1} style={styles.image}/>
    }
    return (
        <View style={styles.page}>
            <Button icon="ArrowBackLight" onPress={onPress} type="icon-only"/>
            <View style={styles.container}>
                <View style={styles.name}>
                <Text style={styles.item}>{title}</Text>
                <Text style={styles.profesi}>Dokter Cinta</Text>
                </View>
                <Pic />
            </View>
            <Gap width={24} />
        </View>
    )
}

export default DarkProfile

const styles = StyleSheet.create({
    page: {
        flexDirection: "row",
        paddingRight: 16,
        paddingLeft: 20,
        paddingVertical: 30,
        backgroundColor: color.secondary,
        alignItems: "center",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    item: {
        textAlign: "center",
        fontFamily: fonts.primary[600],
        fontSize: 20,
        color: color.white
    },
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    },
    name: {
        flex: 1
    },
    profesi: {
        textAlign: "center",
        color: color.profesi,
        fontSize: 14,
        marginTop: 6,
        fontFamily: fonts.primary.normal
    },
    image: {
        height: 46,
        width: 46,
        borderRadius: 46/2
    }
})
