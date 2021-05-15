import { AuthActionTypes } from './auth-types'

let currentUser = JSON.parse(localStorage.getItem('user'));

const INITIAL_STATE = {
  currentUser: currentUser || null,
  errors: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        errors: null
      };
    case AuthActionTypes.AUTH_ERROR:
      return {
        ...state,
        errors: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;