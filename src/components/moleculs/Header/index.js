import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import DarkProfile  from '../DarkProfile';
import {Button,Gap} from '../../atoms'
import { color,fonts } from '../../../utils';

const Header = ({title,onPress,tipe}) => {
    if (tipe === "dark-profile") {
        return(
            <View>
                <DarkProfile title={title} onPress={onPress}/>
            </View>
        )
    }
    return (
        <View style={styles.container(tipe)}>
            <Button icon={tipe === "secondary" ? "ArrowBackLight" : "ArrowBackDark"} onPress={onPress} type="icon-only"/>
            <Text style={styles.item(tipe)}>{title}</Text>
            <Gap width={24} />
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container: (tipe) => ({
        flexDirection: "row",
        paddingHorizontal: 16,
        paddingVertical: 30,
        backgroundColor: tipe === "secondary" ? color.secondary : color.white,
        alignItems: "center",
        borderBottomLeftRadius: tipe === "secondary" ? 20 : 0,
        borderBottomRightRadius: tipe === "secondary" ? 20 : 0,
    }),
    item: (tipe) => ({
        flex: 1,
        textAlign: "center",
        fontFamily: fonts.primary[600],
        fontSize: 20,
        color: tipe === "secondary" ? color.white : color.text.primary
    })
})
