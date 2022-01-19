import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import Gap from '../Gap'
import { DoctorIc, DoctorIcActive, HospitalIc, HospitalIcActive, MessageIc, MessageIcActive } from '../../../assets'
import { color, fonts } from '../../../utils'

const TabItem = ({label, active, onPress, onLongPress}) => {
    const Icon = () => {
        switch (label) {
            case "Doctor":
                return !active ? <DoctorIc /> : <DoctorIcActive />
            case "Messages":
                return !active ? <MessageIc /> : <MessageIcActive />
            case "Hospitals":
                return !active ? <HospitalIc /> : <HospitalIcActive />
            default:
               return <DoctorIc />
        }
    }
    return (
        <TouchableOpacity style={styles.page} onPress={onPress} onLongPress={onLongPress}>
            <Icon />
            <Gap height={4} />
            <Text style={styles.text(active)}>{label}</Text>
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    page: {
        alignItems: "center"
    },
    text: (active) => ({
        fontFamily: fonts.primary[600],
        fontSize: 10,
        color: active ? color.text.menuActive : color.text.menuInactive
    })
})
