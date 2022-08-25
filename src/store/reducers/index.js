import { combineReducers } from 'redux';

import AuthReducer from 'store/reducers/authReducer';
import ThemeReducer from 'store/reducers/themeReducer'

const rootReducer = combineReducers({
    auth: AuthReducer,
    theme: ThemeReducer,
})

export default rootReducer;