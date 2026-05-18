import Container from "../components/ui/Container";

export default function Blogs() {
  return (
    <section className="pt-32 pb-16 min-h-screen">
      <Container>
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
          My Blog
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
            Welcome to my blog! Here, I share my thoughts, experiences, and insights on various topics related to software development, technology, and my personal journey in the tech world. I hope you find my posts informative and engaging. Stay tuned for regular updates!
        </p>
      </Container>
    </section>
  )
}
