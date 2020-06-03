import React from 'react';
import "./Header.scss";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-light navbar-expand-lg navbar-dark bg-dark fixed-top">
                <span class="navbar-brand mb-0 h1">Power-x</span>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link className="nav-item nav-link" to="/">Home</Link>
                        <Link className="nav-item nav-link" to="/class">Classes</Link>
                        <Link className="nav-item nav-link" to="/pricing">Pricing</Link>
                    </div>
                </div>
            </nav>
        </div>
        
    );
};

export default Header;