import React, {useEffect, useState, useRef} from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { ChatInput, ChatItem, Header } from '../../components';
import { color, fonts, getData, showError } from '../../utils';
import { Keyboard } from 'react-native';
import { database } from '../../config';
import { ref, push, onValue, set } from 'firebase/database';
import { chatDate,chatTime } from '../../utils';


const Chatting = ({navigation,route}) => {

    const scrollView = useRef()

    const dataDoctor = route.params;

    const [message, setMessage] = useState("");

    const [isFocus, setIsFocus] = useState(false);

    const [user, setUser] = useState({});

    const [chatData, setChatData] = useState("");

    function ketik(pesan){
        setMessage(pesan);
        if (pesan.length > 0) {
            setIsFocus(true)
        } else {
            setIsFocus(false)
        }
    }

    function send(){
        const chatId = `${user.userId}_${dataDoctor.data.uid}`;
        const urlChatting = `chatting/${chatId}/allchat/${chatDate()}`;
        const urlMessageUSer = `messages/${user.userId}/${chatId}`;
        const urlMessageDoctor = `messages/${dataDoctor.data.uid}/${chatId}`;
        try {
            Keyboard.dismiss();
            setIsFocus(false);
            if(message !== ""){
                const data = {
                    sendBy: user.userId,
                    chatDate: chatDate(),
                    chatTime: chatTime(),
                    chatContent: message
                }
                push(ref(database,urlChatting),data);
                set(ref(database,urlMessageUSer),{
                    lastContentChat: data.chatContent,
                    lastChatDate: data.chatDate,
                    uidPartner: dataDoctor.data.uid
                });
                set(ref(database,urlMessageDoctor),{
                    lastContentChat: data.chatContent,
                    lastChatDate: data.chatDate,
                    uidPartner: user.userId
                });
            }
            setMessage("");
        } catch (error) {
            showError(error.message);   
        }
    }

    const getDataUserAndChat = () => {
    getData("user")
       .then(res => {
        setUser(res);
        const urlChat = `chatting/${res.userId}_${dataDoctor.data.uid}/allchat/`;
        onValue(ref(database,urlChat), snap => {
            setChatData(snap.val());
        })
       });
    }

    useEffect(() => {
        getDataUserAndChat();
    },[])

    let chatPerDate;
    let chatPerItem;

    return (
        <View style={styles.page}>
            <Header profession={dataDoctor.data.profession} title={dataDoctor.data.fullName} photo={dataDoctor.data.photo} tipe="dark-profile" onPress={() => navigation.goBack()}/>
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false} ref={scrollView} onContentSizeChange={() => scrollView.current.scrollToEnd({ animated: true })}>
                    {
                        (chatData !== "" && chatData !== null) && Object.keys(chatData).map((date,i) => {
                            chatPerDate = chatData[date];
                            return(
                                <View key={i+1}>
                                <Text style={styles.chatDate}>{date}</Text>
                                {
                                    Object.keys(chatPerDate).map(items => {
                                        chatPerItem = chatPerDate[items];
                                        return(
                                            <View key={items}>
                                                <ChatItem
                                                    isMe={chatPerItem.sendBy == user.userId ? true : false}
                                                    message={chatPerItem.chatContent}
                                                    image={chatPerItem.sendBy !== user.userId && dataDoctor.data.photo}
                                                    time={chatPerItem.chatTime}
                                                />
                                            </View>
                                        )
                                    })
                                }
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </View>
            <ChatInput 
            onChangeText={e => ketik(e)} 
            value={message} 
            onPress={() => send()}
            onSubmitEditing={() => send()}
            isFocus={isFocus}
            />
        </View>
    )
}

export default Chatting

const styles = StyleSheet.create({
    page: {
        backgroundColor: color.white,
        flex: 1
    },
    container: {
        backgroundColor: color.white,
        flex: 1
    },
    chatDate: {
        fontSize: 11,
        fontFamily: fonts.primary.normal,
        color: color.text.secondary,
        marginVertical: 20,
        textAlign: "center"
    }
})
