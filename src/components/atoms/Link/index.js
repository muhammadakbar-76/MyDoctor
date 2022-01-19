import React from 'react'
import { StyleSheet, Text, TouchableOpacity} from 'react-native'
import { color, fonts } from '../../../utils';

const Link = ({link, size, align, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.text(size, align)}>{link}</Text>
        </TouchableOpacity>
    )
}

export default Link

const styles = StyleSheet.create({
    text: (size, align) => ({
        color: color.text.secondary,
        fontFamily: fonts.primary[200],
        fontSize: size,
        textDecorationLine: 'underline',
        paddingBottom: 10,
        textAlign: align
    })
})
