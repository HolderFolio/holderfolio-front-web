import { AuthActionTypes } from './auth-types'
import { AUTH } from '../../services/authService'
import { auth, provider } from '../../services/firebaseService';



const setCurrentUser = user => {
  return dispatch => {
    dispatch(setCurrentUserSucces(user))
    return true
  }
}


const setCurrentUserSucces = user => ({
  type: AuthActionTypes.SET_CURRENT_USER,
  payload: user,
});


const loginLoadingAction = toggle => ({
  type: AuthActionTypes.LOGIN_LOADING,
  payload: toggle,
});


const loginManuel = (email, password) => {
  return dispatch => {
    var data = { email, password }
    return AUTH.loginManuel(data).then(user => {
      try {
        if (user.data.status === 'success' || user.data.status === 200) {
          dispatch(setCurrentUserSucces(user.data))
        }
      } catch {
        dispatch(SetUserError(user))
      }
    })
  }
}


const loginGoogleAction = () => {
  return dispatch => {
    return auth().signInWithPopup(provider).then(async result => {
      var token = result.credential.idToken
      AUTH.loginGoogleService(token).then(res => {
        return res
      })
    })
  }
}


const SetUserError = err => ({
  type: AuthActionTypes.ERROR_LOGIN_USER,
  payload: err,
})


const registerAction = data => {
  return dispatch => {
    return AUTH.register(data).then(newUser => {
      dispatch(registersuccess(newUser))
    }).catch(res => {
    })

  }
}

const registersuccess = data => ({
  type: AuthActionTypes.REGISTER_SUCCES,
  payload: data
})


const logoutAction = () => dispatch => {
  AUTH.logoutService().then(user => {
    dispatch(logoutSuccess())
  })
}

const logoutSuccess = () => ({
  type: AuthActionTypes.LOGOUT_SUCCESS,
  payload: null
})



export const AUTHACTION = {
  loginManuel: loginManuel,
  setCurrentUser: setCurrentUser,
  logoutAction: logoutAction,
  loginLoadingAction: loginLoadingAction,
  registerAction: registerAction,
  loginGoogleAction: loginGoogleAction
}