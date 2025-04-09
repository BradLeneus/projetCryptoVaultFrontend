import React, {useState} from 'react';

function SongPage() {
    const listUrl = [
        {
            URL:"https://www.youtube.com/watch?v=8P5WCI0iQlo",
            Name:"Doigby - Guerrier ",
            Text: "Ceci est une chanson de motivation"
        },
        {
            URL:"www1",
            Name:"sss1",
            Text: "C"
        },
        {
            URL:"www1",
            Name:"sss1",
            Text: "C"
        },
        {
            URL:"www1",
            Name:"sss1(Chanson Prog)",
            Text: "C"
        },
        {
            URL:"www1",
            Name:"sss1(Chanson Mariage)",
            Text: "C"
        },
        {
            URL:"www1",
            Name:"sss1",
            Text: "C"
        },
        {
            URL:"www1",
            Name:"sss1",
            Text: "C"
        },
        {
            URL:"www1",
            Name:"sss1",
            Text: "C"
        },
        {
            URL:"https://www.youtube.com/watch?v=ylXk1LBvIqU",
            Name:"Miles Davis - So What (Chanson Prog)",
            Text: "Petite Chanson de Jazz"
        },
        {
            URL:"www1",
            Name:"sss1(Chanson Mariage)",
            Text: "C"
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
                                    <p className="card-text">{ligne.Text}</p>
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