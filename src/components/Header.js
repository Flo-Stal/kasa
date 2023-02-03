import React from 'react';
import logo from "../assets/LOGO.png"; 
// importe le logo de l'application
import { NavLink } from "react-router-dom"; 
// importe le composant NavLink de react-router-dom pour créer des liens de navigation


const Header = () => {
    return (
        <header>
            <div className="wrapper _Header">
            <img src={logo} className="kasa-logo" alt="kasa-logo" />
                <ul className="_Nav">
                    <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}> 
                    {/* utilise le composant NavLink pour lier les différentes pages */}
                        <li>acceuil</li>
                    </NavLink>
                    <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li>A Propos</li>
                    </NavLink>
                </ul>
            </div>
        </header>
    );
};

export default Header;