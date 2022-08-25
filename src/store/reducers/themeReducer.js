import { DARK_MODE } from "store/action-types/theme";

const initialState = {
    darkMode: false,
};

export default function darkModeReducer(state = initialState, {type, payload = null}) {
    switch (type) {
        case DARK_MODE:
            return {
                ...state,
                darkMode: payload,
            };
        default:
            return state;
    }
};
