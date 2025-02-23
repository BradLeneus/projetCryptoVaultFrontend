import 'react';
import {useState} from "react";
import axios from "axios";

import {useNavigate} from "react-router-dom";
import error from "eslint-plugin-react/lib/util/error.js";

function SignUp() {

    const [customer, setCustomer] = useState({
        fname:"",
        lname:"",
        email:"",

    }


    );

    const changement = (e) =>{

        setCustomer({...customer, [e.target.name]:e.target.value})
    }

    const navigate = useNavigate();

    const submitNewCustomer = (e) =>{
        e.preventDefault()
        // le premier / c'est le nom du controller => RequestMapping
        // le deuxieme / c'est le mapping => PostMapping
        // le port c'est pas le port de la bd c'est le port server.port dans app.prop

        axios.post("http://localhost:8586/samuel/newCustomer", customer)
            .then(() =>{
                navigate("/customersList")
            }).catch((error) =>{
                console.log(error)
        })
    }

    return (
        <div>

            <div className="container mt-5">
                <div className="row justify-content-lg-start">
                    <div className="col-md-6">
                        <h2 className="mb-4">Login Page</h2>
                        <form className="form-detail" onSubmit={(e) => submitNewCustomer(e)} method="post">
                            <div className="mb-3">
                                <label htmlFor="firstname" className="form-label text-start d-block">Username</label>
                                <input type="text" name="fname" className="form-control" id="firstname"
                                       placeholder="Username"
                                       required
                                       onChange={(e) => changement(e)}
                                />
                            </div>

                            <div className="mb-3 ">
                                <label htmlFor="lastname" className="form-label text-start d-block">Password</label>
                                <input type="text" name="lname" className="form-control" id="lastname"
                                       placeholder="Password"
                                       required
                                       onChange={(e) => changement(e)}
                                />
                            </div>


                            <div className="mb-3">
                                <label htmlFor="email" className="form-label text-start d-block">Email</label>
                                <input type="email" name="email" className="form-control" id="email"
                                       placeholder="Enter your email"
                                       required
                                       onChange={(e) => changement(e)}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default SignUp;