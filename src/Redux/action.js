import { ADD_EMAIL, ADD_PASSWORD, ADD_TO_CART, ADD_USER, LOGIN_USER , FETCH_SUCCESS} from "./actionTypes";

export const setUsername = (username) => {
    return{
        type : ADD_USER,
        payload : username,
    };
    
}
export const setEmailId =  (email) =>{
    return {
        type : ADD_EMAIL,
        payload : email
    };
}

export const setPassword = (password) =>{
    return{
        type : ADD_PASSWORD,
        payload : password
    }
}
export const loginUser = (isAuthenticated) => ({
    type: LOGIN_USER,
    payload: isAuthenticated
  });

export const setAddedItems = (addedItems) =>({
    type: ADD_TO_CART,
    payload :addedItems
})

export const fetchDataSuccess = (data) => ({
    type : FETCH_SUCCESS,
    payload : data
})
 