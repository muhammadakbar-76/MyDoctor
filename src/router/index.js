import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Splash, GetStarted, Register, Login, UploadPhoto, Doctor, Messages, Hospitals, Chatting, ChooseDoctor, UserProfile, UpdateProfile, DoctorProfile,Verify } from "../pages";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomNavigator } from "../components";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

//we can do that with props? wew
const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
            <Tab.Screen name="Doctor" component={Doctor} options={{headerShown: false}}/>
            <Tab.Screen name="Messages" component={Messages} options={{headerShown: false}}/>
            <Tab.Screen name="Hospitals" component={Hospitals} options={{headerShown: false}}/>
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        // there is many props option you can pass to stack navigator, for example initialRouteName
        <Stack.Navigator initialRouteName="SplashScreen"> 
            <Stack.Screen 
            name="Splash" 
            component={Splash}
            options={{headerShown: false}}
            />
            <Stack.Screen 
            name="GetStarted" 
            component={GetStarted}
            options={{headerShown: false}}
            />
            <Stack.Screen 
            name="Register" 
            component={Register} 
            options={{headerShown: false}}
            />
             <Stack.Screen 
            name="UploadPhoto" 
            component={UploadPhoto} 
            options={{headerShown: false}}
            />
             <Stack.Screen 
            name="Login" 
            component={Login} 
            options={{headerShown: false}}
            />
            <Stack.Screen 
            name="MainApp" 
            component={MainApp} 
            options={{headerShown: false}}
            />
            <Stack.Screen
            name="ChooseDoctor"
            component={ChooseDoctor}
            options={{ headerShown: false }}
            />
             <Stack.Screen
            name="Chatting"
            component={Chatting}
            options={{ headerShown: false }}
            />
             <Stack.Screen
            name="UserProfile"
            component={UserProfile}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name="UpdateProfile"
            component={UpdateProfile}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name="DoctorProfile"
            component={DoctorProfile}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name="Verify"
            component={Verify}
            options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default Router;