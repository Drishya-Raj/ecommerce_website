import React, { useState, useEffect, createContext } from "react";
import Router from "./Router";
import store from './Redux/store';
import { Provider } from "react-redux";
import ApiComponent from "./components/api/api";

export const authContext = createContext();
function App() {


  return (
    <Provider store={store}>
      <Router />
     <ApiComponent />
    </Provider >
  );
}

export default App;
