import React from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import { ArrowBackDark, ArrowBackLight } from '../../../assets'

const IconOnly = ({onPress, icon}) => {

    const Icon = () => {
       if (icon === "ArrowBackDark") {
           return(
            <Image source={ArrowBackDark} />
           )
       }
       else if(icon === "ArrowBackLight") {
           return <ArrowBackLight />
       }
    }

    return (
        <TouchableOpacity onPress={onPress}>
           <Icon />
        </TouchableOpacity>
    )
}

export default IconOnly;

const styles = StyleSheet.create({})
