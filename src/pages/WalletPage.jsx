import  'react';
import axios from "axios";
import {useEffect, useState} from "react";
import error from "eslint-plugin-react/lib/util/error.js";
import {getElement} from "bootstrap/js/src/util/index.js";
import TradingPage from "./TradingPage.jsx";
import "../Css/WalletPage.css"
import {useNavigate, useParams} from "react-router-dom";
import WalletPageChart from "./WalletPageChart.jsx";


function WalletPage(props) {
    const [localId, setlocalId] = useState(localStorage.getItem("idCustomer"))
    const [filterList, setFilterList] = useState([])
    const nav = useNavigate();
    const [etat, setEtat] = useState(false)
    const [listUser, setListUser] = useState([])
    const [totalValueTempo, setTotalValueTempo] = useState(0)
    let totalValueLet = 0
    const [listCryptoUser, setListCryptoUser] = useState([])
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

        let existingCrypto = document.getElementById(name)
        let qty = document.getElementById("input"+id).value
        if(qty != 0){
            if(existingCrypto != ""){
                if(listCryptoUser[id -1] != null){
                    console.log(listCryptoUser[id-1])

                    if(qty <0){
                        if(listCryptoUser[id -1].qty + parseInt(qty)  >= 0 ){
                            setWallet( wallet.customer.id = parseInt(localId) )
                            setWallet(wallet.qty = listCryptoUser[id - 1].qty + parseFloat(qty))
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

                            // window.location.reload();

                        }
                    }
                    else {
                        setWallet( wallet.customer.id = parseInt(localId) )
                        setWallet(wallet.qty = listCryptoUser[id - 1].qty + parseFloat(qty))
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
                else {
                    if(qty >0){
                        setWallet( wallet.customer.id = parseInt(localId) )
                        setWallet(wallet.qty = parseFloat(qty))
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

            }
        }


    }


    const getCryptoOfCustomer = async () =>{

        if(localId != null){
            const result = await axios.get(`http://localhost:8586/wallet/getbyuser/${localId}`)
            setListCryptoUser(result.data)
            filterLaListe(result.data)
            setFilterList(array)





        }
        else {
            nav("/Login")
        }


    }
    const getAllCrypto = async () =>{
        const result = await
        axios.get("http://localhost:8586/crypto/getall")
        setListUser(result.data)

    }

    useEffect(() => {
        getCryptoOfCustomer()
            totalValueLet = 0
            listCryptoUser.forEach(myFunctionTotalValue)


    },[listCryptoUser])
    useEffect(() => {

        getAllCrypto()


    },[])



    // change le texte à afficher
    const handleChange = function (){

      if(etat){

          document.getElementById("ajoutCrypto").style.display = "none";
          document.getElementById("userCrypto").style.display = "block";
          document.getElementById("changeDisplay").innerText = "ajouter cryptos"

          totalValueLet = 0
          listCryptoUser.forEach(myFunctionTotalValue)
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

    function myFunctionTotalValue(item, index) {
        totalValueLet += item.qty * item.idcrypto.price

        setTotalValueTempo(totalValueLet)

    }

    return (
        <div>
                <WalletPageChart listUser = {filterList}/>

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
                                <th scope="row">{parseFloat(ligne.qty).toFixed(4)}</th>
                                <th scope="row">{parseFloat(ligne.idcrypto.price).toFixed(4)}</th>
                                <th scope="row">{parseFloat(ligne.qty * ligne.idcrypto.price).toFixed(4)}</th>


                            </tr>)
                        )
                    }
                    </tbody>
                </table>
                <p style={{textAlign:"center"}}>Votre valeur total: {totalValueTempo.toFixed(4)}</p>
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