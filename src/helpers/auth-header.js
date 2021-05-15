import axios from "axios";

export const authHeader = () => {
  let token = JSON.parse(localStorage.getItem('jwt'));
  if (token) {
    return 'Bearer ' + token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
    return;
  }
}