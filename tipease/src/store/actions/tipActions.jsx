import axiosWithAuth from "../../utils/axiosWithAuth";
import { types } from '../actions';

export const getTipList = () => dispatch => {
    dispatch({ type: types.GET_TIPLIST_START});
    return axiosWithAuth()
      .get('/tips')
      .then(res => {
        console.log('tips', res.data.tips)
        dispatch({type: types.GET_TIPLIST_SUCCESS, payload: res.data.tips})
      })
      .catch(err => {
        dispatch({type: types.GET_TIPLIST_FAIL, payload: err})
      })
  };

  export const postTip = tip => dispatch =>{
    dispatch({ type: types.POST_TIPLIST_START});
    return axiosWithAuth()
    .post('/tips/add', tip)
    .then(res => {
      console.log(res)
      dispatch({type: types.POST_TIPLIST_SUCCESS, payload: res.data})
    })
    .catch(err => {
      dispatch({type: types.POST_TIPLIST_FAIL, payload: err})
    })
  
  };

