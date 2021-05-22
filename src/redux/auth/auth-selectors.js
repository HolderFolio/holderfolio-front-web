import { createSelector } from 'reselect'

export const selectAuth = state => state.auth;
export const selectCurrentUser = createSelector(
  [selectAuth],
  auth => auth.currentUser
);
export const selectUserErrors = createSelector(
  [selectAuth],
  auth => auth.errors && auth.errors
);
export const selectUserDevise = createSelector(
  [selectCurrentUser],
  user => user?.settings?.devise
);
export const selectUserGraphTime = createSelector(
  [selectCurrentUser],
  user => user?.preferences?.graphTime
);
