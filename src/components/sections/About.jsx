
import Container from '../ui/Container'
import {
    Braces,
    Code2,
    Database,
    FileCode2,
    Server,
    ShieldCheck,
    Sparkles,
    GitBranch,
    Layers
} from 'lucide-react'

const skills = [
    { label: 'React', Icon: Code2 },
    { label: 'JavaScript', Icon: Braces },
    { label: 'TypeScript', Icon: FileCode2 },
    { label: 'Node.js', Icon: Server },
    { label: 'Express', Icon: Layers },
    { label: 'MongoDB', Icon: Database },
    { label: 'Tailwind', Icon: Sparkles },
    { label: 'Zod', Icon: ShieldCheck },
    { label: 'Git', Icon: GitBranch },
    { label: 'REST APIs', Icon: Layers }
]

const About = () => {
    return (
        <section id="about" className="py-16 sm:py-20">
            <Container>
                <div className="flex flex-col gap-3 text-center sm:text-left">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] opacity-60">
                        About
                    </p>
                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                        Building thoughtful full-stack products with calm, intentional UI.
                    </h2>
                    <p className="max-w-2xl text-sm leading-relaxed opacity-70 sm:text-base">
                        I focus on clean architecture, readable interfaces, and smooth user
                        flows. I enjoy taking messy ideas and shaping them into reliable,
                        production-ready features.
                    </p>
                </div>

                <div className="mt-10 grid gap-4 md:grid-cols-6">
                    <div className="rounded-3xl border border-zinc-500/20 bg-zinc-500/5 p-6 md:col-span-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] opacity-60">
                            Story
                        </p>
                        <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                            I build interfaces that feel calm and systems that scale cleanly.
                        </h3>
                        <p className="mt-4 text-sm leading-relaxed opacity-75">
                            I started with frontend curiosity and now focus on full-stack
                            delivery. I care about clarity, performance, and maintainable
                            systems.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.18em] opacity-60">
                            <span className="rounded-full border border-zinc-500/30 px-3 py-1">
                                UI Architecture
                            </span>
                            <span className="rounded-full border border-zinc-500/30 px-3 py-1">
                                API Design
                            </span>
                        </div>
                    </div>

                    <div className="rounded-3xl border border-amber-400/60 bg-linear-to-r from-amber-500 to-amber-400 p-6 md:col-span-2">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] opacity-70">
                            Highlight
                        </p>
                        <h3 className="mt-4 text-lg font-semibold tracking-tight">
                            I ship features with production-ready thinking.
                        </h3>
                        <p className="mt-3 text-sm opacity-70">
                            Clean UX, strong state handling, and fewer surprises in real-world
                            usage.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-zinc-500/20 bg-zinc-500/5 p-6 md:col-span-3">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] opacity-60">
                            Experience
                        </p>
                        <h3 className="mt-4 text-lg font-semibold tracking-tight">
                            Software Developer Trainee - Internship
                        </h3>
                        <div className="mt-4 space-y-3 text-sm opacity-75">
                            <div className="flex items-start gap-3">
                                <span className="mt-1 h-2 w-2 rounded-full bg-zinc-500/60" />
                                <p>Learning tools with production-first habits.</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="mt-1 h-2 w-2 rounded-full bg-zinc-500/60" />
                                <p>Shipping clean, testable, maintainable features.</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="mt-1 h-2 w-2 rounded-full bg-zinc-500/60" />
                                <p>Partnering with seniors for reliable releases.</p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-3xl border border-zinc-500/20 bg-zinc-500/5 p-6 md:col-span-3">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] opacity-60">
                            Toolkit
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {skills.map(({ label, Icon }) => (
                                <span
                                    key={label}
                                    className=" font-mono inline-flex items-center gap-2 rounded-md border border-zinc-500/30 px-3 py-1.5 text-xs font-semibold"
                                >
                                    <Icon className="h-4 w-4" />
                                    {label}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default About