


export const setUserToLocalStorage = data => {
    console.log(data)
    localStorage.setItem("jwt", JSON.stringify(data.data.token));
    localStorage.setItem("user", JSON.stringify(data.data.data.user));
}

export const cleanUser = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('jwt');
}