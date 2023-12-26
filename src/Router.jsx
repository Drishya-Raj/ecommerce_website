import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate, } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { createContext } from 'react';
import {Main,ProductDetails,MobDetails,MyCart,SignIn,SignUp,Footer,Notfound,Hamburger,Payment,LoginPage} from './assets/files/files'

export const cartContext = createContext();

const Router = () => {
    const isAuthenticated = useSelector((state) => state.isAuthenticated);
    const [addedItems, setAddedItems] = useState([]);
    const [productId, setProductId] = useState('');
    return (
        <cartContext.Provider value={{ addedItems, setAddedItems ,productId,setProductId}}>
            <BrowserRouter >
                <Hamburger />
                <Routes>
                    {!isAuthenticated ?
                        (<Route path='*' element={<Navigate to='/404' />} />) :
                        (<>
                            <Route path='/' element={<SignUp />} />
                            <Route path="/home" element={<Main />} />
                            <Route path='/mobdetails' element={<MobDetails />} />
                            <Route path='/productDetails' element={<ProductDetails />} />
                            <Route path='/gridview' element={<MobDetails />} />
                            <Route path='/myCart' element={<MyCart />} />
                            <Route path='/profile' element={<LoginPage />} />
                            <Route path='/signUp' element={<SignUp />} />
                            <Route path='/signIn' element={<SignIn />} />
                        </>)}
                    <Route path="signUp" element={<SignUp />} />
                    <Route path='/signIn' element={<SignIn />} />
                    <Route path='/' element={<SignUp />} />
                    <Route path='/404' element={<Notfound />} />
                    <Route path="/payment" element={<Payment />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </cartContext.Provider>

    )
}
export default Router;