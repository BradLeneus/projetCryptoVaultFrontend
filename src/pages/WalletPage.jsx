import  'react';
import axios from "axios";
import {useEffect, useState} from "react";
import error from "eslint-plugin-react/lib/util/error.js";
import {getElement} from "bootstrap/js/src/util/index.js";
import TradingPage from "./TradingPage.jsx";
import "../Css/WalletPage.css"
import {useParams} from "react-router-dom";


function WalletPage(props) {
    const {userId} = useParams()
    const [etat, setEtat] = useState(false)

    const sendData = function (id){
        console.log(id)
    }
    const [listCryptoUser, setListCryptoUser] = useState([])
    const charge_page = function (){

        axios.get(`http://localhost:8586/wallet/getbyuser/${userId}`)
            .then(response => {
                setListCryptoUser(response.data)
            })
            .catch(error=> console.log((error)))
    }
    const appelleCryptoDuUser = function (){

        axios.get("http://localhost:8586/crypto/getall")
            .then(response => {
                setListUser(response.data)
            })
            .catch(error=> console.log((error)))
    }

    useEffect(() => {
        charge_page()
        appelleCryptoDuUser()

    },[])

    const [listUser, setListUser] = useState([])
    // fait l'appelle des le chargement de la page

    // http://localhost:8586/oui marche pas => repositoryrest
    //https://jsonplaceholder.typicode.com/users marche => api normal
    const handleChange = function (){
      if(etat){
          document.getElementById("ajoutCrypto").style.display = "none";
          document.getElementById("userCrypto").style.display = "block";
          document.getElementById("changeDisplay").innerText = "ajouter cryptos"
      }
      else {
          document.getElementById("ajoutCrypto").style.display = "block";
          document.getElementById("userCrypto").style.display = "none";
          document.getElementById("changeDisplay").innerText = "voir vos cryptos"
      }
      setEtat(!etat)
    }
    return (
        <div>
            <button id="changeDisplay" onClick={handleChange}>ajouter cryptos</button>
            <div id="userCrypto">
                <h1> TabUser</h1>
                <table className="">
                    <thead>
                    <tr>


                        <th scope="col">Name</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Prix unitaire</th>
                        <th scope="col">$USD</th>

                    </tr>
                    </thead>
                    <tbody>
                    {/* le i increment automatiquement
    cela permet de ne jamais avoir de ligne dupliquer*/}
                    {
                        listCryptoUser.map((ligne, i) => (
                            <tr key={i}>



                                <th scope="row">{ligne.idcrypto.name}</th>
                                <th scope="row">{ligne.qty}</th>
                                <th scope="row">{ligne.idcrypto.price}</th>
                                <th scope="row">{ligne.qty * ligne.idcrypto.price}</th>

                                <th>

                                </th>


                            </tr>)
                        )
                    }
                    </tbody>
                </table>
            </div>
            <div id="ajoutCrypto">

                <table className="">
                    <thead>
                    <tr>

                        <th scope="col">Id</th>
                        <th scope="col">price</th>
                        <th scope="col">name</th>


                    </tr>
                    </thead>
                    <tbody>
                    {/* le i increment automatiquement
    cela permet de ne jamais avoir de ligne dupliquer*/}
                    {
                        listUser.map((ligne, i) => (
                            <tr key={i}>

                                <th scope="row">{ligne.id}</th>
                                <th scope="row">{ligne.price}</th>
                                <th scope="row">{ligne.name}</th>


                                <th><input type={"number"} style={{width: "80px"}} name={ligne.id}/></th>
                                <th>
                                    <button onClick={() => {
                                        sendData(ligne.id)
                                    }} className={"btn btn-primary"}
                                            id={ligne.id}>Add
                                    </button>
                                </th>


                            </tr>)
                        )
                    }
                    </tbody>
                </table>

            </div>

        </div>
    );
}

export default WalletPage;