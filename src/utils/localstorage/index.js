import AsyncStorage from '@react-native-async-storage/async-storage';
import { showError } from '../showmessage';

export const storeData = async (key,data) => {
    try {
        const items = JSON.stringify(data);
        await AsyncStorage.setItem(key,items);
    } catch (error) {
        showError(error.message);
    }
}

export const getData = async (key) => {
    try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
    showError(e.message);
    }
}