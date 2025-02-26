import  'react';
import axios from "axios";
import {useEffect, useState} from "react";
import error from "eslint-plugin-react/lib/util/error.js";


function WalletPage(props) {
    const sendData = function (id){
        console.log(id)
    }
    const charge_page = function (){
        // http://localhost:8586/oui marche pas => repositoryrest
        //https://jsonplaceholder.typicode.com/users marche => api normal
        var path = "http://localhost:8586/wallet/" + props.id
        axios.get(path)
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
            <h1> TabUser</h1>


            {/* eslint-disable-next-line react/prop-types */}


            <table className="">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Id P</th>
                    <th scope="col">Name</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Prix unitaire</th>
                    <th scope="col">Prix total</th>

                </tr>
                </thead>
                <tbody>
                {/* le i increment automatiquement
    cela permet de ne jamais avoir de ligne dupliquer*/}
                {
                    listUser.map((ligne, i) => (
                        <tr key={i}>
                            <th scope="row">{ligne.id}</th>
                            <th scope="row">{ligne.customer.id}</th>
                            <th scope="row">{ligne.idcrypto.name}</th>
                            <th scope="row">{ligne.qty}</th>
                            <th scope="row">{ligne.idcrypto.price}</th>
                            <th scope="row">{ligne.qty * ligne.idcrypto.price}</th>
                            <th><input type={"number"} style={{width: "80px"}} name={ligne.id}/></th>
                            <th>
                                <button onClick={sendData(ligne.id)} className={"btn btn-primary"} name={ligne.id}>Add
                                </button>
                            </th>


                        </tr>)
                    )
                }

                </tbody>
            </table>

        </div>
    );
}

export default WalletPage;