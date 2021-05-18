import { SystemActionTypes } from './system-types'

export const toggleDrawerAction = drawerNav => ({
  type: SystemActionTypes.TOGGLE_DRAWER,
  payload: drawerNav
})
export const toggleTabAddBottom = toggle => ({
  type: SystemActionTypes.TOGGLE_TAB_ADD,
  payload: toggle
})

export const toggleThemeColorAction = theme => ({
  type: SystemActionTypes.TOGGLE_THEME_COLOR,
  payload: theme
})

export const System = {
  toggleTabAddBottom: toggleTabAddBottom,
}