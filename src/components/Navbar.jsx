import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Logo from './Logo'

export default function Navbar() {
  const { user, logout } = useAuth()
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="container-app flex h-16 items-center justify-between">
        <Link to="/"><Logo /></Link>
        <nav className="hidden md:flex items-center gap-2">
          <NavLink to="/search" className="nav-link">Resources</NavLink>
          <NavLink to="/events" className="nav-link">Events</NavLink>
          <NavLink to="/clubs" className="nav-link">Clubs</NavLink>
          {user?.role==='admin' && <NavLink to="/admin/moderation" className="nav-link">Admin</NavLink>}
        </nav>
        <div className="flex items-center gap-2">
          {user ? (
            <>
              <span className="hidden sm:inline text-sm text-slate-300">Hi, {user.name}</span>
              <NavLink to="/dashboard" className="btn btn-primary">Dashboard</NavLink>
              <button onClick={logout} className="btn btn-ghost">Logout</button>
            </>
          ) : (
            <>
              <NavLink to="/login" className="btn btn-ghost">Login</NavLink>
              <NavLink to="/register" className="btn btn-primary">Sign Up</NavLink>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
