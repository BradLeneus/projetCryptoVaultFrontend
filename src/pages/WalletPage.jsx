import  'react';
import axios from "axios";
import {useEffect, useState} from "react";
import error from "eslint-plugin-react/lib/util/error.js";
import {getElement} from "bootstrap/js/src/util/index.js";
import TradingPage from "./TradingPage.jsx";
import "../Css/WalletPage.css"
import {useParams} from "react-router-dom";
import WalletPageChart from "./WalletPageChart.jsx";


function WalletPage(props) {
    const [localId, setlocalId] = useState(localStorage.getItem("idCustomer"))
    const {userId} = useParams()
    const [filterList, setFilterList] = useState()
    const [usteStateId, setUsteStateId] = useState(1)
    const [etat, setEtat] = useState(true)
    let array = new Array()
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
                    setUsteStateId(usteStateId + 1)
                    window.location.reload();
                }

            }



        }
        // recupere les éléments à ajouter


    }

    const [listCryptoUser, setListCryptoUser] = useState([])
    const getCryptoOfCustomer = async () =>{

        if(localId == userId){
            const result = await axios.get(`http://localhost:8586/wallet/getbyuser/${localId}`)
            setListCryptoUser(result.data)
            filterLaListe(result.data)
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
        handleChange()

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

    const filterLaListe = (liste) =>{

        liste.forEach(myFunction)
        array[0] = ["Titre", "graph"]

    }
    function myFunction(item, index) {
        array[index + 1] = [item.idcrypto.name, item.qty * item.idcrypto.price]


    }
    return (
        <div>

                <WalletPageChart listUser = {array}/>


            <button id="changeDisplay" onClick={handleChange}>ajouter cryptos</button>

            <div id="userCrypto">
                <h1> TabUser</h1>
                <table className="table p-2">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Prix unitaire</th>
                        <th scope="col">$USD</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        listCryptoUser.map((ligne, i) => (
                            <tr key={i}>
                                <th>{i + 1}</th>
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
                        <th scope="col">name</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        listUser.map((ligne, i) => (
                            <tr key={i}>


                                <th scope="row">{ligne.name}</th>


                                <th><input type={"number"} style={{width: "80px"}} id={"input" + ligne.id}/></th>
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