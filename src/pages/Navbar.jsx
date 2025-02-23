import React from 'react';
import {Link} from "react-router-dom";
import '../Css/Navbar.css'
function Navbar() {
    return (
        <div>
            <nav className="navbar fixed-top navbar justify-content-between" id={"navBar"}>
                <svg width="180" height="56" viewBox="0 0 180 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Ellipse 1" d="M0.679412 25.7887C207.616 30.9031 41.4171 -0.712913 90.8315 0.508356C140.246 1.72963 180 15.0274 179.625 30.2113C179.249 45.3952 138.887 56.7129 89.4726 55.4916C103.648 28.3323 0.304144 40.9726 0.679412 25.7887Z" fill="#395CCF"/>
                </svg>

                <text className="m-2" id="nomApp">CryptoVault</text>
                <form className="form-inline">


                    <Link to="/">
                        <text className={"pagesName"}>Home</text>
                    </Link>
                    &nbsp;
                    <Link to="/Trading">
                        <text className={"pagesName"}>Trading Prices</text>
                    </Link>
                    &nbsp;
                    <Link to="/Wallet">
                      <text className={"pagesName"}>My Wallet</text>
                    </Link>
                    &nbsp;
                    <Link to="/About">
                        <text className={"pagesName"}>About</text>
                    </Link>
                    &nbsp;


                    <Link to="/Login">
                        <button className="m-2 my-2 " type="button">Login</button>
                    </Link>
                    <Link to="/SignUp">
                        <button className="m-2 my-2 " type="button">Sign In</button>
                    </Link>


                </form>
            </nav>
        </div>
    );
}

export default Navbar;