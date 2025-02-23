
import './App.css';
import 'react';

import{BrowserRouter, Routes, Route} from "react-router-dom";
import NotFound from "./pages/NotFound.jsx";
import CreateCustomer from "./pages/CreateCustomer.jsx";
import CustomerList from "./pages/CustomerList.jsx";
import HomePage from "./pages/HomePage.jsx";
import WalletPage from "./pages/WalletPage.jsx";
import TradingPage from "./pages/TradingPage.jsx";
import Navbar from "./pages/Navbar.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import Login from "./pages/Login.jsx";
import Footer from "./pages/Footer.jsx";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/SignIn" element={<CreateCustomer/>}/>
                    <Route path="/Wallet" element={<WalletPage/>}/>
                    <Route path="/Trading" element={<TradingPage/>}/>
                    <Route path="/About" element={<AboutPage/>}/>

                    <Route path="/customersList" element={<CustomerList/>}/>
                    <Route path="*" element={<NotFound/>}/>
                    <Route path="Login" element={<Login/>}/>
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>

    );
}

export default App;