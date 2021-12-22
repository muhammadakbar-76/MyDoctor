import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Logo } from '../../assets'; //penamaan component harus huruf besar, ingat!

const Splash = ({navigation}) => {
  
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("GetStarted"); //replace tidak menyimpan history, navigate sebaliknya
    },3000);
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
        fontFamily: "Nunito_SemiBold",
        fontSize: 20,
        color: "#112340"
    }
  });
