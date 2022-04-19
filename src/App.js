import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import NotFound from './components/Shared/NotFound/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Register from './components/Login/Register/Register';
import Login from './components/Login/Login/Login';
import FullGallery from './components/Shared/FullGallery/FullGallery';
import RequireAuth from './components/Login/RequireAuth/RequireAuth';
import Checkout from './components/Checkout/Checkout';
function App() {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path='/' element={<Home></Home>} />
                <Route path='/home' element={<Home></Home>} />
                <Route path='/login' element={<Login></Login>} />
                <Route path='/gallery' element={<RequireAuth>
                    <FullGallery></FullGallery>
                </RequireAuth>} />
                <Route path='/register' element={<Register></Register>} />/
                <Route path='/checkout' element={<RequireAuth>
                    <Checkout></Checkout>
                </RequireAuth>} />
                <Route path='*' element={<NotFound></NotFound>} />
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
