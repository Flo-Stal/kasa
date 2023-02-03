import React from 'react';
import { NavLink } from "react-router-dom";

const Card = ({ accommodation }) => {
    return (
        <NavLink className="cardHome" to={`/accommodation/${accommodation.id}`}>
            {/* utilise le composant NavLink pour lier la page */}
        <img src={accommodation.cover} alt={accommodation.tags} />
        {/* utilise l'image accommodation pour afficher l'image ainsi que le tag (cf json) */}
        <div className="backgroundLinear"></div>
        {/* div pour le background */}
        <h2>{accommodation.title}</h2>
        {/* titre de l'accommodation pour afficher le titre */}
    </NavLink>
    );
};

export default Card;