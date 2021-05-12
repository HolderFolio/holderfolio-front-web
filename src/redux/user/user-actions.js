import { client } from '../..';
import { UserActionTypes } from './user-types'


export const setCurrentUserAction = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
export const setClickedUserAction = (user) => ({
  type: UserActionTypes.SET_CLICKED_USER,
  payload: user,
});


// export const getUserByIdAction = (userId) => {
//   return async dispatch => {
//     try {
//       const res = await client().get(`users/${userId}`)

//       if (res.status >= 300) {
//         throw new Error('Une erreur est survenue...')
//       }

//       if (res.data.data.data) {
//         return res.data.data.data
//       }
//     } catch (error) {
//       throw error
//     }
//   }
// }



