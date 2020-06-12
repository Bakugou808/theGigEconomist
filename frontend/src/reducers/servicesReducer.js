
const initialState = {
    data: [],
    fetching: false,
    error: false,
    selectedGigs: [],
    selectedAppointments:[]
}

const servicesReducer = (state=initialState, action) => {
    let idx 
    let data 

    switch(action.type){

        case 'FETCH_SERVICES_REQUEST':
            return {
                ...state,
                fetching: true
            }
        case 'FETCH_SERVICES_SUCCESS':
            
            return {
                ...state,
                fetching: false, 
                data: action.services
            }    
        case 'FETCH_SERVICES_FAILURE':
        
            return {
                ...state,
                fetching: false, 
                error: action.error
            } 

// ----------ADD SERVICE-------  *****************************

        case 'POST_SERVICE_REQUEST':
            return {
                ...state,
                fetching: true
            }
        case 'POST_SERVICE_FAILURE':

            return {
                ...state,
                fetching: false, 
                error: action.error
            } 
        case 'POST_SERVICE_SUCCESS':
        
            return {
                ...state,
                fetching: false, 
                data: [...state.data, action.service]
            } 
            
// ----------PATCH SERVICE-------  *****************************

        case 'PATCH_SERVICE_REQUEST':
            return {
                ...state,
                fetching: true
            }
        case 'PATCH_SERVICE_FAILURE':

            return {
                ...state,
                fetching: false, 
                error: action.error
            } 
        case 'PATCH_SERVICE_SUCCESS':
            // const newData = [state.data.filter(service => service.id != action.serviceId)]
            idx = state.data.findIndex(service => service.id === action.service.id)
            
            return {
                ...state,
                fetching: false, 
                data: [...[...state.data.filter(service => service.id != action.service.id)], action.service]
            } 

// ----------DELETE SERVICE-------  *****************************

        case 'DELETE_SERVICE_REQUEST':
            return {
                ...state,
                fetching: true
            }
        case 'DELETE_SERVICE_FAILURE':

            return {
                ...state,
                fetching: false, 
                error: action.error
            } 
        case 'DELETE_SERVICE_SUCCESS':
        
            return {
                ...state,
                fetching: false, 
                data: state.data.filter(service => service.id != action.serviceId)
            } 

        default:
            return state
    }
}

export default servicesReducer