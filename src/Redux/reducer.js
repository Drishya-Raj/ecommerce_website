import { loginUser } from "./action";

const initialState = {
    // username : ''
    username: localStorage.getItem('username') || '',
    emailId :  localStorage.getItem('emailId'),
    passwords :  localStorage.getItem('passwords'),
    isAuthenticated : 'false'
};

const Reducers = (state = initialState , action) => {
    switch(action.type){
        case 'ADD_USER':
            localStorage.setItem('username', action.payload); 
            return{
                ...state,
                username: action.payload,
            };
        case 'ADD_EMAIL' :
            localStorage.setItem('email', action.payload);
            return{
                ...state,
                email : action.payload
            };
        case 'ADD_PASSWORD':
            localStorage.setItem('email', action.payload);
            return{
                ...state,
                password : action.payload
                
            }    
            case 'LOGIN_USER':
                localStorage.setItem('isAuthenticated', action.payload);
                return {
                  ...state,
                  isAuthenticated: action.payload.isAuthenticated,
                };
          
        default:
            return state;    
    }
};
export default Reducers;