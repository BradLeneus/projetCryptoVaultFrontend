import  'react';
import axios from "axios";
import {useEffect, useState} from "react";
import error from "eslint-plugin-react/lib/util/error.js";
function TradingPage(props) {
    useEffect(() => {
        charge_page()
    }, []);
    const charge_page = async () =>{
       const result = await
        axios.get("http://localhost:8586/crypto/getall")
        setListUser(result.data)
    }



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
                    <th scope="col">ticker</th>


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
                            <th scope="row">{ligne.ticker}</th>


                        </tr>)
                    )
                }

                </tbody>
            </table>

        </div>
    );
}

export default TradingPage;