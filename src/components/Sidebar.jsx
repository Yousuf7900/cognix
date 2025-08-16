import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  const items = [
    ['Dashboard','/dashboard'],
    ['Upload','/upload'],
    ['Requests','/requests'],
    ['Events','/events'],
    ['Clubs','/clubs'],
    ['Search','/search'],
  ]
  return (
    <aside className="hidden md:block w-64 p-4">
      <div className="card p-3">
        <div className="mb-2 text-xs uppercase text-slate-400">Quick Access</div>
        <ul className="space-y-1">
          {items.map(([label, to])=>(
            <li key={to} className="rounded-xl">
              <NavLink to={to} className="nav-link">{label}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
