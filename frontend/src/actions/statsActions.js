import {headers} from '../services/api'

// ----------FETCH GIGS FOR THIS MONTH-------  *****************************

export const fetchServiceMonthsGigsRequest = () => {
    return {
        type: 'FETCH_MONTHS_GIGS_REQUEST'
    }
}

export const fetchServiceMonthsGigsSuccess = (gigs) => {
    return {
        type: 'FETCH_MONTHS_GIGS_SUCCESS',
        gigs: gigs,
    }
}

export const fetchServiceMonthsGigsFailure = (error) => {
    return {
        type: 'FETCH_MONTHS_GIGS_FAILURE',
        error: error,
    }
}

// ----------FETCH SERVICE EARNED VS PROJECTED REQUEST-------  *****************************

export const fetchServiceEarnedVsProjRequest = () => {
    return {
        type: 'FETCH_SERVICE_EARNED_VS_PROJECTED_REQUEST'
    }
}

export const fetchServiceEarnedVsProjSuccess = (results) => {
    return {
        type: 'FETCH_SERVICE_EARNED_VS_PROJECTED_SUCCESS',
        results: results,
    }
}

export const fetchServiceEarnedVsProjFailure = (error) => {
    return {
        type: 'FETCH_SERVICE_EARNED_VS_PROJECTED_FAILURE',
        error: error,
    }
}

// // ----------Clear Services State-------  *****************************

export const clearServiceState = () => {
    return {
        type: 'CLEAR_SERVICE_STATE',
        state: []
    }
}




// // ----------POST SERVICE REQUEST-------  *****************************

// export const postServiceRequest = () => {
//     return {
//         type: 'POST_SERVICE_REQUEST'
//     }
// }

// export const postServiceSuccess = (service) => {
//     return {
//         type: 'POST_SERVICE_SUCCESS',
//         service: service,
//     }
// }

// export const postServiceFailure = (error) => {
//     return {
//         type: 'POST_SERVICE_FAILURE',
//         error: error,
//     }
// }


// // ----------PATCH SERVICE REQUEST-------  *****************************

// export const patchServiceRequest = () => {
//     return {
//         type: 'PATCH_SERVICE_REQUEST'
//     }
// }

// export const patchServiceSuccess = (service) => {
//     return {
//         type: 'PATCH_SERVICE_SUCCESS',
//         service: service,
//     }
// }

// export const patchServiceFailure = (error) => {
//     return {
//         type: 'PATCH_SERVICE_FAILURE',
//         error: error,
//     }
// }

// // ----------DELETE SERVICE REQUEST-------  *****************************

// export const deleteServiceRequest = () => {
//     return {
//         type: 'DELETE_SERVICE_REQUEST'
//     }
// }

// export const deleteServiceSuccess = (serviceId) => {
//     return {
//         type: 'DELETE_SERVICE_SUCCESS',
//         serviceId: serviceId,
//     }
// }

// export const deleteServiceFailure = (error) => {
//     return {
//         type: 'DELETE_SERVICE_FAILURE',
//         error: error,
//     }
// }

// // ----------SELECT SERVICE FOR VIEW-------  *****************************

// export const selectService = (service) => {
//     return {
//         type: 'SELECT_SERVICE_FOR_VIEW',
//         service: service
//     }
// }





// --------API CALLS---------  *********************************************************************************************************************************


// --------FETCH ALL SERVICES---------  ********************************

export const fetchServicesMonthsGigs = (serviceId, dispatch) => {
        dispatch(fetchServiceMonthsGigsRequest())
        fetch(`http://localhost:3000/months_gigs/${serviceId}`)
            .then(res=>res.json())
            .then(data => {
                if (data.error){
                    dispatch(fetchServiceMonthsGigsFailure(data.error))
                } else {
                    dispatch(fetchServiceMonthsGigsSuccess(data))
                }
            }) 
}

// --------FETCH SERVICE EARNED VS PROJECTED---------  ********************************

export const fetchServiceEarnedVsProj = (serviceId, dispatch) => {
    dispatch(fetchServiceEarnedVsProjRequest())
    console.log('in earned vs projected')
    fetch(`http://localhost:3000/earned_vs_projected/${serviceId}`)
        .then(res=>res.json())
        .then(data => {
            if (data.error){
                dispatch(fetchServiceEarnedVsProjFailure(data.error))
            } else {
                dispatch(fetchServiceEarnedVsProjSuccess(data)) 
            }
        }) 
}

// // ----------ADD SERVICE-------  *****************************


// export const postNewService = (serviceData, dispatch) => {
//     dispatch(postServiceRequest())
//     fetch(`http://localhost:3000/services`, {
//         method: 'POST',
//         headers: headers(),
//         body: JSON.stringify(serviceData)
//     })
//         .then(res=>res.json())
//         .then(data => {
//             if (data.error){
//                 dispatch(postServiceFailure(data.error))
//             } else {
//                 dispatch(postServiceSuccess(data))
//             }
//         }) 
// }

// // ----------PATCH SERVICE-------  *****************************

// export const patchService = (serviceData, serviceId, dispatch) => {
//     dispatch(patchServiceRequest())
//     fetch(`http://localhost:3000/services/${serviceId}`, {
//         method: 'PATCH',
//         headers: headers(),
//         body: JSON.stringify(serviceData)
//     })
//         .then(res=>res.json())
//         .then(data => {
//             if (data.error){
//                 dispatch(patchServiceFailure(data.error))
//             } else {
//                 dispatch(patchServiceSuccess(data))
//             }
//         }) 
// }


// // --------DELETE SERVICE---------  ********************************

// export const deleteService = (serviceId, dispatch) => {
//     dispatch(deleteServiceRequest())
//     console.log(serviceId)
//     fetch(`http://localhost:3000/services/${serviceId}`, {
//         method: 'DELETE',
//         headers: headers(),
//     })
//         .then(res=>res.json())
//         .then(data => {
//             if (data.error){
//                 dispatch(deleteServiceFailure(data.error))
//             } else {
//                 console.log('indelete success')
//                 dispatch(deleteServiceSuccess(data))
//             }
//         }) 
// }
