import { combineReducers } from 'redux';
import dataReducer from '@/redux/reducers/dataReducer';

const rootReducer = combineReducers({
    data: dataReducer
});

export default rootReducer;