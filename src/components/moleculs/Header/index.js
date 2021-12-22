import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Button, Gap} from '../..';
import { color } from '../../../utils';

const Header = ({title,onPress}) => {
    return (
        <View style={styles.container}>
            <Button icon="ArrowBackDark" onPress={onPress} type="icon-only"/>
            <Text style={styles.item}>{title}</Text>
            <Gap width={24} />
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingHorizontal: 16,
        paddingVertical: 30,
        backgroundColor: color.white,
        alignItems: "center"
    },
    item: {
        flex: 1,
        textAlign: "center",
        fontFamily: "Nunito_SemiBold",
        fontSize: 20,
        color: color.text.primary
    }
})
