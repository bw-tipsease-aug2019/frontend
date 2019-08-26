import { types } from "../actions";

const initialState = {
  token: "",
  user: null,
  userProfile: null,
  isAuth: false,
  isLoading: false,
  isSuccess: false,
  errors: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.CREATE_USER_START:
      return {
        ...state,
        isLoading: true,
        isAuth: false,
        isSuccess: false,
        errors: null,
        user: {}
      };
    case types.CREATE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        isSuccess: true,
        errors: null,
        user: {}
      };
    case types.CREATE_USER_FAIL:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        isSuccess: false,
        errors: payload,
        user: {}
      };
    case types.LOGIN_START:
      return {
        ...state,
        isLoading: true,
        isAuth: false,
        isSuccess: false,
        errors: null
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        isSuccess: true,
        user: payload.user,
        token: payload.token
      };
    case types.LOGIN_FAIL:
      return {
        ...state,
        errors: payload,
        isLoading: false
      };
    case types.CREATE_PROFILE_START:
      return {
        ...state,
        isLoading: true,
        isAuth: false,
        isSuccess: false,
        errors: null,
        user: payload.user,
        userProfile: {},
        token: payload.token
      };
    case types.CREATE_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        isSuccess: true,
        errors: null,
        user: payload.user,
        userProfile: {},
        token: payload.token
      };
    case types.CREATE_PROFILE_FAIL:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        isSuccess: false,
        errors: payload,
        user: payload.user,
        userProfile: {},
        token: payload.token
      };
    default:
      return state;
  }
};
