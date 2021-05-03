import React from 'react';
import './css/Footer.css';

const Footer = () => {
    return (
        <div className="Footer">
            <footer>
                <div className="container">
                    <div className="row">
                        <h1>Blogr</h1>
                        <div className="col">
                            <h4>Product</h4>
                            <ul>
                                <li><a href="#">Otherwise</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">Marketplace</a></li>
                                <li><a href="#">Features</a></li>
                                <li><a href="#">Integrations</a></li>
                            </ul>
                        </div>
                        <div className="col">
                            <h4>Compagny</h4>
                            <ul>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Team</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                        </div>
                        <div className="col">
                            <h4>Connect</h4>
                            <ul>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Newsletter</a></li>
                                <li><a href="#">LinkedIn</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;