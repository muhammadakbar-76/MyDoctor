import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ArrowBackDark } from '../../../assets'

const iconOnly = ({onPress, icon}) => {

    const Icon = () => {
       if (icon === "ArrowBackDark") {
           return(
            <Image source={ArrowBackDark} />
           )
       }
    }

    return (
        <TouchableOpacity onPress={onPress}>
           <Icon />
        </TouchableOpacity>
    )
}

export default iconOnly;

const styles = StyleSheet.create({})
