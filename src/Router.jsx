import { BrowserRouter, Route, Routes, Navigate, } from 'react-router-dom';
import Main from './components/pages/Home';
import ProductDetails from './components/pages/productDetails';
import MobDetails from './components/pages/mobileDetails';
import ListView from './components/pages/ListView';
import MyCart from './components/pages/MyCart';
import SignUp from './components/pages/signup';
import { Provider} from 'react-redux';
import store from './Redux/store';
import LoginPage from './components/pages/loginPage';
import SectionSix from './components/sectionSix';
import MensClothing from './components/pages/mensClothing';
import SignIn from './components/pages/signIn';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Notfound from './components/pages/Notfound';
import Hamburger from './components/pages/hamburger';
import { useSelector } from 'react-redux';
import Payment from './components/pages/payment';

const Router = () => {
    const isAuthenticated = useSelector((state) => state.isAuthenticated);
  
    return (
        <Provider store={store}>
            <BrowserRouter >
                <Navbar />
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