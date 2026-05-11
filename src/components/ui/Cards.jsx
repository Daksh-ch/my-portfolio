import React from 'react';
import './Cards.css';
import {useState} from 'react';
import { Star } from 'lucide-react';

const Card = ({ title, description, buttonText, buttonLink ,expandedContent, imageUrl, starCount  }) => {

    const[isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    }
    return (
        <div className="modern-card">
            {imageUrl && (
                <img src={imageUrl} alt={title} className= "card-image"/>
            )}

          
            <div className='card-head'>
                <h3 className="card-title">{title}</h3>
                <div className='card-head-info'>
                    {starCount !== undefined && (
                        <p className="card-stars"><Star size={16} fill="#ffea00" strokeWidth={0} /> {starCount}</p>
                    )}
                </div>
            </div>
        
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