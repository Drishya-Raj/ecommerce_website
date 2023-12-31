import { ADD_EMAIL, ADD_PASSWORD, ADD_TO_CART, ADD_USER, LOGIN_USER , FETCH_SUCCESS,TOTAL_SUM,FILTER_DATA,ORDER_ITEM} from "./actionTypes";

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

export const setCartItems = (cartItems) =>({
    type: ADD_TO_CART,
    payload :cartItems
})

export const fetchDataSuccess = (data) => ({
    type : FETCH_SUCCESS,
    payload : data
})
export const setTotal = (total) =>({
    type: TOTAL_SUM,
    payload: total
})
export const setFilterData = (filterData) =>({
    type:FILTER_DATA,
    payload: filterData,
})
export const orderCart = (cart) => ({
    type:ORDER_ITEM,
    payload:cart
})

 