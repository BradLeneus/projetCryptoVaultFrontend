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
    const [wallet, setWallet] = useState({
            idcrypto:{
                id:""
            },
            qty:"",
            customer:{
                id:""
            }
    }

    );
    const sendData = function (id, name){


        let existingCrypto = document.getElementById(name)
        let qty = document.getElementById("input"+id).value
        if(qty != 0){

            if(existingCrypto != ""){
                console.log("yes")
                setWallet( wallet.customer.id = parseInt(userId) )
                setWallet(wallet.qty = qty)
                setWallet(wallet.idcrypto.id= id)

               axios.post("http://localhost:8586/wallet/newWallet", wallet)

                console.log(wallet)
                setWallet({
                    idcrypto:{
                        id:""
                    },
                    qty:"",
                    customer:{
                        id:""
                    },
                })
            }
        }


        console.log(qty)

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
          charge_page()
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

                                <th id={ligne.idcrypto.name} scope="row">{ligne.idcrypto.name}</th>
                                <th scope="row">{ligne.qty}</th>
                                <th scope="row">{ligne.idcrypto.price}</th>
                                <th scope="row">{ligne.qty * ligne.idcrypto.price}</th>

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


                                <th><input type={"number"} style={{width: "80px"}} id={"input"+ligne.id}/></th>
                                <th>
                                    <button onClick={() => {
                                        sendData(ligne.id, ligne.name)
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