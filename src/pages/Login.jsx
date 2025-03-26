import  'react';
import axios from "axios";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import WalletPage from "./WalletPage.jsx";
import DataComp from "./DataComp.jsx";
import "../Css/Login.css"


var customerid;
function Login() {

    const navigate = useNavigate()
    const [listUser, setListUser] = useState([])





    // recupere l'id du customer si le username et le password match dans la bd
    const getCustomer = async () =>{
        let firstname = document.getElementById("firstname").value
        let password = document.getElementById("password").value

        //
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
            var path = "/Wallet/" + customerid

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
                     <div className="col-md-6">
                         <h2 className="mb-4">Login Page</h2>
                         <div className="mb-3">
                             <label htmlFor="firstname" className="form-label text-start d-block">Username</label>
                             <input type="text" name="fname" className="form-control inputText" id="firstname" placeholder="Username" required/>
                         </div>
                         <div className="mb-3 ">
                             <label htmlFor="lastname" className="form-label text-start d-block">Password</label>
                             <input type="text" name="lname" className="form-control inputText" id="password" placeholder="Password" required/>
                         </div>
                         <button id="btnLogin" onClick={getCustomer} className="btn btn-primary">Submit</button>
                     </div>
                 </div>
             </div>


        </div>
    );
}


export default Login;