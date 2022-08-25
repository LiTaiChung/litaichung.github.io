import {
    DARK_MODE,
} from 'store/action-types/theme';

export function updateDarkMode(payload) {
    return {
        type: DARK_MODE,
        payload
    }
}