import React, { useState, useEffect, createContext } from "react";
import Router from "./Router";
import Notfound from "./components/Notfound";
import store from './Redux/store';
import { Provider } from "react-redux";
import Payment from "./components/payment";

export const authContext = createContext();
function App() {

 
  return (
    // <Provider store={store}>
    // <Router />
    // </Provider >
    <Payment />
  );
}

export default App;
