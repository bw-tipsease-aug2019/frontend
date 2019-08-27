import { combineReducers } from 'redux';

import authReducer from './authReducer';
import tipReducer from './tipReducer';
import workerReducer from './workerReducer';

export default combineReducers({
	authReducer,
    tipReducer,
    workerReducer,
});