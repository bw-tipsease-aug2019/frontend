import { combineReducers } from 'redux';

import authReducer from './authReducer';
import renameReducer from './renameReducer';

export default combineReducers({
	authReducer,
    renameReducer
});