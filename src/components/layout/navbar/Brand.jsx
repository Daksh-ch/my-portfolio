import { Link } from 'react-router-dom'

const Brand = () => {
  return (
    <div className="flex items-center gap-2">
      <Link to="/" className="text-3xl font-semibold tracking-tight sm:text-base">
        Daksh Chaudhary
      </Link>
    </div>
  )
}

export default Brand