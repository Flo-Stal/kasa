import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <main>
                <div className="wrapper center">
                    <h1>404</h1>
                    <h2>Oups! La page que vous demandez n'existe pas.</h2>
                    <NavLink to="/">Retourner sur la page d'accueil</NavLink>
                </div>
            </main>
        </div>
    );
};

export default ErrorPage;
