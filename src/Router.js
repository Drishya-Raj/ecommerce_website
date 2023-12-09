import { BrowserRouter, Route, Routes, Redirect, Navigate, useNavigate, Link } from 'react-router-dom';
import Main from './components/Home';
import ProductDetails from './components/productDetails';
import MobDetails from './components/mobileDetails';
import ListView from './components/ListView';
import MyCart from './components/MyCart';
import SignUp from './components/signup';
import { Provider, useDispatch } from 'react-redux';
import store from './Redux/store';
import LoginPage from './components/loginPage';
import SectionSix from './components/sectionSix';
import MensClothing from './components/mensClothing';
import SignIn from './components/signIn';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Notfound from './components/Notfound';
import Hamburger from './components/hamburger';
import { useSelector } from 'react-redux';
import Payment from './components/payment';

const Router = () => {
    const isAuthenticated = useSelector((state) => state.isAuthenticated);
  
    return (
        <Provider store={store}>
            <BrowserRouter >
                <Navbar />
                <Hamburger />
                <Routes>
                    {isAuthenticated ?
                        (<Route path='*' element={<Navigate to='/404' />} />
                        ) :
                        (<>
                            <Route path='/' element={<SignUp />} />
                            <Route path="/home" element={<Main />} />
                            <Route path='/mobdetails' element={<MobDetails />} />
                            <Route path='/productDetails' element={<ProductDetails />} />
                            <Route path='/gridview' element={<MobDetails />} />
                            <Route path='/listview' element={<ListView />} />
                            <Route path='/myCart' element={<MyCart />} />
                            <Route path='/profile' element={<LoginPage />} />
                            <Route path='/sectionsix' element={<SectionSix />} />
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
        </Provider>

    )
}
export default Router;