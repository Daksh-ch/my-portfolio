import React from 'react'
import CTAButton from '../ui/CTAButton'
import Container from '../ui/Container'
import heroImg from '../../assets/hero.jpg'

const Hero = ({ name, role }) => {
  const stack = ['React', 'Node', 'MongoDB', 'Tailwind', 'Zod']

  return (
    <section id="home" className="py-10 sm:py-10 lg:py-14">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] opacity-70">
              Software Developer · Intern
            </div>

            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] opacity-60">
                {role}
              </p>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Hi, I'm <span className="font-mono text-transparent bg-clip-text bg-linear-to-br from-orange-600 to-amber-400">{name}</span>. I build calm, reliable full-stack products.
              </h1>
              <p className="max-w-xl text-base leading-relaxed opacity-75 sm:text-lg">
                I design minimal interfaces and engineer scalable APIs that feel fast, stable, and intentional.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <CTAButton
                text="View Projects"
                className="bg-zinc-500/10 border-zinc-500/30 hover:bg-zinc-500/20"
                onClick={() => {
                  document
                    .getElementById('projects')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }}
              />
              <button
                type="button"
                className="inline-flex items-center rounded-full border border-zinc-500/30 px-4 py-2 text-sm font-semibold transition-colors hover:bg-zinc-500/10"
                onClick={() => {
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Contact
              </button>
            </div>

            <div className="text-xs font-medium uppercase tracking-[0.18em] opacity-50">
              Based in India 
            </div>
          </div>

          <div className="grid gap-4">
            <div className="h-[320px] overflow-hidden rounded-3xl border border-zinc-500/20 bg-zinc-500/5 sm:h-[360px] lg:h-[380px]">
              <img
                src={heroImg}
                alt="Portrait of Daksh"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="rounded-3xl border border-zinc-500/20 bg-zinc-500/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] opacity-60">
                Currently
              </p>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">
                Building full-stack product experiences
              </h3>
              <p className="mt-2 text-sm opacity-70">
                Focused on speed, accessibility, and thoughtful UX polish.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero