import React from 'react';
import IconArrowLight from './IconArrowLight';
import './css/Header.css';

const Header = () => {
    return (
        <div className="Header">
            <header>
                <nav>
                    <h1>Blogr</h1>
                    <ul className="pages">
                        <li>
                            Product 
                            <IconArrowLight/>
                        </li>
                        <li>
                            Compagny 
                            <IconArrowLight/>
                        </li>
                        <li>
                            Connect 
                            <IconArrowLight/>
                        </li>
                    </ul>
                    <ul className="connect">
                        <li>
                            <a id="login" href="#">Login</a>
                        </li>
                        <li>
                            <a className="bb" href="#">Sign Up</a>
                        </li>
                    </ul>
                </nav>
                <div className="presentation">
                    <h1>A modern publishing platform</h1>
                    <p>Grow your audience and build your online brand</p>
                    <ul className="boutons">
                        <li><a className="bb" href="#">Start For Free</a></li>
                        <li><a className="bab" href="#">learn More</a></li>
                    </ul>
                </div>
            </header>
        </div>
    );
};

export default Header;