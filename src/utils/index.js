import { toast } from "react-toastify";
import { toastOptions } from "./toastConfig";

export const initializeLocalStorage = (key, defaultData) => {
    const localData = window.localStorage.getItem(key);
    const initialData = localData ? JSON.parse(localData) : defaultData;
    if (!localData) {
        window.localStorage.setItem(key, JSON.stringify(initialData));
    }

    return { initialData };
}

export const saveFlowToLocalStorage = (key, data) => {
    window.localStorage.setItem(key, JSON.stringify(data));
};

export const displayToast = (message, type) => {
    toast[type](message, toastOptions);
};