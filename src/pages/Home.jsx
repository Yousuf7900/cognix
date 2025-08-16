import Navbar from '../components/Navbar'
import Card from '../components/Card'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="container-app py-10 space-y-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Share. Learn. Grow.</h1>
          <p className="mt-3 text-slate-300">Cognix helps students upload, discover, and request academic resources with a modern, distraction-free experience.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Card><h3 className="text-lg font-semibold">Upload Resources</h3><p className="mt-2 text-slate-300">Drag & drop with metadata and versioning.</p></Card>
          <Card><h3 className="text-lg font-semibold">Smart Search</h3><p className="mt-2 text-slate-300">Filter by course, department, type, rating.</p></Card>
          <Card><h3 className="text-lg font-semibold">Events & Clubs</h3><p className="mt-2 text-slate-300">Stay in the loop and RSVP in a tap.</p></Card>
        </div>
      </section>
    </div>
  )
}
