import { useEffect, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import Container from '../ui/Container'

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
                const filtered = data.filter(repo => !repo.fork).slice(0,4);

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
    <section className="py-16 sm:py-20" id="projects">
        <Container>
            <div className="flex flex-col gap-3 text-center sm:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] opacity-60">
                    Projects
                </p>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                    Featured builds with clean UX and solid engineering.
                </h2>
                <p className="max-w-2xl text-sm leading-relaxed opacity-70 sm:text-base">
                    A few recent highlights. Each project focuses on clarity,
                    performance, and user-friendly flows.
                </p>
            </div>

            {loading && (
                <p className="mt-8 text-sm opacity-70">Loading projects...</p>
            )}
            {error && <p className="mt-8 text-sm opacity-70">{error}</p>}

            {!loading && !error && projects.length === 0 && (
                <p className="mt-8 text-sm opacity-70">No projects found.</p>
            )}

            {!loading && !error &&(
                <div className="mt-10 grid gap-6 md:grid-cols-2">
                {projects.map(project => (
                    <article
                        key={project.id}
                        className="group overflow-hidden rounded-3xl border border-zinc-500/20 bg-zinc-500/5"
                    >
                        <div className="aspect-16/10 w-full overflow-hidden bg-zinc-500/10">
                            <img
                                src={`/projects/${project.name}.webp`}
                                alt={project.name}
                                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                                loading="lazy"
                            />
                        </div>
                        <div className="flex flex-col gap-4 p-6">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.22em] opacity-60">
                                        Project
                                    </p>
                                    <h3 className="mt-3 text-lg font-semibold tracking-tight">
                                        {project.name}
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed opacity-70">
                                        {project.description || 'No description provided.'}
                                    </p>
                                </div>
                                <a
                                    href={project.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-500/30 text-current transition-colors hover:bg-zinc-500/10"
                                    aria-label={`Open ${project.name} on GitHub`}
                                >
                                    <ArrowUpRight className="h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
                </div>
            )}
        </Container>
    </section>
    );
}

export default Projects