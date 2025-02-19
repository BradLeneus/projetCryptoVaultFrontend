import  'react';
import axios from "axios";
import {useEffect, useState} from "react";
import error from "eslint-plugin-react/lib/util/error.js";
function CustomerList() {




    const charge_page = function (){
            // http://localhost:8586/oui marche pas => repositoryrest
            //https://jsonplaceholder.typicode.com/users marche => api normal

            axios.get("http://localhost:8586/samuel/getCustomer"

                )
                .then(response => {
                    setListUser(response.data);




                })
                .catch(error=> console.log((error)))
    }

    useEffect(() => {
        // fait l'appelle a chaque __ temps
        charge_page()
    },[])

    const [listUser, setListUser] = useState([])
    // fait l'appelle des le chargement de la page

    // http://localhost:8586/oui marche pas => repositoryrest
    //https://jsonplaceholder.typicode.com/users marche => api normal

    return (
        <div>
            <h1> TabUser</h1>
            <table className="">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">fame</th>
                    <th scope="col">lame</th>
                    <th scope="col">Email</th>


                </tr>


                </thead>
                <tbody>
                {/* affiche uniquement le customer avec le bon id*/}

                {/*// si on appelle getAll on fait un if pour avoir le bon
                    listUser.map((ligne, i) => (
                        <tr key={i}>
                            <th className="p-2">{ligne.id == 1? <h2>{ligne.id}</h2> : null}</th>
                            <th className="p-2">{ligne.id == 1? <h2>{ligne.fname}</h2> :null}</th>
                            <th className="p-2">{ligne.id == 1? <h2>{ligne.lname}</h2> : null}</th>
                            <th className="p-2">{ligne.id == 1? <h2>{ligne.email}</h2> : null}</th>

                        </tr>)
                    )
                */}

                {/* si le Axios return deja juste un customer on l'affiche juste directement */}
                        <tr>
                            <th className="p-2">{listUser.id}</th>
                            <th className="p-2">{listUser.fname}</th>
                            <th className="p-2">{listUser.lname}</th>
                        </tr>



                </tbody>
            </table>

        </div>
    );
}

export default CustomerList;