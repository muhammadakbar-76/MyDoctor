import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { BtnClose, ICFemale, Person } from '../../../assets'
import { color, fonts } from '../../../utils'

const Profile = ({name,profession,edit}) => {

    const Icon = () => {
        switch (edit) {
            case "change":
                return <BtnClose style={styles.icon}/>
            case "female":
                return <ICFemale style={styles.icon}/>
            default:
                break;
        }
    }

    return (
        <View style={styles.page}>
            <View style={styles.borderProfile}>
                <Image source={Person} style={styles.image} />
                {
                    edit && <Icon />
                }
            </View>
            {
                name &&
                profession &&
                <>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.profession}>{profession}</Text>
                </>
            }
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    page: {
        alignItems: "center"
    },
    image: {
        height: 110,
        width: 110,
        borderRadius: 110/2
    },
    borderProfile: {
        width: 130,
        height: 130,
        borderRadius: 130/2,
        justifyContent: "center",
        alignItems: "center"
    },
    name: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: color.text.primary,
        marginTop: 16
    },
    profession: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: color.text.secondary,
        marginTop: 2
    },
    icon: {
        position: "absolute",
        bottom: 8,
        right: 8
    }
})
