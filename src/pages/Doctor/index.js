import React from 'react'
import { StyleSheet, Text, ScrollView, View } from 'react-native'
import { Categories, Gap, HomeProfile, News, TopDoctors } from '../../components';
import { color, fonts } from '../../utils';

const Doctor = ({navigation}) => {
    return (
        <View style={styles.page}>
            <View style={styles.content}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <Gap height={30} />
            <View style={styles.paddong} >
            <HomeProfile name="Muhammad Akbar" profession="Programmer" onPress={() => navigation.navigate("UserProfile")}/>
            </View>
            <Text style={styles.welcome}>Mau konsultasi dengan siapa hari ini?</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.categories}>
            <Categories category="Dokter Umum" pic="Spidol" onPress={() => navigation.navigate("ChooseDoctor")}/>
            <Categories category="Psikiater" pic="Heart" onPress={() => navigation.navigate("ChooseDoctor")}/>
            <Categories category="Dokter Obat" pic="Bottle" onPress={() => navigation.navigate("ChooseDoctor")}/>
            <Categories category="Dokter Anak" pic="HandHeart" onPress={() => navigation.navigate("ChooseDoctor")}/>
            </View>
            </ScrollView>
            <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
            <TopDoctors name="Muhammad Akbar" pic="Doc1" kind="Dokter Gadungan" rate={5} onPress={() => navigation.navigate("DoctorProfile")}/>
            <Gap height={16} />
            <TopDoctors name="Muhammad Udin" pic="Doc2" kind="Dokter Gadungan" rate={5} onPress={() => navigation.navigate("DoctorProfile")}/>
            <Gap height={16} />
            <TopDoctors name="Carl Johnson" pic="Doc3" kind="Dokter Busta" rate={3} onPress={() => navigation.navigate("DoctorProfile")}/>
            <Text style={styles.sectionLabel}>News & Articles</Text>
            <News title="Is it okay to be millionaire?" date="27-10-2021" pic="Building" />
            <News title="Is it okay to be millionaire?" date="27-10-2021" pic="Oranges" />
            <News title="Is it okay to be millionaire?" date="27-10-2021" pic="OrangesFull" />
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
        marginTop: 30,
        marginBottom: 16,
        paddingHorizontal: 16
    },
    paddong: {
        paddingHorizontal: 16
    }
})
