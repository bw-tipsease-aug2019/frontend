import { types } from "../actions";

const initialState = {
  workers: [],
  currentWorker: {
    id: 0,
    name: { first: '', last: '' },
    thumbnail: '',
    company: '',
    role: '',
    durationEmployed: { year: 0, month: 0 },
    tagline: '',
    tips: [],

  },
  isLoading: false,
  error: '',
  filter: {}
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.WORKERS_START:
      return ({
        ...state,
        isLoading: true,
        error: ''
      });
    case types.WORKERS_FAIL:
      return ({
        ...state,
        isLoading: false,
        error: payload
      })
    case types.GET_WORKERS_SUCCESS:
      return ({
        ...state,
        workers: payload,
        isLoading: false,
        error: ''
      })
    case types.GET_WORKER_SUCCESS:
      return ({
        ...state,
        currentWorker: payload,
        isLoading: false,
        error: ''
      })
    case types.POST_WORKER_SUCCESS:
      return ({
        ...state,
        workers: payload,
        isLoading: false,
        error: ''
      });
    case types.PUT_WORKER_SUCCESS:
      return ({
        ...state,
        workers: payload,
        isLoading: false,
        error: ''
      });
    case types.DELETE_WORKER_SUCCESS:
      return ({
        ...state,
        workers: payload,
        isLoading: false,
        error: ''
      });
    case types.SET_FILTER_SUCCESS:
      return ({
        ...state,
        filter: payload,
        isLoading: false,
        error: ''
      });
    default:
      return state;
  }
};