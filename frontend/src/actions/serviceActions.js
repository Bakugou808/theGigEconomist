import {headers} from '../services/api'

export const fetchServicesRequest = () => {
    return {
        type: 'FETCH_SERVICES_REQUEST'
    }
}

export const fetchServicesSuccess = (services) => {
    return {
        type: 'FETCH_SERVICES_SUCCESS',
        services: services,
    }
}

export const fetchServicesFailure = (error) => {
    return {
        type: 'FETCH_SERVICES_FAILURE',
        error: error,
    }
}


// ----------POST SERVICE REQUEST-------  *****************************

export const postServiceRequest = () => {
    return {
        type: 'POST_SERVICE_REQUEST'
    }
}

export const postServiceSuccess = (service) => {
    return {
        type: 'POST_SERVICE_SUCCESS',
        service: service,
    }
}

export const postServiceFailure = (error) => {
    return {
        type: 'POST_SERVICE_FAILURE',
        error: error,
    }
}


// ----------PATCH SERVICE REQUEST-------  *****************************

export const patchServiceRequest = () => {
    return {
        type: 'PATCH_SERVICE_REQUEST'
    }
}

export const patchServiceSuccess = (service) => {
    return {
        type: 'PATCH_SERVICE_SUCCESS',
        service: service,
    }
}

export const patchServiceFailure = (error) => {
    return {
        type: 'PATCH_SERVICE_FAILURE',
        error: error,
    }
}

// ----------DELETE SERVICE REQUEST-------  *****************************

export const deleteServiceRequest = () => {
    return {
        type: 'DELETE_SERVICE_REQUEST'
    }
}

export const deleteServiceSuccess = (serviceId) => {
    return {
        type: 'DELETE_SERVICE_SUCCESS',
        serviceId: serviceId,
    }
}

export const deleteServiceFailure = (error) => {
    return {
        type: 'DELETE_SERVICE_FAILURE',
        error: error,
    }
}







// --------API CALLS---------  *********************************************************************************************************************************


// --------FETCH ALL SERVICES---------  ********************************

export const fetchServices = (userId, dispatch) => {
        dispatch(fetchServicesRequest())
        fetch(`http://localhost:3000/user_services/${userId}`)
            .then(res=>res.json())
            .then(data => {
                if (data.error){
                    dispatch(fetchServicesFailure(data.error))
                } else {
                    dispatch(fetchServicesSuccess(data))
                }
            }) 
}

// ----------ADD SERVICE-------  *****************************


export const postNewService = (serviceData, dispatch) => {
    dispatch(postServiceRequest())
    fetch(`http://localhost:3000/services`, {
        method: 'POST',
        headers: headers(),
        body: JSON.stringify(serviceData)
    })
        .then(res=>res.json())
        .then(data => {
            if (data.error){
                dispatch(postServiceFailure(data.error))
            } else {
                dispatch(postServiceSuccess(data))
            }
        }) 
}

// ----------PATCH SERVICE-------  *****************************

export const patchService = (serviceData, serviceId, dispatch) => {
    dispatch(patchServiceRequest())
    fetch(`http://localhost:3000/services/${serviceId}`, {
        method: 'PATCH',
        headers: headers(),
        body: JSON.stringify(serviceData)
    })
        .then(res=>res.json())
        .then(data => {
            if (data.error){
                dispatch(patchServiceFailure(data.error))
            } else {
                dispatch(patchServiceSuccess(data))
            }
        }) 
}


// --------DELETE SERVICE---------  ********************************

export const deleteService = (serviceId, dispatch) => {
    dispatch(deleteServiceRequest())
    console.log(serviceId)
    fetch(`http://localhost:3000/services/${serviceId}`, {
        method: 'DELETE',
        headers: headers(),
    })
        .then(res=>res.json())
        .then(data => {
            if (data.error){
                dispatch(deleteServiceFailure(data.error))
            } else {
                console.log('indelete success')
                dispatch(deleteServiceSuccess(data))
            }
        }) 
}
