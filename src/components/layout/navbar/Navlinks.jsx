
import { Link } from 'react-router-dom'
import { cn } from '../../../lib/utils'

const Navlinks = ({ isOpen, onNavigate, className }) => {
  return (
    <ul
      className={cn(
        'w-full flex-col gap-3 rounded-xl border border-zinc-500/20 bg-zinc-500/5 p-3 text-sm font-semibold sm:w-auto sm:flex-row sm:items-center sm:gap-8 sm:border-0 sm:bg-transparent sm:p-0',
        isOpen ? 'flex' : 'hidden sm:flex',
        className
      )}
    >
      <li>
        <Link
          to="/"
          className="text-current opacity-80 transition-opacity hover:opacity-100"
          onClick={onNavigate}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/#projects"
          className="text-current opacity-80 transition-opacity hover:opacity-100"
          onClick={onNavigate}
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          to="/#about"
          className="text-current opacity-80 transition-opacity hover:opacity-100"
          onClick={onNavigate}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="/blogs"
          className="text-current opacity-80 transition-opacity hover:opacity-100"
          onClick={onNavigate}
        >
          Blogs
        </Link>
      </li>
    </ul>
  )
}

export default Navlinks