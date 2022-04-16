import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav_bar.css'
import Login from './Login';

const NavBar = () => {
    const [ isLoginOpen, setIsLoginOpen ] = useState(false)

    return (
            <div className="navbar_height">
                <nav className="navbar">
                    <div className="title">
                        <Link to="/">   
                            <h1>e-commerce </h1>

                        </Link>
                                      
                    </div>

                    <div className="navigation" onClick={() => setIsLoginOpen(!isLoginOpen)}>
                        <i className="fa-solid fa-user"></i>
                    </div>

                    <div className="navigation">
                        <i className="fa-solid fa-id-card"></i>
                    </div>

                    <div className="navigation">
                        <i className="fa-solid fa-cart-shopping"></i>
                    </div>
                </nav>
                <Login isLoginOpen={isLoginOpen}/>


            </div>


    );
};

export default NavBar;