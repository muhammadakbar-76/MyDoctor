import { equalTo, get, orderByChild, query, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Chats, Header } from '../../components'
import { database } from '../../config'
import { color, parseToArray, showError } from '../../utils'

const ChooseDoctor = ({navigation, route}) => {
    const itemCategory = route.params;

    const [listDoctor, setListDoctor] = useState([]);

    const callDoctorByCategory = async category => {
        try {
            const value = query(ref(database,'doctors/'),orderByChild("category"),equalTo(category));
            const result = await get(value);
            setListDoctor(parseToArray(result.val()));
        } catch (error) {
            showError(error.message);
        }
    }

    useEffect(() => {
        callDoctorByCategory(itemCategory.name);
    },[]);

    return (
        <View style={styles.page}>
        <Header title={`Pilih ${itemCategory.name}`} tipe="secondary" onPress={() => navigation.goBack()}/>
        <View style={styles.container}>
            {
                listDoctor.map(item => {
                    return(
                        <View key={item.id}>
                            <Chats name={item.data.fullName} lastChat={item.data.gender} pic={item.data.photo} tipe="list" onPress={() => navigation.navigate("DoctorProfile",item)}/>
                        </View>
                    )
                })
            }
        </View>
        </View>
    )
}

export default ChooseDoctor

const styles = StyleSheet.create({
    page: {
        backgroundColor: color.white,
        flex: 1
    },
    container: {
        backgroundColor: color.white,
        flex: 1
    }
})
