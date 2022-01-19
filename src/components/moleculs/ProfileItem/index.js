import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { color, fonts } from '../../../utils'

const ProfileItem = ({label, desc}) => {
    return (
        <View style={styles.page}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.desc}>{desc}</Text>
        </View>
    )
}

export default ProfileItem

const styles = StyleSheet.create({
    page: {
        backgroundColor: color.white,
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: color.border
    },
    label: {
        fontSize: 14,
        fontFamily: fonts.primary.normal,
        color: color.text.secondary,
        marginBottom: 8
    },
    desc: {
        fontSize: 14,
        fontFamily: fonts.primary.normal,
        color: color.text.primary,
    }
})
