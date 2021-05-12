export const authHeader = () => {
  let token = JSON.parse(localStorage.getItem('jwt'));
  if (token) {
    return 'Bearer ' + token;
  } else {
    return;
  }
}