import React from "react";
import Card from "../ui/Cards";
import { projectsList } from "../../data/ProjectDetails";
import "./Projects.css";


const Projects = () => {
    return (
        <section className="projects-section" id = "projects">
            <h2 className="projects-title">My Projects</h2>
            <div className="projects-grid">
                {projectsList.map(project => (
                    <Card
                        key = {project.id}
                        title = {project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                    />
                ))}
            </div>
        </section>
    )
}

export default Projects;