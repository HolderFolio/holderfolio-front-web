import { AuthActionTypes } from './auth-types'
import { AUTH } from '../../services/authService'
import { auth, provider } from '../../services/firebaseService';
import { setUserToLocalStorage } from '../../helpers/setUser';



export const setCurrentUserAction = (user) => ({
  type: AuthActionTypes.SET_CURRENT_USER,
  payload: user,
});



const loginLoadingAction = toggle => ({
  type: AuthActionTypes.LOGIN_LOADING,
  payload: toggle,
});


const loginManuelAction = (email, password) => {
  return dispatch => {
    return AUTH.loginService(email, password).then(res => {
      try {
        if (res?.data?.status === 'success' || res?.data?.status === 200) {
          dispatch(setCurrentUserAction(res?.data?.data?.user))
          setUserToLocalStorage(res)
        }
      } catch (err) {
        throw err
      }
    }).catch(err => err)
  }
}


const loginGoogleAction = () => {
  return dispatch => {
    return auth().signInWithPopup(provider).then(async result => {
      try {
        var token = result.credential.idToken
        const res = await AUTH.loginGoogleService(token)
        console.log(res)
        if (res) {
          dispatch(setCurrentUserAction(res?.data?.data?.user))
          setUserToLocalStorage(res)
        }
      } catch (error) {
        throw error
      }
    }).catch(err => err)
  }
}


const setAuthError = err => ({
  type: AuthActionTypes.AUTH_ERROR,
  payload: err,
})


const signupAction = (name, email, password, passwordConfirm) => {
  return dispatch => {
    return AUTH.signupService(name, email, password, passwordConfirm).then(res => {
      try {
        if (res?.data?.status === 'success' || res?.data?.status === 200) {
          dispatch(setCurrentUserAction(res?.data?.data?.user))
          setUserToLocalStorage(res)
        }
      } catch (err) {
        throw err
      }

    }).catch(err => err)
  }
}



const logout = () => dispatch => {
  AUTH.logout().then(user => {
    dispatch(logoutSuccess())
  })
}


const logoutSuccess = () => ({
  type: AuthActionTypes.LOGOUT_SUCCESS,
  payload: null
})



export const AUTHACTION = {
  loginManuelAction: loginManuelAction,
  setCurrentUserAction: setCurrentUserAction,
  logout: logout,
  loginLoadingAction: loginLoadingAction,
  signupAction: signupAction,
  loginGoogleAction: loginGoogleAction
}