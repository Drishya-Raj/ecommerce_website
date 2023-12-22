import { BrowserRouter, Route, Routes, Navigate, } from 'react-router-dom';
import Main from './components/HomePage/Home';
import React,{useState} from 'react';
import ProductDetails from './components/MensPage/productDetails';
import MobDetails from './components/MobileDetailsPage/mobileDetails';
import MyCart from './components/CartPage/MyCart';
import SignUp from './components/Register/signup';
import { Provider} from 'react-redux';
import store from './Redux/store';
import LoginPage from './components/HomePage/loginPage';
import MensClothing from './components/MensPage/mensClothing';
import SignIn from './components/Register/signIn';
import Footer from './components/footer';
import Notfound from './components/pages/Notfound';
import Hamburger from './components/pages/hamburger';
import { useSelector } from 'react-redux';
import Payment from './components/Payment/payment';
import { createContext } from 'react';

export const cartContext = createContext();

const Router = () => {
    const isAuthenticated = useSelector((state) => state.isAuthenticated);
    const [addedItems, setAddedItems] = useState([]);
    return (
        <cartContext.Provider value={{ addedItems, setAddedItems }}>
        {/* <Provider store={store}> */}
            <BrowserRouter >
                <Hamburger />
                <Routes>
                    {!isAuthenticated ?
                        (<Route path='*' element={<Navigate to='/404' />} />
                        ) :
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
                            <Route path='/mensclothing' element={<MensClothing />} />
                        </>)
                    }
                    <Route path="signUp" element={<SignUp />} />
                    <Route path='/signIn' element={<SignIn />} />
                    <Route path='/' element={<SignUp />} />
                    <Route path='/404' element={<Notfound />} />
                    <Route path="/payment" element={<Payment />} />
                    
                </Routes>
            <Footer />
            </BrowserRouter>
        {/* </Provider> */}
        </cartContext.Provider>

    )
}
export default Router;