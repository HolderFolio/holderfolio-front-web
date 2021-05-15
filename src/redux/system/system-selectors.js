import { createSelector } from 'reselect'

export const selectSystem = state => state.system;
export const selectTheme = createSelector(
  [selectSystem],
  system => system.theme
);
export const selectSystemErrors = createSelector(
  [selectSystem],
  system => system.errors && system.errors
);