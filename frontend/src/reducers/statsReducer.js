const initialState = {
    data: [],
    fetching: false,
    error: false,
    serviceStats: {
        gigsThisMonth:[], 
        earnedVsProjected: [], 
        avgMonthly: [],
    },

}

const servicesReducer = (state=initialState, action) => {
    let idx 
    let data 

    switch(action.type){

        case 'FETCH_MONTHS_GIGS_REQUEST':
            return {
                ...state,
                fetching: true
            }
        case 'FETCH_MONTHS_GIGS_SUCCESS':
            
            return {
                ...state,
                fetching: false, 
                serviceStats: {...state.serviceStats, gigsThisMonth: action.gigs}
            }    
        case 'FETCH_MONTHS_GIGS_FAILURE':
        
            return {
                ...state,
                fetching: false, 
                error: action.error
            } 
// ----------- FETCH EARNED_VS_PROJECTED ---------------- **********************
        case 'FETCH_SERVICE_EARNED_VS_PROJECTED_REQUEST':
            return {
                ...state,
                fetching: true
            }
        case 'FETCH_SERVICE_EARNED_VS_PROJECTED_SUCCESS':
            
            return {
                ...state,
                fetching: false, 
                serviceStats:{...state.serviceStats, earnedVsProjected: action.results} 
            }    
        case 'FETCH_SERVICE_EARNED_VS_PROJECTED_FAILURE':
        
            return {
                ...state,
                fetching: false, 
                error: action.error
            } 

// // ----------CLEAR SERVICE STATE-------  *****************************
        case 'CLEAR_SERVICE_STATE':
            console.log("in clear service state")
            return {
                ...state, 
                serviceStats: {avgMonthly: [], earnedVsProjected: [], gigsThisMonth: []},
            }

// // ----------ADD SERVICE-------  *****************************

//         case 'POST_SERVICE_REQUEST':
//             return {
//                 ...state,
//                 fetching: true
//             }
//         case 'POST_SERVICE_FAILURE':

//             return {
//                 ...state,
//                 fetching: false, 
//                 error: action.error
//             } 
//         case 'POST_SERVICE_SUCCESS':
        
//             return {
//                 ...state,
//                 fetching: false, 
//                 data: [...state.data, action.service]
//             } 
            
// // ----------PATCH SERVICE-------  *****************************

//         case 'PATCH_SERVICE_REQUEST':
//             return {
//                 ...state,
//                 fetching: true
//             }
//         case 'PATCH_SERVICE_FAILURE':

//             return {
//                 ...state,
//                 fetching: false, 
//                 error: action.error
//             } 
//         case 'PATCH_SERVICE_SUCCESS':
//             // const newData = [state.data.filter(service => service.id != action.serviceId)]
//             idx = state.data.findIndex(service => service.id === action.service.id)
//             if(state.selectedService.id === action.service.id){
//                 return {
//                     ...state,
//                     fetching: false, 
//                     data: [...[...state.data.filter(service => service.id != action.service.id)], action.service],
//                     selectedService: action.service
//                 } 
//             }else{
//                 return {
//                     ...state,
//                     fetching: false, 
//                     data: [...[...state.data.filter(service => service.id != action.service.id)], action.service]
//                 } 
//             }


// // ----------DELETE SERVICE-------  *****************************

//         case 'DELETE_SERVICE_REQUEST':
//             return {
//                 ...state,
//                 fetching: true
//             }
//         case 'DELETE_SERVICE_FAILURE':

//             return {
//                 ...state,
//                 fetching: false, 
//                 error: action.error
//             } 
//         case 'DELETE_SERVICE_SUCCESS':
         
//             return {
//                 ...state,
//                 fetching: false, 
//                 data: state.data.filter(service => service.id != action.serviceId)
//             } 

//         case 'SELECT_SERVICE_FOR_VIEW':

//             return {
//                 ...state, 
//                 selectedService: action.service
//             }

        // ----------------------
        // case 'POST_GIG_SUCCESS':
        //     return {
        //         ...state,
        //         selectedService: [...state.selectedService, {gig: {...state.selectedService.gigs, ...action.gig}}]
        //     }
        
        // case 'SIGN_OUT_USER':

        //     return {
        //         ...state,
        //         data: [],
        //         selectedGigs: [],
        //         selectedAppointments:[]
        //     }

        default:
            return state
    }
}

export default servicesReducer