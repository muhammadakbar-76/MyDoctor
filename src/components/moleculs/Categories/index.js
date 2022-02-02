import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { Gap } from '../../atoms/';
import { Spidol, Heart, HandHeart, Bottle, Loading, TextLoad } from '../../../assets';
import { color, fonts } from '../../../utils';

const Categories = ({category,pic,onPress,loading}) => {
    const Icon = () => {
        switch (pic) {
            case "Spidol":
            case "Bedah" :
                return <Spidol />;
            case "Bottle":
                return <Bottle />;
            case "Heart":
                return <Heart />;
            case "HandHeart":
                return <HandHeart />;
            case "loading":
                return <Image source={Loading} style={styles.loading} />
            default:
                break;
        }
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
            <Icon />
            <Gap height={28} />
           { !loading ?
           <>
           <Text style={styles.label}>Saya Butuh</Text>
            <Text style={styles.category}>{category}</Text>
           </> :
           <>
           <Image source={TextLoad} style={styles.textLoad} />
           <Image source={TextLoad} style={styles.textLoad} />
           </>
           }
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
        color: color.text.primary,
        textTransform: "capitalize"
    },
    loading: {
        height: 46,
        width: 46
    },
    textLoad: {
        height: 8,
        width: 50
    }
})
