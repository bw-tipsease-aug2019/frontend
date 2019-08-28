import { types } from "../actions";
// import jwt_decode from "jwt_decode";

const initialState = {
  token: "",
  message:'',
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
    //CREATE ACCOUNT
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
    //LOGIN
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
        message: payload.message,
        token: payload.token
      };
    case types.LOGIN_FAIL:
      return {
        ...state,
        errors: payload,
        isLoading: false,
        token: ''
      };
    //CREATE PROFILE
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
    // GET PROFILE
    case types.GET_USER_START:
      return {
        ...state,
        isLoading: true,
        isAuth: true,
        isSuccess: false,
        errors: null
      };
    case types.GET_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        user: payload
      };
    case types.GET_USER_FAIL:
      return {
        ...state,
        isLoading: false,
        errors: payload
      };
    // EDIT PROFILE
    case types.UPDATE_USER_START:
      return {
        ...state,
        isLoading: true,
        isAuth: true,
        isSuccess: false
      };
    case types.UPDATE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        user: payload
      };
    case types.UPDATE_USER_FAIL:
      return {
        ...state,
        isLoading: false,
        errors: payload
      };
    //EDIT PASSWORD
    case types.EDIT_PASS_START:
      return {
        ...state,
        isLoading: true,
        isAuth: true,
        isSuccess: false
      };
    case types.EDIT_PASS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        user: payload
      };
    case types.EDIT_PASS_FAIL:
      return {
        ...state,
        isLoading: false,
        errors: payload
      };
    //LOGOUT
    case types.LOGOUT_START:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        errors: null
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        user: {},
        isAuth: false,
        isLoading: false,
        isSuccess: false,
        errors: null
      };
    case types.LOGOUT_FAIL:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        errors: "An unknown error has occurred"
      };
    //WELCOME BACK
    case types.WELCOME_BACK:
      // const wbUser = jwt_decode(payload);
      return {
        ...state,
        isLoading: false,
        errors: null,
        isAuth: true,
        // user: wbUser,
        isSuccess: false
      };
    default:
      return state;
  }
};
