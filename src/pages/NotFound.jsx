import Navbar from '../components/Navbar'

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container-app py-16 text-center">
        <h1 className="text-4xl font-extrabold">404</h1>
        <p className="text-slate-300 mt-2">The page you’re looking for doesn’t exist.</p>
      </div>
    </div>
  )
}
