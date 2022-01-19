import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { color, fonts } from '../../../utils';
import { Hospital1, Hospital2, Hospital3, HospitalNull } from '../../../assets';

const ListHospital = ({type,name,address,pic}) => {

    const Photo = () => {
        switch (pic) {
            case "hospital1":
                return <Image source={Hospital1} style={styles.image} />;
            case "hospital2":
                return <Image source={Hospital2} style={styles.image} />
            case "hospital3":
                return <Image source={Hospital3} style={styles.image} />
            default:
                return <Image source={HospitalNull} style={styles.image} />
        }
    }

    return (
        <View style={styles.page}>
            <Photo />
            <View>
            <Text style={styles.title}>{type}</Text>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.address}>{address}</Text>
            </View>
        </View>
    )
}

export default ListHospital

const styles = StyleSheet.create({
    page: {
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: color.border
    },
    image: {
        width: 80,
        height: 60,
        borderRadius: 11,
        marginRight:16
    },
    title: {
        fontSize: 16,
        fontFamily: fonts.primary.normal,
        color: color.text.primary
    },
    address: {
        fontSize: 12,
        fontFamily: fonts.primary[300],
        color: color.text.secondary,
        marginTop: 6
    }
})
