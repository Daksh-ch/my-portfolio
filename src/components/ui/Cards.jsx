import React from 'react';
import './Cards.css';
import {useState} from 'react';

const Card = ({ title, description, buttonText, buttonLink ,expandedContent, imageUrl }) => {

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
                    <button className="card-btn" onClick={toggleExpand}>{isExpanded ? "Show Less" : "Show More"}</button>
                )}
                {buttonText && buttonLink && (
                <a href = {buttonLink} target="_blank" rel = "noopener noreferrer" className="card-btn">
                    {buttonText}
                </a>
                )}
            </div>
        </div>
    );
};

export default Card;