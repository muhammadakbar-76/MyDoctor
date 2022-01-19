import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { color, fonts } from '../../../utils'
import { Account, BracketRightDark, Description, Doc1,Doc2,Doc3, StarIC, Translate } from '../../../assets'

const Chats = ({pic, name, lastChat, tipe, key = 1, onPress}) => {
    const Pic = () => {
        switch (pic) {
            case "Doc1":
                return <Image source={Doc1} style={styles.image} />
             case "Doc2":
                return <Image source={Doc2} style={styles.image} />
             case "Doc3":
                return <Image source={Doc3} style={styles.image} />
            case "account":
                return <Account style={styles.image}/>
            case "star":
                return <StarIC style={styles.image}/>
            case "desc":
                return <Description style={styles.image}/>
            case "translate":
                return <Translate style={styles.image}/>
            default:
                break;
        }
    }
    return (
        <TouchableOpacity key={key} style={styles.page} onPress={onPress}>
            <Pic />
            <View style={styles.container}>
                <View>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.lastChat}>{lastChat}</Text>
                </View>
                {
                    tipe === "list" && <BracketRightDark />
                }
            </View>
        </TouchableOpacity>
    )
}

export default Chats

const styles = StyleSheet.create({
    page: {
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
        borderBottomWidth: 1, //bisa 100% karena tidak terpengaruh parent component
        borderColor: color.border
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        flex: 1,
        alignItems: "center"
    },
    image: {
        height: 46,
        width: 46,
        borderRadius: 46/2,
        marginRight: 12
    },
    name: {
        fontSize: 16,
        fontFamily: fonts.primary.normal,
        color: color.text.primary
    },
    lastChat: {
        fontSize: 12,
        fontFamily: fonts.primary[300],
        color: color.text.secondary 
    }
})
