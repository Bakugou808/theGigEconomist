import React from 'react'

import {Redirect} from 'react-router-dom'


const token = () => localStorage.getItem("token");
const userId = () => localStorage.getItem("userId")


export const headers = () => {
    return {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token(),
      UserId: userId()
    }; 
};


// --------LOGIN---------  **********


export const fetchUserRequest = () => {
    return {
        type: 'FETCH_USER_REQUEST'
    }
}

export const fetchUserSuccess = (user) => {
    return {
        type: 'FETCH_USER_SUCCESS',
        user: user,
    }
}

export const fetchUserFailure = (error) => {
    return {
        type: 'FETCH_USER_SUCCESS',
        error: error,
    }
}

// --------SIGNUP---------  **********


export const signUpUserFailure = (error) => {
    return {
        type: 'SIGN_UP_USER_FAILURE',
        error: error,
    }
}

export const signUpUserRequest = () => {
    return {
        type: 'SIGN_UP_USER_REQUEST'
    }
}

export const signUpUserSuccess = (user) => {
    return {
        type: 'SIGN_UP_USER_SUCCESS',
        user: user,
    }
}

// --------SIGNOUT---------  **********

export const signOutUser = (userId) => {
    return {
        type: 'SIGN_OUT_USER',
        userId: userId
    }
}





// -------FETCHES----------  *********************************************************************************************************************************

export const fetchUser = (data, dispatch) => {
        dispatch(signUpUserRequest())
        fetch(`http://localhost:3000/login`, {
            method: "POST",
            headers: headers(),
            body: JSON.stringify(data)
          })
            .then(res=>res.json())
            .then(data => {
                if (data.error){
                    dispatch(signUpUserFailure(data.error))
                } else {
                    dispatch(signUpUserSuccess(data))
                    localStorage.setItem("token", data.jwt)
                    localStorage.setItem("userId", data.id)
                    return <Redirect to='/home'/>

                }
            })
} 

export const signUpUser = (data, dispatch) => {
    dispatch(fetchUserRequest())
    fetch(`http://localhost:3000/users`, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify(data)
      })
        .then(res=>res.json())
        .then(data => {
            if (data.error){
                dispatch(fetchUserFailure(data.error))
            } else {
                dispatch(fetchUserSuccess(data))
                localStorage.setItem("token", data.jwt)
                this.props.history.push('/home')
                // localStorage.setItem("userId", data.id)
            }
        })
}

