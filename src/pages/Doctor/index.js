import { get, ref, query, orderByChild, limitToLast } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, ScrollView, View } from 'react-native'
import { Categories, Gap, HomeProfile, News, TopDoctors } from '../../components';
import { database } from '../../config';
import { color, fonts, parseToArray, showError } from '../../utils';

const Doctor = ({navigation}) => {

    const [news, setNews] = useState([]);
    const [categories, setCategories] = useState([]);
    const [topRated, setTopRated] = useState([]);

    const getDatabase = async (source, set, order) => {
        try {
            let res;
            if(order !== undefined){
                const que = query(ref(database,source), orderByChild("rate"), limitToLast(3));
                const result = await get(que);
                res = parseToArray(result.val());
            } else {
                res = await get(ref(database,source));
            } 
            set((order !== undefined ? res : res.val()))//DataSanpShot.val() disini punya firebase
        } catch (error) {
            showError(error.message);
        }
    }

    useEffect(() => {
        getDatabase("news/",setNews);
        getDatabase("doctor_categories/",setCategories);
        getDatabase("doctors/",setTopRated,"rate");
    },[]);

    return (
        <View style={styles.page}>
            <View style={styles.content}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <Gap height={30} />
            <View style={styles.paddong} >
            <HomeProfile onPress={() => navigation.navigate("UserProfile")}/>
            </View>
            <Text style={styles.welcome}>Mau konsultasi dengan siapa hari ini?</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.categories}>
            {
               categories.length > 0 ? categories.map(item => {
                    return(
                        <Categories key={item.id} category={item.name} pic={item.image} onPress={() => navigation.navigate("ChooseDoctor", item)}/>
                    )
                }) :
                <Categories pic="loading" loading />
            }
            </View>
            </ScrollView>
            <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
            {
                categories.length > 0 ? topRated.map(item => {
                    return(
                        <View key={item.id} >
                        <TopDoctors name={item.data.fullName} pic={item.data.photo} kind={item.data.category} rate={item.data.rate} onPress={() => navigation.navigate("DoctorProfile",item)}/>
                        <Gap height={16}/>
                        </View>
                    )
                }) :
                <TopDoctors loading />
            }
            <Text style={styles.sectionLabel}>News & Articles</Text>
            {
                 news.length > 0 ? news.map(item => {
                    return(
                        <News key={item.id} title={item.title} date={item.date} pic={item.image} />
                    )
                }) :
                <News loading />
            }
            <Gap height={30} />
            </ScrollView>
        </View>
        </View>
    )
}

export default Doctor;

const styles = StyleSheet.create({
    page: {
        backgroundColor: color.secondary,
        flex: 1
    },
    welcome: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: color.text.primary,
        marginTop: 30,
        marginBottom: 16,
        maxWidth: 209,
        paddingHorizontal: 16
    },
    categories: {
        flexDirection: "row",
        alignItems: "flex-start",
        paddingLeft: 16,
        paddingRight: 6
    },
    content: {
        backgroundColor: color.white,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    sectionLabel: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: color.text.primary,
        marginTop: 14,
        marginBottom: 16,
        paddingHorizontal: 16
    },
    paddong: {
        paddingHorizontal: 16
    }
})
