import { combineReducers } from 'redux';
import servicesReducer from './servicesReducer';
import userReducer from './userReducer'
import authReducer from './authReducer'
import clientsReducer from './clientsReducer'
import gigsReducer from './gigsReducer'

const rootReducer = combineReducers({
    user: userReducer,
    authorized: authReducer,
    services: servicesReducer,
    clients: clientsReducer,
    gigs: gigsReducer
    // appointments: appointmentsReducer,
    // home: homeReducer
});
 
export default rootReducer