import { client } from ".."
import { AUTH_ENDPOINTS } from "../constants/EndPoints_API"
import { setUserToLocalStorage } from "../helpers/setUser"
import history from "../helpers/createBrowserHistory"

const loginService = (email, password) => {
  const data = JSON.stringify({
    email,
    password
  })
  return client().post(AUTH_ENDPOINTS.LOGIN, data).then(res => res).catch(error => Promise.reject(error))
}

const loginGoogleService = token => {
  const data = { 'idToken': token }
  return client().post(AUTH_ENDPOINTS.LOGINWITHGOOGLE, data).then(res => {
    return res
  }).catch(err => {
    throw err
  })
}

const signupService = (name, email, password, passwordConfirm) => {
  const data = {
    name,
    email,
    password,
    passwordConfirm
  }
  return client().post(AUTH_ENDPOINTS.REGISTER, JSON.stringify(data)).then(res => res).catch(error => Promise.reject(error))
}

const forgotPasswordService = email => {
  const data = { "email": email }
  return client().post(AUTH_ENDPOINTS.FORGETPASSWORD, JSON.stringify(data)).then(res => {
    return res
  }).catch(error => Promise.reject(error))
}

const logoutService = () => {
  return client().post(AUTH_ENDPOINTS.LOGOUT).then(res => res).catch(error => Promise.reject(error))
}

export const AUTH = {
  loginService: loginService,
  loginGoogleService: loginGoogleService,
  signupService: signupService,
  forgotPasswordService: forgotPasswordService,
  logoutService: logoutService,
}
