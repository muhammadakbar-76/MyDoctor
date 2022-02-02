import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Star, Loading, TextLoadLong, TextLoad } from '../../../assets'
import { Gap } from '../../atoms/'
import { color, fonts } from '../../../utils'

const TopDoctors = ({name,pic,kind,rate,onPress,loading}) => {

    const star = [];

    for (let i = 0; i < rate; i++) {
        star.push(<Star />);
    }

    return (
        !loading ?
        <TouchableOpacity style={styles.page} onPress={onPress}>
            <View style={styles.list}>
            <Image source={{ uri: pic }} style={styles.image} />
            <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.category}>{kind}</Text>
            </View>
            </View>
            <View style={styles.rate}>
            {
                star.map((item,i) => {
                    return (
                        <View key={i+1}>
                            {item}
                        </View>
                    )
                })
            }
            </View>
        </TouchableOpacity> :
        <View style={styles.page}>
            <View style={styles.list}>
                <Image source={Loading} style={styles.loading} />
                <View>
                    <Image source={TextLoadLong} style={styles.textLoadLong} />
                    <Gap height={5} />
                    <Image source={TextLoad} style={styles.textLoad} />
                </View>
            </View>
        </View>
    )
}

export default TopDoctors

const styles = StyleSheet.create({
    page: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50/2,
        marginRight: 12
    },
    rate: {
        flexDirection: "row",
        width: "25%"
    },
    list:{
        flexDirection: "row",
        alignItems: "center"
    },
    name: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: color.text.primary
    },
    category: {
        fontSize: 12,
        fontFamily: fonts.primary.normal,
        color: color.text.secondary,
        marginTop: 2,
        textTransform: "capitalize"
    },
    loading: {
        height: 46,
        width: 46,
        paddingRight: 10
    },
    textLoad: {
        height: 8,
        width: 50
    },
    textLoadLong: {
        height: 12,
        width: 120,
    }
})
