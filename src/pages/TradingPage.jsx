import  'react';
import axios from "axios";
import {useEffect, useState} from "react";
import "../Css/TradingPage.css"
import error from "eslint-plugin-react/lib/util/error.js";
function TradingPage(props) {

    const [isAscPrice, setIsAscPrice] = useState(false)
    const [isAscName, setIsAscName] = useState(false)
    const [listCrypto, setListUser] = useState([])
    useEffect(() => {
        charge_page()
    }, []);
    const charge_page = async () =>{
       const result = await
        axios.get("http://localhost:8586/crypto/getall")
        setListUser(result.data)
    }
    const getByPrice = async () =>{


        const resutl = await axios.get(`http://localhost:8586/crypto/getAllByPrice/${isAscPrice}`)
        setListUser(resutl.data)
        setIsAscPrice(!isAscPrice)

    }
    const getByName = async () =>{
        const resutl = await axios.get(`http://localhost:8586/crypto/getAllByName/${isAscName}`)
        setListUser(resutl.data)
        setIsAscName(!isAscName)
    }




    // fait l'appelle des le chargement de la page

    // http://localhost:8586/oui marche pas => repositoryrest
    //https://jsonplaceholder.typicode.com/users marche => api normal

    return (
        <div>
            <button onClick={getByPrice}>sort by price</button>
            <button onClick={getByName}>sort by name</button>
            <div className="AllCryptoBox row row-cols-1 row-cols-md-3 g-4">
                {listCrypto.map((ligne, i) => (

                        <div className="col OneBox" key={i}>
                            <div className="card smallBox" >
                                <div className="d-flex topSection">
                                     <img  src={"src/Icon/" + ligne.name + ".png"} className="imageTrading card-img-top" alt="..."/>
                                     <div className="textContent">

                                    {ligne.name} <br />
                                    {ligne.ticker}
                                    </div>
                                </div>

                                <div className="card-body">
                                    <p className='priceTag'>CA${ligne.price}</p>
                                </div>
                            </div>
                    </div>)
                    )}
            </div>
        </div>
    );
}

export default TradingPage;