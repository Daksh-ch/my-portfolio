import Container from "../components/ui/Container";
import {useSelector, useDispatch} from 'react-redux'
import {addLikeToFeatured} from '../store/blogSlice.jsx'
import {Heart} from 'lucide-react'


export default function Blogs() {

  const {featuredPost, posts} = useSelector((state) => state.blogs)
  const dispatch = useDispatch()
  return (
    <section className="pt-16 pb-16 min-h-screen">
      <Container>
        <h1 className="text-4xl font-bold">
          My Blog
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
            Welcome to my blog! Here, I share my thoughts, experiences, and insights on various topics related to software development, technology, and my personal journey in the tech world. I hope you find my posts informative and engaging. Stay tuned for regular updates!
        </p>

        <div className="mt-12 rounded-3xl border border-amber-400/50 bg-amber-400/10 p-6 sm:p-8">
            <div className="flex justify-between ">
              <span className="flex rounded-full border border-amber-400/50 bg-amber-400/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] items-center">
                {featuredPost.badge}
              </span>
              <span className="ml-auto flex items-center gap-2 text-sm font-medium border border-amber-400/50 px-3 py-1 rounded-full text-amber-400/80">
                <button onClick={() => dispatch(addLikeToFeatured())}>
                  <Heart size={16} />
                </button>
                {featuredPost.likes}
              </span>
            </div>
            
            <h2 className="mt-4 text-2xl font-bold">
                {featuredPost.title}
            </h2>
            <p className="mt-2">
                {featuredPost.excerpt}
            </p>
        </div>

         <h3 className="mt-12 text-xl font-bold">All Posts</h3>

         <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {posts.map((posts, index) => (
            <article key={index} className="rounded-2xl border border-zinc-500/20 p-6 transition hover:bg-zinc-500/5">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 opacity-70">
                {posts.date}
              </p>
              <h4 className= "mt-2 text-lg font-semibold  ">
                {posts.title}
              </h4>
              <p className= "mt-2 text-sm">
                {posts.excerpt}
              </p>
            </article>
          ))}
          
         </div>
      </Container>
    </section>
  )
}
