import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Chats} from '../../components'
import { color, fonts, getData, parseToArray } from '../../utils'
import { get, onValue, ref } from 'firebase/database';
import { database } from '../../config';


const Messages = ({navigation}) => {

    const [history, setHistory] = useState([]);

    const getHistoryChat = async () => {
        const user = await getData("user");
        onValue(ref(database,`messages/${user.userId}`), async snap => {
           if(snap.val()){
               const datai = [];
               const promise = await parseToArray(snap.val()).map(async item => {
                   const doctor = await get(ref(database,`doctors/${item.data.uidPartner}/`));
                    datai.push({
                     id: item.id,
                     lastChat: item.data.lastContentChat,
                     data: doctor.val()
                    })
               }
               );
               await Promise.all(promise); // jika ada promise bercabang(dalam usecase ini map dari parseToArray juga async) di dalam function promise, maka gunakan fungsi ini
               console.log(datai);
               setHistory(datai);
           }
        })
    }

    useEffect(() => {
       getHistoryChat();
    },[])

    return (
        <View style={styles.page}>
            <View style={styles.container}>
            <Text style={styles.title}>Messages</Text>
            {
            history.map((his,i) => {
               return(
                <View key={his.id}>
                    <Chats name={his.data.fullName} pic={his.data.photo} lastChat={his.lastChat} onPress={() => navigation.navigate("Chatting",history[i])}/>
                </View>
               ) 
            })
            }
            </View>
        </View>
    )
}

export default Messages

const styles = StyleSheet.create({
    page: {
        backgroundColor: color.secondary,
        flex: 1
    },
    container: {
        backgroundColor: color.white,
        flex: 1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,

    },
    title: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: color.text.primary,
        marginTop: 30,
        marginLeft: 16
    }
})
