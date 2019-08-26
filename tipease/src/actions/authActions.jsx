import axiosWithAuth from '../utils/axiosWithAuth'
import { types } from './index'

export const doSignIn = credentials => dispatch => {
    dispatch({ type: types.LOGIN_START })
    return axiosWithAuth()
        .post('endpointHERE', credentials)
        .then(
            res =>{
                console.log(res)
                //set token 
                // localStorage.setItem('token', (res.data.token))
                dispatch ({ type: types.LOGIN_SUCCESS, payload: res.data})
            }
        )
        .catch(
            err => {
                console.log(err.response)
                dispatch({ type: types.LOGIN_FAIL, payload: err.response})
            }
        )
}

export const doCreateAccount = newUserDetails => dispatch =>{
    dispatch({ type: types.CREATE_USER_START});
    return axiosWithAuth()
    .post('endpointhere', newUserDetails)
    .then(
      res => {
        dispatch({ type: types.CREATE_USER_SUCCESS, payload: {message: 'User was created successfully!'}});
        console.log(res)
      }
    )
    .catch(
      err => {
        dispatch({type: types.CREATE_USER_FAIL, payload: err})
         console.log(err.response)
      } 
    )
  
  };
  
  export const doSignOut = () => dispatch =>{
    dispatch({ type: types.LOGOUT_START});
  };