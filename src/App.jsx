import React, { useState, useEffect, createContext } from "react";
import Router from "./Router";
import store from './Redux/store';
import { Provider } from "react-redux";

export const authContext = createContext();
function App() {

 
  return (
    <Provider store={store}>
    <Router />
    </Provider >
  );
}

export default App;
