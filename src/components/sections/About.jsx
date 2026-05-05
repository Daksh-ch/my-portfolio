import React from 'react';
import Card from '../ui/Cards';
import './About.css';

const skills = [
    "React.js", "JavaScript", "Node.js", "Express", "MongoDB", "HTML5", "CSS3", "Git", "RESTful APIs"
];


const About = ({ darkMode }) => {
    return (
        <section id = "about" className="about-section">
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
                    description= {
                        <div className = "skill-items" style = {{display: "flex", flexWrap: "wrap", gap: "0.5rem"}}>
                            {skills.map((skill, index) => (
                                <span key = {index}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    }
                />
                <Card 
                    title="My Goals"
                    description="My primary goal is to build real-world applications that bring tangible value to users while maintaining a clean, scalable architecture. I am always eager to learn new tools and eventually lead high-impact engineering projects." 
                    expandedContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor sem ac felis pretium fermentum sed non elit. Nulla ac turpis eu purus finibus fringilla nec quis ipsum. Etiam magna."

                />
            </div>
        </section>
    );
};

export default About;