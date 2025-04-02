import  'react';
import axios from "axios";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import WalletPage from "./WalletPage.jsx";
import DataComp from "./DataComp.jsx";
import "../Css/Login.css"
import path from "node:path";


var customerid;
function Login() {

    const navigate = useNavigate()
    const [listUser, setListUser] = useState([])





    // recupere l'id du customer si le username et le password match dans la bd
    const getCustomer = async () =>{
        let firstname = document.getElementById("firstname").value
        let password = document.getElementById("password").value


       const result = await axios.get(`http://localhost:8586/samuel/getCustomer/${firstname}/${password}`)
                setListUser(result.data);
                customerid = result.data.id
                document.getElementById("idValue").value =customerid

        navigateToView()
    }

    // si un customer est trouver, envoie vers le wallet.
    const navigateToView = function (){

        if(customerid!= null){
            localStorage.setItem("idCustomer",customerid )
            // ancienne methode
            //var path = "/Wallet/" + customerid
            var path = "/Wallet"
        }
        // id de l'admin exemple
        if(customerid == 5){
            path = "/customersList"
        }
        navigate(path)
    }





    return (

        <div>

            <div id={"idValue"} className="container mt-5">

                <div className="row justify-content-lg-start">

                    <div className={"logoCryptoVault"}>
                    <svg width="180" height="56" viewBox="0 0 180 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="Ellipse 1"
                              d="M0.679412 25.7887C207.616 30.9031 41.4171 -0.712913 90.8315 0.508356C140.246 1.72963 180 15.0274 179.625 30.2113C179.249 45.3952 138.887 56.7129 89.4726 55.4916C103.648 28.3323 0.304144 40.9726 0.679412 25.7887Z"
                              fill="#395CCF"/>
                    </svg>
                    </div>
                    <div className="">
                        <h2 id={"h2Login"}>Login Page</h2>
                        <div className="mb-3">
                            <label htmlFor="firstname" className="form-label text-start d-block" style={{color:"white"}}>Username</label>
                            <input type="text" name="fname" className="form-control inputText"
                                   id="firstname" placeholder="Username" required/>
                        </div>
                        <div className="mb-3 ">
                            <label htmlFor="lastname" className="form-label text-start d-block" style={{color:"white"}}>Password</label>
                            <input type="text" name="lname" className="form-control inputText"
                                   id="password" placeholder="Password" required/>
                        </div>
                        <button id="btnLogin" onClick={getCustomer} className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>


        </div>
    );
}


export default Login;