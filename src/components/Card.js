import React from 'react';
import { NavLink } from "react-router-dom";

const Card = ({ accommodation }) => {
    return (
        <NavLink className="cardHome" to={`/accommodation/${accommodation.id}`}>
        <img src={accommodation.cover} alt={accommodation.tags} />
        <div className="backgroundLinear"></div>
        <h2>{accommodation.title}</h2>
    </NavLink>
    );
};

export default Card;