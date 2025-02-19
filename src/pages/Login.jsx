import  'react';
import axios from "axios";
import {useEffect, useState} from "react";



function Login() {


    // recupere l'id du customer si il existe
    const ch = function (){
        let firstname = document.getElementById("firstname").value
        let password = document.getElementById("password").value
        console.log(firstname)
        console.log(password)
        axios.get(`http://localhost:8586/samuel/getCustomer/${firstname}/${password}`

        )

            .then(response => {
                setListUser(response.data);






            })
            .catch(error=> console.log((error)))

    }
    useEffect(() => {
        ch()
        // fait l'appelle a chaque __ temps

    },[])

    const [listUser, setListUser] = useState([])
    // fait l'appelle des le chargement de la page

    // http://localhost:8586/oui marche pas => repositoryrest
    //https://jsonplaceholder.typicode.com/users marche => api normal

    return (<div>

             <div className="container mt-5">
                                    <div className="row justify-content-lg-start">
                                        <div className="col-md-6">
                                            <h2 className="mb-4">Login Page</h2>

                                                <div className="mb-3">
                                                    <label htmlFor="firstname" className="form-label text-start d-block">Username</label>
                                                    <input type="text" name="fname" className="form-control" id="firstname"
                                                           placeholder="Username"
                                                           required

                                                    />
                                                </div>

                                                <div className="mb-3 ">
                                                    <label htmlFor="lastname" className="form-label text-start d-block">Password</label>
                                                    <input type="text" name="lname" className="form-control"
                                                           id="password"
                                                           placeholder="Password"
                                                           required

                                                    />
                                                </div>


                                                <button onClick={ch} className="btn btn-primary">Submit</button>

                                        </div>

                                    </div>
             </div>
            <div>

                <table>
                    <tr>
                        <th>{listUser.id}</th>
                        <th>{listUser.fname}</th>
                    </tr>
                </table>

            </div>
        </div>
    );
}

export default Login;