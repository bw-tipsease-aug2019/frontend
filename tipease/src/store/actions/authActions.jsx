import axiosWithAuth from '../../utils/axiosWithAuth'
import { types } from './index'

export const doCreateAccount = newUserDetails => dispatch =>{
    dispatch({ type: types.CREATE_USER_START});
    console.log('testingu');
    return axiosWithAuth()
    .post('/auth/register', newUserDetails)
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
  
export const doSignIn = credentials => dispatch => {
    dispatch({ type: types.LOGIN_START })
    return axiosWithAuth()
        .post('/auth/login', credentials)
        .then(
            res =>{
                console.log(res)
                //set token 
                localStorage.setItem('userid', (res.data.userid))
                localStorage.setItem('token', (res.data.token))
                localStorage.setItem('serviceWorker', (res.data.isServiceWorker))
                dispatch ({ type: types.LOGIN_SUCCESS, payload: res.data})
            }
        )
        .catch(
            err => {
                console.log(err.response)
                localStorage.removeItem('token')
                localStorage.removeItem('serviceWorker')
                dispatch({ type: types.LOGIN_FAIL, payload: err.response})
            }
        )
}

  
  // export const doCreateProfile = newProfileDetails => dispatch =>{
  //   dispatch({ type: types.CREATE_PROFILE_START});
  //   return axiosWithAuth()
  //   .post('needsEndpoint', newProfileDetails)
  //   .then(
  //     res => {
  //       dispatch({ type: types.CREATE_PROFILE_SUCCESS, payload: {message: 'Profile was created successfully!'}});
  //       console.log(res)
  //     }
  //   )
  //   .catch(
  //     err => {
  //       dispatch({type: types.CREATE_PROFILE_FAIL, payload: err})
  //        console.log(err.response)
  //     } 
  //   )
  
  // };

  export const getUsers = data => dispatch => {

    dispatch({ type: types.GET_USER_START});
    return axiosWithAuth()
    .get(`/users/`, data)
    .then(
      res => {
        console.log(data)
          console.log('auth action get user', res)
          dispatch({type: types.GET_USER_SUCCESS, payload: res.data.users});
        }
      )
      .catch(
        err => {
          dispatch({type: types.GET_USER_FAIL, payload: err})
          console.log(err)
        }
      )
  
  };

  export const doEditProfile = (id, user) => dispatch => {

    dispatch({ type: types.UPDATE_USER_START});
    return axiosWithAuth()
      .put(`/users/${id}`, user)
      .then(
        res => {
          console.log(res)
          dispatch({type: types.UPDATE_USER_SUCCESS, payload: res.data.user});
        }
      )
      .catch(
        err => {
          dispatch({type: types.UPDATE_USER_FAIL, payload: err})
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
    localStorage.removeItem('token')
    localStorage.removeItem('serviceWorker')

  };

  export const doWelcomeBack = token => {
	return { type: types.WELCOME_BACK, payload: token };
};