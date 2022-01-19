import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Building, Oranges, OrangesFull } from '../../../assets'
import { color, fonts } from '../../../utils'

const News = ({title,date,pic}) => {
    const Icon = () => {
        switch (pic) {
            case "Building":
                return <Image source={Building} style={styles.image}/>
            case "Oranges":
                return <Image source={Oranges} style={styles.image}/>
            case "OrangesFull":
                return <Image source={OrangesFull} style={styles.image}/>
            default:
                break;
        }
    }
    return (
        <View style={styles.page}>
            <View style={styles.wrapper}>
            <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
            </View>
            <Icon />
            </View>
        </View>
    )
}

export default News

const styles = StyleSheet.create({
    page: {
        borderBottomWidth: 1,
        borderBottomColor: color.border,
        paddingVertical: 12,
    },
    title: {
        fontFamily: fonts.primary[600],
        fontSize: 16,
        color: color.text.primary,
        maxWidth: 250
    },
    date: {
        marginTop: 4,
        fontSize: 12,
        fontFamily: fonts.primary.normal,
        color: color.text.secondary
    },
    image: {
        height: 60,
        width: 80,
        borderRadius: 11
    },
    wrapper: {
        paddingHorizontal: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }
})
