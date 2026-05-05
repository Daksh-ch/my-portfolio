import React from 'react';
import Card from '../ui/Cards';
import './About.css';
const About = ({ darkMode }) => {
    return (
        <section className="about-section">
            <div className="about-header">
                <h2 className="about-title">About Me</h2>
                <p className="about-subtitle">
                    Get to know my background, what I do, and my vision for the future.
                </p>
            </div>
            
            <div className="about-grid">
                <Card
                    title="Who I Am"
                    description="I am a passionate Full Stack Web Developer. My journey started with a deep curiosity for how the web works, which evolved into building stunning user interfaces and designing scalable, robust backends. I thrive on solving complex problems."
                    buttonText="Download Resume"
                    expandedContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor sem ac felis pretium fermentum sed non elit. Nulla ac turpis eu purus finibus fringilla nec quis ipsum. Etiam magna."
                />
                <Card 
                    title="My Skills"
                    description="I specialize in the modern JavaScript ecosystem. On the frontend, I build fast, responsive interfaces using React, modern CSS, and Vite. On the backend, I leverage Node.js and Express to create fully functional RESTful APIs."    
                />
                <Card 
                    title="My Goals"
                    description="My primary goal is to build real-world applications that bring tangible value to users while maintaining a clean, scalable architecture. I am always eager to learn new tools and eventually lead high-impact engineering projects."    
                />
            </div>
        </section>
    );
};

export default About;