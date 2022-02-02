import { showMessage } from "react-native-flash-message"
import {color} from '../colors';

export const showError = message => {
    showMessage({
        message,
        type: "default",
        backgroundColor: color.error,
        color: color.white
    })
}

export const showSuccess = message => {
    showMessage({
        message,
        type: "default",
        backgroundColor: color.primary,
        color: color.white
    })
}