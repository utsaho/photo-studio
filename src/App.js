import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import NotFound from './components/Shared/NotFound/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path='/' element={<Home></Home>} />
                <Route path='*' element={<NotFound></NotFound>} />
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
