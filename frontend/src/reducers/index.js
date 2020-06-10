import { combineReducers } from 'redux';
import servicesReducer from './servicesReducer';
import userReducer from './userReducer'
import authReducer from './authReducer'

const rootReducer = combineReducers({
    user: userReducer,
    authorized: authReducer,
    services: servicesReducer,

    // gigs: gigsReducer,
    // appointments: appointmentsReducer,
    // home: homeReducer
});
 
export default rootReducer