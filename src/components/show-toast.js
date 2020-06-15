import { ToastAndroid } from 'react-native';

export const ShowToast = () => {
    ToastAndroid.show("End of list!",
        ToastAndroid.SHORT
    );
};