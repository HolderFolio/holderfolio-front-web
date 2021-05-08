import { AUTH_ENDPOINTS } from "../constants/EndPoints_API";
import { client } from './AxiosConfig'

const setDataStorageSuccess = (data, token) => {
  localStorage.setItem('user', JSON.stringify(data))
  localStorage.setItem('@auth_token', JSON.stringify(token))
}

const setDataStorageError = () => {
  localStorage.removeItem('user')
  localStorage.removeItem('@auth_token')
}

const loginManuel = user => {
  // var data = {
  //   "email": user.email,
  //   "password": user.password
  // }
  var data = {
    "email": 'andres.gomesiglesias@gmail.com',
    "password": '12Nevers34*'
  }

  return client().post(AUTH_ENDPOINTS.LOGIN, JSON.stringify(data)).then(res => {
    setDataStorageSuccess(res.data, res.data.token)
    return res;
  }).catch(function (err) {
    setDataStorageError()
    return err.response
  })
}


const loginWithGoogle = token => {
  const data = { 'idToken': token }
  return client().post(AUTH_ENDPOINTS.LOGINWITHGOOGLE, JSON.stringify(data)).then(res => {
    setDataStorageSuccess(res.data, res.data.token)
    return res.data
  }).catch(err => {
    setDataStorageError()
    return err.response
  })
}


const register = data => {

  return client().post(AUTH_ENDPOINTS.REGISTER, data).then(res => {
    setDataStorageSuccess(res.data, res.data.token)
    return newUser
  }).catch(err => {
    setDataStorageError()
    return err.response
  })
}


const logout = () => {
  return client().get(AUTH_ENDPOINTS.LOGOUT).then(user => {
    setDataStorageError()
    return true
  }).catch(function (err) {
    return err.response
  })
}

const forgotPassword = email => {
  const data = { "email": email, }

  return client().post(AUTH_ENDPOINTS.FORGETPASSWORD, data).then(res => {
  }).catch(err => {
  })

}

export const Auth = {
  loginManuel: loginManuel,
  logout: logout,
  register: register,
  forgotPassword: forgotPassword,
  loginWithGoogle: loginWithGoogle
}
