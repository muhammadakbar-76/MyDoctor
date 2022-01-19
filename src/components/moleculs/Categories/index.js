import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Gap } from '../../atoms/';
import { Spidol, Heart, HandHeart, Bottle } from '../../../assets';
import { color, fonts } from '../../../utils';

const Categories = ({category,pic,onPress}) => {
    const Icon = () => {
        switch (pic) {
            case "Spidol":
                return <Spidol />;
            case "Bottle":
                return <Bottle />;
            case "Heart":
                return <Heart />;
            case "HandHeart":
                return <HandHeart />;
            default:
                break;
        }
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
            <Icon />
            <Gap height={28} />
            <Text style={styles.label}>Saya butuh</Text>
            <Text style={styles.category}>{category}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        padding: 12,
        backgroundColor: color.cardLight,
        borderRadius: 10,
        marginRight: 10,
        width: 100,
        height: 130
    },
    label: {
        fontSize: 12,
        fontFamily: fonts.primary[300],
        color: color.text.primary
    },
    category:{
        fontSize: 12,
        fontFamily: fonts.primary[600],
        color: color.text.primary
    }
})
