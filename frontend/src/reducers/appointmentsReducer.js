const initialState = {
    allAppointments:[],
    appointmentsForGig: [], 
    selectedAppointment: [],
    fetching: false, 
    error: false,
}

const appointmentsReducer = (state=initialState, action) => {

    let idx 
    let data 

    switch(action.type){

        case 'FETCH_APPOINTMENTS_REQUEST':
            return {
                ...state,
                fetching: true
            }
        case 'FETCH_APPOINTMENTS_SUCCESS':
            
            return {
                ...state,
                fetching: false, 
                allAppointments: action.appointments
            }    
        case 'FETCH_APPOINTMENTS_FAILURE':
        
            return {
                ...state,
                fetching: false, 
                error: action.error
            } 

// ----------ADD APPOINTMENT-------  *****************************

        case 'POST_APPOINTMENT_REQUEST':
            return {
                ...state,
                fetching: true
            }
        case 'POST_APPOINTMENT_FAILURE':

            return {
                ...state,
                fetching: false, 
                error: action.error
            } 
        case 'POST_APPOINTMENT_SUCCESS':
        
            return {
                ...state,
                fetching: false, 
                allAppointments: [...state.allAppointments, action.appointment],
                appointmentsForService: [...state.appointmentsForGig, action.appointment]
            } 
            
// ----------PATCH APPOINTMENT-------  *****************************

        case 'PATCH_APPOINTMENT_REQUEST':
            return {
                ...state,
                fetching: true
            }
        case 'PATCH_APPOINTMENT_FAILURE':

            return {
                ...state,
                fetching: false, 
                error: action.error
            } 
        case 'PATCH_APPOINTMENT_SUCCESS':
            // const newallAppointments = [state.allAppointments.filter(gig => gig.id != action.gigId)]
            idx = state.allAppointments.findIndex(appointment => appointment.id === action.appointment.id)
            
            return {
                ...state,
                fetching: false, 
                allAppointments: [...[...state.allAppointments.filter(appointment => appointment.id != action.appointment.id)], action.appointment]
            } 

// ----------DELETE APPOINTMENT-------  *****************************

        case 'DELETE_APPOINTMENT_REQUEST':
            return {
                ...state,
                fetching: true
            }
        case 'DELETE_APPOINTMENT_FAILURE':

            return {
                ...state,
                fetching: false, 
                error: action.error
            } 
        case 'DELETE_APPOINTMENT_SUCCESS':
        
            return {
                ...state,
                fetching: false, 
                allAppointments: state.allAppointments.filter(appt => appt.id != action.appointmentId)
            } 

// ----------SET appointmentS FOR SERVICE-------  *****************************

        case 'SET_GIG_FOR_VIEW':
            console.log('in set appointments for gig',action.gig)
            return {
                ...state,
                appointmentsForGig: action.gig.appointments
            }

        case 'SET_APPOINTMENT_FOR_VIEW':
            return {
                ...state,
                selectedAppointment: action.appointment
            }

        default:
            return state
    }

}

export default appointmentsReducer