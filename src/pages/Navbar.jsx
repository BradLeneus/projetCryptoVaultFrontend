import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import '../Css/Navbar.css'
import * as path from "node:path";
import Button from "bootstrap/js/src/button.js";
import customerList from "./CustomerList.jsx";

function Navbar() {
    const nav = useNavigate()
    const [id, setId] = useState(0)

    const verifiePath = () =>{
        let path = ""
        let localId = localStorage.getItem("idCustomer")
        if(localId != null){
            // ancienne methode
            //path = "/Wallet/" + localId
            path = "/Wallet"
            nav(path)
        }
        else {

            path = "/Wallet/" + 0
            var button = document.getElementById("modalButton")
            button.click()

        }

    }
    const SupprimerId = () => {

        localStorage.removeItem("idCustomer")
        nav("/")
    }

    return (
        <div>
            {/*Modal*/}
            <button type="button" id={"modalButton"} className="btn btn-primary invisible" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="position-absolute top-50 start-50">
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel"></h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <p>Veuillez vous connecter</p>
                            </div>
                            <div className="modal-footer">
                                <Link to="/Login">
                                    <button className="m-2 my-2 navButton " type="button" data-bs-dismiss="modal">Login</button>
                                </Link>
                                <Link to="/SignUp">
                                    <button className="m-2 my-2 navButton " type="button" data-bs-dismiss="modal">Sign Up</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="navbar fixed-top justify-content-between" id={"navBar"}>
                <svg width="180" height="56" viewBox="0 0 180 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Ellipse 1"
                          d="M0.679412 25.7887C207.616 30.9031 41.4171 -0.712913 90.8315 0.508356C140.246 1.72963 180 15.0274 179.625 30.2113C179.249 45.3952 138.887 56.7129 89.4726 55.4916C103.648 28.3323 0.304144 40.9726 0.679412 25.7887Z"
                          fill="#395CCF"/>
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
                    <text onClick={verifiePath}>
                        <text className={"pagesName"}>My Wallet</text>

                    </text>


                    &nbsp;
                    <Link to="/About">
                        <text className={"pagesName"}>About</text>
                    </Link>
                    &nbsp;

                    {localStorage.getItem("idCustomer") != null ? <button className="navButton" onClick={SupprimerId}>logout</button> :<Link to="/Login">
                        <button className="m-2 my-2 navButton " type="button">Login</button>
                    </Link>}
                    {localStorage.getItem("idCustomer") != null ? null : <Link to="/SignUp">
                        <button className="m-2 my-2 navButton " type="button">Sign Up</button>
                    </Link>}



                </form>
            </nav>
        </div>
    );
}

export default Navbar;