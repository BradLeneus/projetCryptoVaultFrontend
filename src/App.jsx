

import 'react';

import{BrowserRouter, Routes, Route} from "react-router-dom";
import NotFound from "./pages/NotFound.jsx";
import SignUp from "./pages/SignUp.jsx";
import CustomerList from "./pages/CustomerList.jsx";
import HomePage from "./pages/HomePage.jsx";
import WalletPage from "./pages/WalletPage.jsx";
import TradingPage from "./pages/TradingPage.jsx";
import Navbar from "./pages/Navbar.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import Login from "./pages/Login.jsx";
import Footer from "./pages/Footer.jsx";


import DataComp from "./pages/DataComp.jsx";
import SongPage from "./pages/SongPage.jsx";

function App() {
    return (
        <BrowserRouter>

            <div>

                <Navbar/>
                <div>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/SignUp" element={<SignUp/>}/>
                        <Route path="/Wallet" element={<WalletPage/>}/>
                        {/* id={}*/}
                        <Route path="/Trading" element={<TradingPage/>}/>
                        <Route path="/About" element={<AboutPage/>}/>
                        <Route path="/Data" element={<DataComp/>}/>

                        <Route path="/customersList" element={<CustomerList/>}/>

                        <Route path="*" element={<NotFound/>}/>
                        <Route path="/Login" element={<Login/>}/>
                        <Route path="/Song" element={<SongPage/>}/>


                    </Routes>
                </div>


                <Footer/>
            </div>
        </BrowserRouter>

    );
}

export default App;