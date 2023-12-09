export const setUsername = (username) => {
    return{
        type : 'ADD_USER',
        payload : username,
    };
    
}
export const setEmailId =  (email) =>{
    return {
        type : 'ADD_EMAIL',
        payload : email
    };
}

export const setPassword = (password) =>{
    return{
        type : 'ADD_PASSWORD',
        payload : password
    }
}
export const loginUser = (isAuthenticated) => ({
    type: 'LOGIN_USER',
    payload: isAuthenticated
  });