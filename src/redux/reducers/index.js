import { combineReducers } from 'redux';
import dataReducer from '@/redux/reducers/userReducer';

const rootReducer = combineReducers({
    user: userReducer
});

export default rootReducer;