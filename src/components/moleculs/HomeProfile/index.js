import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Gap } from '../../atoms/';
import { PersonDummy } from '../../../assets';
import { color, fonts } from '../../../utils';

const HomeProfile = ({name, profession, onPress}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={PersonDummy} style={styles.image}/>
            <Gap width={12} />
            <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.profession}>{profession}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default HomeProfile;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center"
    },
    image: {
        width: 46,
        height: 46,
        borderRadius: 46/2
    },
    name: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: color.text.primary
    },
    profession: {
        fontSize: 12,
        fontFamily: fonts.primary[400],
        color: color.text.secondary
    }
})
