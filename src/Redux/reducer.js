import { ADD_USER, ADD_EMAIL, ADD_PASSWORD, LOGIN_USER, ADD_TO_CART, FETCH_SUCCESS, TOTAL_SUM, FILTER_DATA } from './actionTypes'

const initialState = {
    // username : ''
    username: localStorage.getItem('username') || '',
    emailId: localStorage.getItem('emailId'),
    passwords: localStorage.getItem('passwords'),
    isAuthenticated: false,
    data: null,
    cartItems: [],
    total: 0,
    filterData: []
};

const Reducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            localStorage.setItem('username', action.payload);
            return {
                ...state,
                username: action.payload,
            };
        case ADD_EMAIL:
            localStorage.setItem('email', action.payload);
            return {
                ...state,
                email: action.payload
            };
        case ADD_PASSWORD:
            localStorage.setItem('email', action.payload);
            return {
                ...state,
                password: action.payload

            }
        case LOGIN_USER:
            localStorage.setItem('isAuthenticated', action.payload);
            return {
                ...state,
                isAuthenticated: action.payload.isAuthenticated,
            };

        case ADD_TO_CART:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                data: action.payload
            }
        case TOTAL_SUM:
            return {
                ...state,
                total: action.payload

            }
        case FILTER_DATA:
            return {
                ...state,
                filterData: action.payload
            }

        default:
            return state;
    }
};
export default Reducers;