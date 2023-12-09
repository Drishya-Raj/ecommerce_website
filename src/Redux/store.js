import {createStore, applyMiddleware} from 'redux';
import Reducers from './reducer';
import thunk from 'redux-thunk';

const store = createStore(Reducers, applyMiddleware(thunk));

store.subscribe(()=>{
    console.log("current state===>",store.getState());
    
})

export default store;