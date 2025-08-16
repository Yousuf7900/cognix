import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import { EventsAPI } from '../api/events'

export default function Events() {
  const [items, setItems] = useState([])
  useEffect(()=>{ EventsAPI.list().then(d=>setItems(d.items)) }, [])

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="container-app py-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(e=>(
          <Card key={e.id}>
            <img src={e.cover} alt="" className="rounded-xl w-full h-40 object-cover mb-3"/>
            <div className="font-semibold">{e.title}</div>
            <div className="text-sm text-slate-400">{new Date(e.date).toLocaleString()} • {e.location}</div>
            <button className="btn btn-primary mt-3">RSVP</button>
          </Card>
        ))}
      </section>
    </div>
  )
}
