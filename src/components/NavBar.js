import React from 'react';
import '../styles/nav_bar.css'

const NavBar = () => {
    return (
            <div className="navbar_height">
                <nav className="navbar">
                    <div className="title">
                        <h1>e-comerce <i class="fa-solid fa-00"></i> </h1>
                                      
                    </div>

                    <div className="navigation">
                        <i className="fa-thin fa-user"></i>
                    </div>

                    <div className="navigation">
                        <i className="fa-thin fa-id-card"></i>
                    </div>

                    <div className="navigation">
                        <i className="fa-thin fa-cart-shopping"></i>
                    </div>
                </nav>

            </div>


    );
};

export default NavBar;