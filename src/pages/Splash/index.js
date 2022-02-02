import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Logo } from '../../assets'; //penamaan component harus huruf besar, ingat!
import { fire } from '../../config';
import { color,fonts } from '../../utils';

const Splash = ({navigation}) => {
    
  useEffect(() => {
    const auth = getAuth(fire);
    let timer = onAuthStateChanged(auth, user => {
        setTimeout(() => {
          if(user){
            navigation.replace("MainApp");
          } else {
            navigation.replace("GetStarted"); //replace tidak menyimpan history, navigate sebaliknya
          }
        },3000)
      }); // this component somehow and magically still invoked event after unmounted, i think it's due to react native render behavior? i should learn how to use ram bundle, no its not, its because navigation didnt really get rid of pages, instead stack them
    
    return () => timer();
  }, []);

    return (
      <View style={styles.splash}>
        <Logo />
        <Text style={styles.title}>My Doctor</Text>
      </View>
    );
  };
  
  export default Splash;
  
  const styles = StyleSheet.create({
    splash: {
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      backgroundColor: "white"
    },
    title : {
        marginTop: 20,
        fontFamily: fonts.primary[600],
        fontSize: 20,
        color: color.text.primary
    }
  });
