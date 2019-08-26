import { types } from "../actions";

const initialState = {
  tipList: [],
  isLoading: false,
  isSuccess: true,
  errors: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_TIPLIST_START:
      return{
        ...state,
        isLoading: true,
        errors: null
      }
    case types.GET_TIPLIST_SUCCESS:
    return{
      ...state,
      isloading: false,
      tipList: action.payload,
      errors: null
    }
    case types.GET_TIPLIST_FAIL:
      return{
        ...state,
        isloading: false,
        errors: payload.err
      }
    case types.POST_TIPLIST_START:
      return{
        ...state,
        isLoading: true,
        errors: null
      }
    case types.POST_TIPLIST_SUCCESS:
      const postTipList = [...state.tips, payload]
      return{
        ...state,
        isloading: false,
        isSuccess: true,
        errors: null,
        tipList: postTipList
      }
      case types.POST_TIPLIST_FAIL:
        return
    default:
      return state;
  }
};