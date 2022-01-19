import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Doc1,Doc2,Doc3,Star } from '../../../assets'
import { color, fonts } from '../../../utils'

const TopDoctors = ({name,pic,kind,rate,onPress}) => {
    
    const Photo = () => {
        switch (pic) {
            case "Doc1":
                return <Image source={Doc1} style={styles.image}/>
            case "Doc2":
                return <Image source={Doc2} style={styles.image}/>
            case "Doc3":
                return <Image source={Doc3} style={styles.image}/>
            default:
                break;
        }
    }

    const star = [];

    for (let i = 0; i < rate; i++) {
        star.push(<Star />);
    }

    return (
        <TouchableOpacity style={styles.page} onPress={onPress}>
            <View style={styles.rate}>
            <Photo />
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
        </TouchableOpacity>
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
        flexDirection: "row"
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
        marginTop: 2
    }
})
