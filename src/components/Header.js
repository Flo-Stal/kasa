import React from "react";
import logo from "../assets/LOGO.png";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="wrapper _Header">
                {/* création du lien image vers "/" */}
                <NavLink to="/">
                    <img src={logo} className="kasa-logo" alt="kasa-logo" />
                </NavLink>
                {/* création des liens nav */}
                <ul className="_Nav">
                    <NavLink
                        to="/"
                        // classe css si lien actif
                        className={(nav) => (nav.isActive ? "nav-active" : "")}
                    >
                        <li>Acceuil</li>
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={(nav) => (nav.isActive ? "nav-active" : "")}
                    >
                        <li>A Propos</li>
                    </NavLink>
                </ul>
            </div>
        </header>
    );
};

export default Header;
