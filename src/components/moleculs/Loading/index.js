import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { color, fonts } from '../../../utils';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Loading = () => {
  return (
    <View style={styles.page}>
        <ActivityIndicator size="large" color={color.primary}/>
      <Text style={styles.text}>Loading</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        position: "absolute",
        backgroundColor: color.loadingBackground,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 18,
        color: color.primary,
        fontFamily: fonts.primary[600],
        marginTop: 16
    }
});
