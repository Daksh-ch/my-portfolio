import React from 'react';
import './Cards.css';

const Card = ({ title, description, buttonText }) => {
    return (
        <div className="modern-card">
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
            {buttonText && <button className="card-btn">{buttonText}</button>}
        </div>
    );
};

export default Card;