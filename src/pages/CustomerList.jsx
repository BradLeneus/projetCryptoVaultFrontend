import  'react';
import axios from "axios";
import {useEffect, useState} from "react";
import error from "eslint-plugin-react/lib/util/error.js";
function CustomerList() {




    const charge_page = function (){
            // http://localhost:8586/oui marche pas => repositoryrest
            //https://jsonplaceholder.typicode.com/users marche => api normal

            axios.get("http://localhost:8586/samuel/getAll"

                )
                .then(response => {
                    setListUser(response.data);




                })
                .catch(error=> console.log((error)))
    }

    useEffect(() => {
        // fait l'appelle a chaque __ temps
        charge_page()
    },[])

    const [listUser, setListUser] = useState([])
    // fait l'appelle des le chargement de la page

    // http://localhost:8586/oui marche pas => repositoryrest
    //https://jsonplaceholder.typicode.com/users marche => api normal

    return (
        <div>
            <h1> TabUser</h1>
            <table className="">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">fame</th>
                    <th scope="col">lame</th>
                    <th scope="col">Email</th>


                </tr>


                </thead>
                <tbody>

                {
                    listUser.map((ligne, i) => (
                        <tr key={i}>
                            <th scope="row">{ligne.id}</th>
                            <th scope="row">{ligne.fname}</th>
                            <th scope="row">{ligne.lname}</th>



                        </tr>)
                    )
                }







                </tbody>
            </table>

        </div>
    );
}

export default CustomerList;