import { UserActionTypes } from './user-types'

let currentUser = JSON.parse(localStorage.getItem('user'));

const INITIAL_STATE = {
  currentUser: currentUser || null,
  errors: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        errors: null
      };
    default:
      return state;
  }
};

export default userReducer;