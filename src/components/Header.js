import React from 'react';
import logo from "../assets/LOGO.png";
import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <header>
            <div className="wrapper _Header">
            <img src={logo} className="kasa-logo" alt="kasa-logo" />
                <ul className="_Nav">
                    <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
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