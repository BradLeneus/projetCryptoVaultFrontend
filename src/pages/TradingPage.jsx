import  'react';
import axios from "axios";
import {useEffect, useState} from "react";
import "../Css/TradingPage.css"
import error from "eslint-plugin-react/lib/util/error.js";
function TradingPage(props) {

    const imglist = ["src/Icon/btc.png", "src/Icon/img1.png"]

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
             
            <div class="row row-cols-1 row-cols-md-3 g-4">
            {listUser.map((ligne, i) => (
                        <div className="col container" key={i}>
                        <div class="card h100 cardItem" >
                        <div className="d-flex topSection">
                        <img  src="src/Icon/img1.png"class="imageTrading card-img-top" alt="..."/>
                            <div className="textContent">
                                {ligne.name} <br />
                                {ligne.ticker}
                            </div>
                            

                        </div>
                       
                        <div class="card-body">
                        <p className='priceTag'>CA${ligne.price}</p>
                        </div>
                        </div>
                    </div>)
                    )}
                
        </div>
       
            
            {/* <h1> Crypto Price</h1>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">name</th>
                    <th scope="col">price</th>
                    <th scope="col">ticker</th>
                    <th scope="col"> Image</th>

                </tr>
                </thead>
                <tbody>
               
                {
                    listUser.map((ligne, i) => (
                        <tr key={i}>
                            <th scope="row">{ligne.id}</th>
                            <th scope="row">{ligne.name}</th>
                            <th scope="row">{ligne.price}</th>
                            <th scope="row">{ligne.ticker}</th>
                      <th>{ <img className='imageTrading' src={imglist[ligne.id -1]} alt="1" />}</th>


                        </tr>)
                    )
                }

                </tbody>
            </table> */}

        </div>
    );
}

export default TradingPage;