import { SystemActionTypes } from './system-types'

const INITIAL_STATE = {
  drawerNavOpen: false,
  TabAddBottomToggleOpen: false,
  theme: localStorage.getItem('theme') || "light",
};

const SystemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SystemActionTypes.TOGGLE_DRAWER:
      return {
        ...state,
        drawerNav: !action.payload,
      }
    case SystemActionTypes.TOGGLE_TAB_ADD:
      return {
        ...state,
        TabAddBottomToggle: !action.payload,
      }
    case SystemActionTypes.TOGGLE_THEME_COLOR:
      if (action.payload !== "light" && action.payload !== "dark") return state;
      return {
        ...state,
        theme: action.payload,
        errors: null
      };
    default:
      return state
  }
}

export default SystemReducer;