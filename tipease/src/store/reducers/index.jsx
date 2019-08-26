import { combineReducers } from 'redux';

import authReducer from './authReducer';
import tipReducer from './tipReducer';

export default combineReducers({
	authReducer,
    tipReducer
});