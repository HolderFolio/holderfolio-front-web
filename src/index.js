import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import axios from "axios";
import reportWebVitals from './reportWebVitals'

import store from './redux/store';
import history from "./helpers/createBrowserHistory"
import { authHeader } from "./helpers/auth-header"
import { API_URL } from "../src/constants/EndPoints_API"

import App from './App';
import './index.scss';

const getHeadersKeys = () => {
  console.log(authHeader())
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': authHeader()
  }
}

export const client = () => {
  return axios.create({
    baseURL: API_URL,
    headers: getHeadersKeys()
  })
}


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter history={history}>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();