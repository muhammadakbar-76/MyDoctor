import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { database, fire } from '../../config';
import { ref, set } from 'firebase/database';
import { color, fonts, showError, showSuccess, storeData } from '../../utils';
import { useDispatch } from 'react-redux';
import { VerifyPic } from '../../assets';
import { ChatInput, Header } from '../../components';
import RNSmtpMailer from 'react-native-smtp-mailer';
import {PW} from '@env';

let code;

const Verify = ({navigation, route}) => {

    const data = route.params;

    const [resend, setResend] = useState(false);

    const [isend, setIsend] = useState(false);

    const [verifCode, setVerifCode] = useState("");

    const [isFocus, setIsFocus] = useState(false);

    const dispatch = useDispatch();

    const setLoading = val => {
        dispatch({
            type: "SET_LOADING",
            value: val
        });    
    }

    const regAccount = () => {
        setLoading(true);
        if(verifCode != code){
            setLoading(false);
            return showError("Kode Verifikasi Salah");
        }
        const auth = getAuth(fire);
            createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                setLoading(false);
                const items = {
                    fullname: data.fullname,
                    job: data.job,
                    email: data.email,
                    userId: userCredential.user.uid,
                    photo: "null"
                }
                set(ref(database, "users/" + userCredential.user.uid + "/"),items);
                storeData("user",items);
                showSuccess("Register Completed");
                setTimeout(() => {
                    navigation.replace("UploadPhoto",items);
                },1000)
            })
            .catch((error) => {
                setLoading(false);
                showError(error.message)
            });
    }

    const sendEmailVerif = async () => {
        try {
            code = Math.floor(100000 + Math.random() * 900000);
            const result = await RNSmtpMailer.sendMail({
                mailhost: "smtp.gmail.com",
                port: "465",
                ssl: true,
                username: "akbarblack0star@gmail.com",
                password: PW,
                fromName: "MyDoctor Team",
                recipients: data.email,
                subject: "Email Verification Code",
                htmlBody: `Hello ${data.fullname},<br><br>Kode verifikasi emailmu adalah ${code}.<br><br>Segera masukan kode tersebut ke dalam aplikasi mydoctor untuk melanjutkan proses pendaftaran akun. Terima kasih<br><br>Salam,<br>MyDoctor Team`
            });
        } catch (error) {
            showError(JSON.stringify(error));
        }
    }
    
    const ketik = pesan => {
        setVerifCode(pesan);
        if (pesan.length > 0) {
            setIsFocus(true)
        } else {
            setIsFocus(false)
        }
    }

    const resendEmail = () => {
        setResend(false);
        setIsend(isend => !isend);
    }

    useEffect(() => {
        setTimeout(() => {
            setResend(true);
        },30000)
    },[resend])

    useEffect(() => {
        sendEmailVerif();
    },[isend]);

  return (
      <View style={styles.container}>
        <Header title="Verification" onPress={() => navigation.goBack()} />
        <View style={styles.page}>
        <Image source={VerifyPic} style={styles.image} />
        <Text style={styles.text}>Masukan kode verifikasi yang kami kirimkan ke email anda</Text>
        <ChatInput
        isFocus={isFocus}
        value={verifCode} 
        onChangeText={e => ketik(e)}
        onPress={() => regAccount()}
        onSubmitEditing={() => regAccount()}
        />
        {
            resend ?  
            <TouchableOpacity onPress={() => resendEmail()}>
                <Text style={styles.link(true)}>Kirim ulang email</Text>
            </TouchableOpacity> : 
            <View>
                <Text style={styles.link(false)}>Kirim ulang email</Text>
            </View>
        }
        </View>
        </View>
  );
};

export default Verify;

const styles = StyleSheet.create({
    page: {
        backgroundColor: color.white,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 30
    },
    image: {
        height: 220,
        width: 220
    },
    text: {
        fontFamily: fonts.primary[600],
        fontSize: 16,
        textAlign: "center",
        marginTop: 10,
        marginBottom: 10
    },
    link: set => ({
        color: set ? color.text.primary : color.text.secondary,
        fontFamily: fonts.primary[200],
        fontSize: 14,
        textDecorationLine: 'underline',
        paddingBottom: 10
    }),
    container: {
        flex: 1
    }
});
