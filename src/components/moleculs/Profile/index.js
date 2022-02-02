import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { BtnClose, ICFemale, ICMale, Null } from '../../../assets'
import { color, fonts } from '../../../utils'

const Profile = ({name,profession,edit,image,onPress}) => {

    const Icon = () => {
        switch (edit) {
            case "change":
                return(
                <TouchableOpacity style={styles.icon} onPress={onPress}>
                    <BtnClose />
                </TouchableOpacity>
                ) 
            case "female":
                return <ICFemale style={styles.icon}/>
            case "male":
                return <ICMale style={styles.icon} />
            default:
                break;
        }
    }

    return (
        <View style={styles.page}>
            <View style={styles.borderProfile}>
                <Image source={image === "null" ? Null : { uri: image }} style={styles.image} />
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
        marginTop: 2,
        textTransform: "capitalize"
    },
    icon: {
        position: "absolute",
        bottom: 8,
        right: 8
    }
})
