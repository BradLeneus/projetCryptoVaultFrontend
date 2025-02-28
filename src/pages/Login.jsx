import  'react';
import axios from "axios";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import WalletPage from "./WalletPage.jsx";
import DataComp from "./DataComp.jsx";



var customerid;
function Login() {

    const navigate = useNavigate()
    const [listUser, setListUser] = useState([])



    const callTwoTimes = function (){

        for (let i = 0; i < 2; i++) {
           ch()
        }
    }
    const ch = function (){
        let firstname = document.getElementById("firstname").value
        let password = document.getElementById("password").value

        //
        axios.get(`http://localhost:8586/samuel/getCustomer/${firstname}/${password}`

        )

            .then(response => {
                setListUser(response.data);
                customerid = response.data.id
                document.getElementById("idValue").value =customerid



            })
            .catch(error=> console.log((error)))

    }
    const navigateToView = function (){
        if(customerid!= null){

            var path = "/Wallet/" + customerid
            navigate(path)
        }

    }
    useEffect(() => {



    },[])


    // fait l'appelle des le chargement de la page

    // http://localhost:8586/oui marche pas => repositoryrest
    //https://jsonplaceholder.typicode.com/users marche => api normal

    return (<div>
            <DataComp id={2}/>
             <div id={"idValue"} className="container mt-5">

                 <div className="row justify-content-lg-start">
                                                <div className="col-md-6">
                                            <h2 className="mb-4">Login Page</h2>

                                            <div className="mb-3">
                                                <label htmlFor="firstname"
                                                       className="form-label text-start d-block">Username</label>
                                                <input type="text" name="fname" className="form-control" id="firstname"
                                                       placeholder="Username"
                                                       required

                                                />
                                            </div>

                                            <div className="mb-3 ">
                                                <label htmlFor="lastname"
                                                       className="form-label text-start d-block">Password</label>
                                                <input type="text" name="lname" className="form-control"
                                                       id="password"
                                                       placeholder="Password"
                                                       required

                                                />
                                            </div>


                                            <button onClick={ch} className="btn btn-primary">Submit</button>
                                            <button onClick={navigateToView} className="btn btn-primary">VIew Profile</button>

                                        </div>

                                    </div>
             </div>
            <div>


                       <h1>{listUser.id}</h1>



            </div>
        </div>
    );
}


export default Login;