import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { color, fonts } from '../../../utils'
import { TextLoad,TextLoadLong,Loading } from '../../../assets';
import { Gap } from '../../atoms';

const News = ({title,date,pic,loading}) => {
    
    return (
        !loading ?
        <View style={styles.page}>
            <View style={styles.wrapper}>
            <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
            </View>
            <Image source={{ uri: pic }} style={styles.image}/>
            </View>
        </View> :
         <View style={styles.page}>
            <View style={styles.wrapper}>
                <View>
                <Image source={TextLoadLong} style={styles.textLoadLong} />
                <Gap height={5} />
                <Image source={TextLoad} style={styles.textLoad} />
                </View>
                <Image source={Loading} style={styles.loading} />
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
