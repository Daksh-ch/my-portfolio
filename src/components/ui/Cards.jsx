import React from 'react';
import './Cards.css';
import { useState } from 'react';

const Card = ({ title, description, buttonText, expandedContent }) => {

    const[isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    }
    return (
        <div className="modern-card">
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>

            {isExpanded && expandedContent && (
                <p className="card-expanded">{expandedContent}</p>
            )}
            <div className="card-footer">
                {expandedContent && (
                    <button  variant = "primary" onClick = {toggleExpand} className="card-btn" onClick={toggleExpand}>{isExpanded ? "Show Less" : "Show More"}</button>
                )}
                {buttonText && <button variant = "primary" className="card-btn">{buttonText}</button>}
            </div>
        </div>
    );
};

export default Card;