import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import { ClubsAPI } from '../api/clubs'

export default function Clubs() {
  const [items, setItems] = useState([])
  useEffect(()=>{ ClubsAPI.list().then(d=>setItems(d.items)) }, [])

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="container-app py-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(c=>(
          <Card key={c.id}>
            <div className="font-semibold">{c.name}</div>
            <div className="text-slate-300 mt-1">{c.desc}</div>
            <div className="text-sm text-slate-400 mt-2">{c.members} members</div>
            <button className="btn btn-primary mt-3">View</button>
          </Card>
        ))}
      </section>
    </div>
  )
}
