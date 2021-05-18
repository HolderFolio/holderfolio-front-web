import { AuthActionTypes } from './auth-types'
import { AUTH } from '../../services/authService'
import { auth, provider } from '../../services/firebaseService';
import { setUserToLocalStorage } from '../../helpers/setUser';
import { client } from '../..';

export const setCurrentUserAction = (user) => ({
  type: AuthActionTypes.SET_CURRENT_USER,
  payload: user,
});

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
      try {
        var token = result.credential.idToken
        const res = await AUTH.loginGoogleService(token)
        if (res) {
          dispatch(setCurrentUserAction(res?.data?.data?.user))
          setUserToLocalStorage(res)
        }
      } catch (error) {
        throw error
      }
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


export const updateUserAtion = (newSettingsObj) => {
  return async dispatch => {

    try {
      let updatedField;
      if (newSettingsObj.avatar) {
        updatedField = new FormData()
        updatedField.append('avatar', newSettingsObj.avatar)
      } else {
        updatedField = JSON.stringify(newSettingsObj)
      }

      const res = await client().patch(`users/updateMe`, updatedField)

      if (res.status >= 300) {
        throw new Error('An error occured...')
      }


      if (res.data.data.user) {
        dispatch(setCurrentUserAction(res.data.data.user))
        localStorage.setItem('user', JSON.stringify(res.data.data.user))
        return res.data.data.user
      }
    } catch (error) {
      throw error
    }
  }
}


export const updateMyPasswordAtion = (passwordsObj) => {
  return async dispatch => {

    try {

      const res = await client().patch(`users/updateMyPassword`, JSON.stringify(passwordsObj))

      if (res.status >= 300) {
        throw new Error('An error occured...')
      }

      if (res.data.data.user) {
        dispatch(setCurrentUserAction(res.data.data.user))
        localStorage.setItem('user', JSON.stringify(res.data.data.user))
      }

      if (res.data.token) {
        localStorage.setItem('jwt', JSON.stringify(res.data.token))
      }
    } catch (error) {
      throw error
    }
  }
}



export const AUTHACTION = {
  loginManuel: loginManuel,
  setCurrentUser: setCurrentUser,
  logoutAction: logoutAction,
  loginLoadingAction: loginLoadingAction,
  registerAction: registerAction,
  loginGoogleAction: loginGoogleAction
}