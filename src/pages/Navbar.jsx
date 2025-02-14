import React from 'react';
import {Link} from "react-router-dom";

function Navbar(props) {
    return (
        <div>
            <nav className="navbar fixed-top navbar-light bg-light justify-content-between">
                <text className="m-2">CryptoVault</text>
                <form className="form-inline">


                    <Link to="/">
                        <button className="btn m-2 btn-outline-success my-2 my-sm-0" type="submit">Home</button>
                    </Link>
                    <Link to="/Trading">
                        <button className="btn m-2 btn-outline-success my-2 my-sm-0" type="submit">Trading Price
                        </button>
                    </Link>
                    <Link to="/Wallet">
                        <button className="btn m-2 btn-outline-success my-2 my-sm-0" type="submit">My Wallet</button>
                    </Link>
                    <Link to="/About">
                        <button className="btn m-2 btn-outline-success my-2 my-sm-0" type="submit">About</button>
                    </Link>
                    <Link to="/create">
                        <button className="btn m-2 btn-outline-success my-2 my-sm-0" type="submit">login</button>
                    </Link>


                </form>
            </nav>
        </div>
    );
}

export default Navbar;