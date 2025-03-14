import  'react';
import axios from "axios";
import {useEffect, useState} from "react";
import error from "eslint-plugin-react/lib/util/error.js";
import {getElement} from "bootstrap/js/src/util/index.js";
import TradingPage from "./TradingPage.jsx";
import "../Css/WalletPage.css"
import {useParams} from "react-router-dom";


function WalletPage(props) {
    const [localId, setlocalId] = useState(localStorage.getItem("idCustomer"))
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

        if(localId == userId){
            let existingCrypto = document.getElementById(name)
            let qty = document.getElementById("input"+id).value
            if(qty != 0){
                if(existingCrypto != ""){
                    setWallet( wallet.customer.id = parseInt(userId) )
                    setWallet(wallet.qty = qty)
                    setWallet(wallet.idcrypto.id= id)

                    axios.post("http://localhost:8586/wallet/newWallet", wallet)
                    // remet à zero sinon les élments vont se dupliquer lors du deuxieme renvoie.
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
        // recupere les éléments à ajouter


    }
    const [listCryptoUser, setListCryptoUser] = useState([])
    const getCryptoOfCustomer = async () =>{

        if(localId == userId){
            const result = await axios.get(`http://localhost:8586/wallet/getbyuser/${localId}`)
            setListCryptoUser(result.data)

        }


    }
    const getAllCrypto = async () =>{
        const result = await
        axios.get("http://localhost:8586/crypto/getall")
        setListUser(result.data)
    }

    useEffect(() => {
        getCryptoOfCustomer()
        getAllCrypto()

    },[])

    const [listUser, setListUser] = useState([])

    // change le texte à afficher
    const handleChange = function (){
      if(etat){
          getCryptoOfCustomer()
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