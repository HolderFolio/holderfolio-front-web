


export const setUserToLocalStorage = data => {
    localStorage.setItem("jwt", JSON.stringify(data.data.token));
    localStorage.setItem("user", JSON.stringify(data.data.data.user));  
}