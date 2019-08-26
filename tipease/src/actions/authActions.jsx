import axiosWithAuth from '../utils/axiosWithAuth'
import { types } from './index'

export const doSignIn = credentials => dispatch => {
    dispatch({ type: types.LOGIN_START })
    return axiosWithAuth()
        .post('needsEndpoint', credentials)
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
    .post('needsEndpoint', newUserDetails)
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
  
  export const doCreateProfile = newProfileDetails => dispatch =>{
    dispatch({ type: types.CREATE_PROFILE_START});
    return axiosWithAuth()
    .post('needsEndpoint', newProfileDetails)
    .then(
      res => {
        dispatch({ type: types.CREATE_PROFILE_SUCCESS, payload: {message: 'Profile was created successfully!'}});
        console.log(res)
      }
    )
    .catch(
      err => {
        dispatch({type: types.CREATE_PROFILE_FAIL, payload: err})
         console.log(err.response)
      } 
    )
  
  };

  export const getUserProfile = () => dispatch => {

    dispatch({ type: types.GET_USER_START});
    return axiosWithAuth()
      .get('needsEndpoint')
      .then(
        res => {
          // console.log(res)
          dispatch({type: types.GET_USER_SUCCESS, payload: res.data.user});
        }
      )
      .catch(
        err => {
          dispatch({type: types.GET_USER_FAIL, payload: err})
          console.log(err)
        }
      )
  
  };

  export const editUser = user => dispatch => {

    dispatch({ type: types.GET_USER_START});
    return axiosWithAuth()
      .put('needsEndpoint', user)
      .then(
        res => {
          console.log(res)
          dispatch({type: types.GET_USER_SUCCESS, payload: res.data.user});
        }
      )
      .catch(
        err => {
          dispatch({type: types.GET_USER_FAIL, payload: err})
          console.log(err)
        }
      )
  
  };
  export const editPass = user => dispatch => {

    dispatch({ type: types.GET_PASS_START});
    return axiosWithAuth()
      .put('/auth/profile', user)
      .then(
        res => {
          console.log(res)
          dispatch({type: types.GET_PASS_SUCCESS, payload: res.data.user});
        }
      )
      .catch(
        err => {
          dispatch({type: types.GET_PASS_FAIL, payload: err})
          console.log(err)
        }
      )
  
  };
  export const doSignOut = () => dispatch =>{
    dispatch({ type: types.LOGOUT_START});
  };

  export const doWelcomeBack = token => {
	return { type: types.WELCOME_BACK, payload: token };
};