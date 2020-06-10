const initialState = {
    data: [],
    fetching: false,
}

const userReducer = (state=initialState, action) => {
    let idx 
    let data 
    

    switch(action.type){

        case 'FETCH_USER_REQUEST':
            return {
                ...state,
                fetching: true
            }
        case 'FETCH_USER_SUCCESS':
            return {
                ...state,
                fetching: false, 
                data: action.user
            }   
        case 'FETCH_CURRENT_USER_SUCCESS':
            return {
                ...state,
                fetching: false, 
                data: action.user
            } 
        case 'SIGN_OUT_USER':
            localStorage.removeItem("token");
            localStorage.removeItem("userId");
            return {
                ...state,
                data: []
            }
        case 'SIGN_UP_USER_SUCCESS':
            return {
                ...state, 
                fetching: false,
                data: action.user
            }
        case 'SIGN_UP_USER_REQUEST':
            return {
                ...state,
                fetching: true
            }
        case 'SIGN_UP_USER_FAILURE':
            return {
                ...state,
                fetching: false, 
                data: action.error
            }   
        default:
            return state
    }
}

export default userReducer