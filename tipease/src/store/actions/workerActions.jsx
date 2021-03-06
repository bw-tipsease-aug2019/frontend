import axiosWithAuth from '../../utils/axiosWithAuth'
import { types } from './index'

import {testData} from '../../components/serviceWorker/mockTestData';

export const setFilter = (filter) => {
  return dispatch => {
    dispatch({ type: types.SET_FILTER_SUCCESS, payload: filter });
  };
}

export const getWorkers = () => {
  return dispatch => {
    dispatch({ type: types.WORKERS_START });
    axiosWithAuth()
      .get('/users/workers')
      .then(res => {
        console.log('workerData', res.data);
        dispatch({ type: types.GET_WORKERS_SUCCESS, payload: res.data});
      })
      .catch(err => {
        dispatch({ type: types.WORKERS_FAIL, payload: err.response });
      });
      // console.log('Hi', testData);
      // dispatch({ type: types.GET_WORKERS_SUCCESS, payload: testData});
  };
}

export const getWorker = (id) => {
  let currWorkerTest = testData.filter(worker=>`${worker.id}`===id);
  return dispatch => {
   dispatch({ type: types.WORKERS_START });
    axiosWithAuth()
      .get(`users/${id}`)
      .then(res => {
        console.log('userbyid', res.data);
        dispatch({ type: types.WORKERS_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: types.WORKERS_FAIL, payload: err.response });
      });
      // dispatch({ type: types.GET_WORKER_SUCCESS, payload: currWorkerTest });
  };
}

export const addWorker = (worker) => {
  return dispatch => {
    dispatch({ type: types.WORKERS_START });
    axiosWithAuth()
      .post(`url`, worker)
      .then(res => {
        console.log(res);
        dispatch({ type: types.ADD_WORKER_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: types.WORKERS_FAIL, payload: err.response });
      });
  };
}

export const editWorker = (editedWorker) => {
  return dispatch => {
    dispatch({ type: types.WORKERS_START });
    axiosWithAuth()
      .put(`url/${editedWorker.id}`,editedWorker)
      .then(res => {
        console.log(res);
        dispatch({ type: types.EDIT_WORKER_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: types.WORKERS_FAIL, payload: err.response });
      });
  };
}

export const deleteWorker = (id) => {
  return dispatch => {
    dispatch({ type: types.WORKERS_START });
    axiosWithAuth()
      .delete(`url/${id}`)
      .then(res => {
        console.log(res);
        dispatch({ type: types.DELETE_WORKER_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: types.WORKERS_FAIL, payload: err.response });
      });
  };
}