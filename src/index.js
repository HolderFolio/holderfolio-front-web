import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import { Provider } from 'react-redux'
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom'
import history from "./helpers/createBrowserHistory"

import { authHeader } from "./helpers/auth-header"
import reportWebVitals from './reportWebVitals';
import { API_URL } from "../src/constants/EndPoints_API"

import App from './App';
import './index.scss';

// axios settings
const getHeadersKeys = () => {
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();