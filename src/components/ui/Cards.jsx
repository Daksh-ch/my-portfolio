import React from 'react';
import './Cards.css';
import {useState} from 'react';

const Card = ({ title, description, buttonText, expandedContent, imageUrl }) => {

    const[isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    }
    return (
        <div className="modern-card">
            {imageUrl && (
                <img src={imageUrl} alt={title} className= "card-image"/>
            )}

            <h3 className="card-title">{title}</h3>
            <div className="card-description">{description}</div>

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