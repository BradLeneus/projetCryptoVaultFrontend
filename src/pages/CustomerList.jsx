import  'react';
import axios from "axios";
import {useEffect, useState} from "react";
import error from "eslint-plugin-react/lib/util/error.js";
function CustomerList() {


    const [localId, setlocalId] = useState(localStorage.getItem("idCustomer"))
    const [listUser, setListUser] = useState([])
    const charge_page = async ()=>{
        //id 5 est un admin
        if(localId == 5){
            const result = await axios.get("http://localhost:8586/Customer/getAll")
            setListUser(result.data);
        }


    }
    const supprimerCustomer = async (id) =>{
        if(id != 5){
            await axios.delete(`http://localhost:8586/Customer/deleteCustomer/${id}`)
        }
        else {
            console.log("ne peut pas supprimer un admin")
        }

    }

    useEffect(() => {

        charge_page()
    },[listUser])

    return (
        <div>
            <h1> TabUser</h1>
            <table className="">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">fname</th>

                    <th scope="col">Email</th>
                </tr>
                </thead>
                <tbody>
                {
                    listUser.map((ligne, i) => (
                        <tr key={i}>
                            <th scope="row">{ligne.id}</th>
                            <th scope="row">{ligne.fname}</th>
                            <th scope="row">{ligne.email}</th>
                            {ligne.id === 5 ? null : <th>
                                <button onClick={() =>{
                                    supprimerCustomer(ligne.id)
                                }}>Supprimer</button>
                            </th>}
                        </tr>))
                }
                </tbody>
            </table>
        </div>
    );
}

export default CustomerList;