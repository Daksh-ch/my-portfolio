import {useEffect, useState} from 'react'
import Card from '../ui/Cards';
import './Projects.css';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try{
                setLoading(true);
                setError(null);

                const response =  await fetch('https://api.github.com/users/octocat/repos');

                if(!response.ok){
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                const filtered = data.filter(repo => !repo.fork).slice(0,6);

                setProjects(filtered);

                }
            catch(err){
                setError("Failed to fetch projects. Please try again later.");
            }
            finally{
                setLoading(false);
            }
        }

        fetchProjects();
    }, []);
     
    return (
    <section className="projects-section" id="projects">
        <h2 className="projects-title">My Projects</h2>

        {loading && <p>Loading projects...</p>}
        {error && <p>{error}</p>}

        {!loading && !error && projects.length === 0 && (
            <p className='projects-empty'>No projects found. </p>
        )}

        {!loading && !error &&(
            <div className="projects-grid">
            {projects.map(project => (
                <Card
                key={project.id}
                title={project.name}
                description={project.description || "No description provided"}
                buttonText="View Repo"
                buttonLink={project.html_url}
                />
            ))}
            </div>
        )}
    </section>
    );
}

export default Projects