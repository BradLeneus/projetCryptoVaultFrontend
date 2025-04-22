import 'react';
import React, {useState} from "react";
import axios from "axios";
import "../Css/SignUp.css"
import {useNavigate} from "react-router-dom";
import path from "node:path";



function SignUp() {
    const [customer, setCustomer] = useState({
        fname:"ss",
        lname:"ss",
        email:"aa",

    }


    );

    const changement = (e) =>{

        setCustomer({...customer, [e.target.name]:e.target.value})
    }

    const navigate = useNavigate();


    const isUsernameAlreadyTaken = async (name) =>{
        let text = document.getElementById("labelTakenUsername")
        const result = await axios.get(`http://localhost:8586/Customer/getByName/${name}`)

        if(!result.data){
            createCustomer()
            text.className = "invisible"
        }
        else {

            text.className = "visible"

        }
    }
    const createCustomer = () => {
        axios.post("http://localhost:8586/Customer/newCustomer", customer)
            .then(() =>{
                navigate("/Login")
            }).catch((error) =>{
            console.log(error)
        })
    }

    const submitNewCustomer = (e) =>{
        e.preventDefault()
        isUsernameAlreadyTaken(customer.fname)
    }
    return (
        <div>

            <div className="container inscription mt-5">
                <div className="row justify-content-lg-start">
                    <div className={"logoCryptoVault"}>
                    <svg width="180" height="56" viewBox="0 0 180 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="Ellipse 1"
                              d="M0.679412 25.7887C207.616 30.9031 41.4171 -0.712913 90.8315 0.508356C140.246 1.72963 180 15.0274 179.625 30.2113C179.249 45.3952 138.887 56.7129 89.4726 55.4916C103.648 28.3323 0.304144 40.9726 0.679412 25.7887Z"
                              fill="#395CCF"/>
                    </svg>
                </div>
                    <div className="">
                        <h2 className="mb-4" id={"h2SignUp"}>Sign Up </h2>
                        <form className="form-detail" onSubmit={(e) => submitNewCustomer(e)} method="post">
                            <div className="mb-3">

                                <label htmlFor="firstname" className="form-label text-start d-block" style={{color:"white"}}>Username <text
                                    className="invisible" id="labelTakenUsername">Already Taken</text></label>
                                <input type="text" name="fname" className="form-control" id="firstname"
                                       placeholder="Username"
                                       required
                                       onChange={(e) => changement(e)}
                                />
                            </div>
                            <div className="mb-3 ">
                                <label htmlFor="lastname" className="form-label text-start d-block" style={{color:"white"}}>Password</label>
                                <input type="text" name="lname" className="form-control" id="lastname"
                                       placeholder="Password"
                                       required
                                       onChange={(e) => changement(e)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label text-start d-block" style={{color:"white"}}>Email</label>
                                <input type="email" name="email" className="form-control" id="email"
                                       placeholder="Enter your email"
                                       required
                                       onChange={(e) => changement(e)}
                                />
                            </div>
                            <button id="btnSignUp" type="submit" className="btn btn-primary">Submit</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default SignUp;