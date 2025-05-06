import React, {useState} from 'react';

function SongPage() {
    const listUrl = [
        {
            URL:"https://www.youtube.com/watch?v=o0RE230PlX4",
            Name:"Mr Crowley",

        },
        {
            URL:"https://www.youtube.com/watch?v=O6QT8H9AZDM",
            Name:"Numero 9",

        },
        {
            URL:"https://www.youtube.com/watch?v=IwG-J0jtQgo",
            Name:"eyes on fire",

        },
        {
            URL:"https://www.youtube.com/watch?v=E2Rj2gQAyPA",
            Name:"The Line(Chanson Prog)",

        },
        {
            URL:"https://www.youtube.com/watch?v=wp43OdtAAkM",
            Name:"Running up that hill(Chanson Mariage)",

        },
        {
            URL:"null",
            Name:"null",

        },
        {
            URL:"null",
            Name:"null",

        },
        {
            URL:"null",
            Name:"null",

        },
        {
            URL:"https://www.youtube.com/watch?v=ylXk1LBvIqU",
            Name:"Miles Davis - So What (Chanson Prog)",

        },
        {
            URL:"null",
            Name:"null(Chanson Mariage)",
        },


    ];

    return (
        <div>
            <div>



            </div>
            <div className="container">
                <div className="row gap-2">
                    {listUrl.map((ligne, i) => (
                            <div className="card col-2" key={i}>
                                <div className="card-body">
                                    <h5 className="card-title">{ligne.Name}</h5>

                                    <footer>
                                        <a href={ligne.URL} className="card-link">Lien Youtube</a> &nbsp;
                                        {i <= 4 ? "Samuel": "Bradley"}
                                    </footer>

                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>


        </div>

    );
}

export default SongPage;