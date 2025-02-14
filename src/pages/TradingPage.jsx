import  'react';
import axios from "axios";
import {useEffect, useState} from "react";
import error from "eslint-plugin-react/lib/util/error.js";
function TradingPage() {

    const charge_page = function (){
        // http://localhost:8586/oui marche pas => repositoryrest
        //https://jsonplaceholder.typicode.com/users marche => api normal

        axios.get("http://localhost:8586/crypto/getall"




        )
            .then(response => {
                setListUser(response.data)
            })
            .catch(error=> console.log((error)))
    }

    useEffect(() => {
        // fait l'appelle a chaque __ temps
        let time = setInterval(charge_page,2000)
    },[])

    const [listUser, setListUser] = useState([])
    // fait l'appelle des le chargement de la page

    // http://localhost:8586/oui marche pas => repositoryrest
    //https://jsonplaceholder.typicode.com/users marche => api normal

    return (
        <div>
            <h1> Crypto Price</h1>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">name</th>
                    <th scope="col">price</th>


                </tr>
                </thead>
                <tbody>
                {/* le i increment automatiquement
    cela permet de ne jamais avoir de ligne dupliquer*/}
                {
                    listUser.map((ligne, i) => (
                        <tr key={i}>
                            <th scope="row">{ligne.id}</th>
                            <th scope="row">{ligne.name}</th>
                            <th scope="row">{ligne.price}</th>


                        </tr>)
                    )
                }

                </tbody>
            </table>

        </div>
    );
}

export default TradingPage;