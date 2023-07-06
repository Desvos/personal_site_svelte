import { get } from 'svelte/store'
import { toast } from "./stores/toast"
import { sleep, updateStoreObject } from './js-modules';


async function showToast() {
    updateStoreObject(toast, { show: true });
    await sleep(get(toast).sleepDuration);
    updateStoreObject(toast, { show: false });
}

export function showSuccessToast(message) {
    updateStoreObject(toast, {
        type: "success",
        title: "SUCCESS",
        message: message
    })
    showToast()
}

export function showErrorToast(message) {
    updateStoreObject(toast, {
        type: "error",
        title: "ERROR",
        message: message
    })
    showToast()
}