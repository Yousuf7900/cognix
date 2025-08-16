import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Input from '../components/Input'
import Select from '../components/Select'
import ResourceCard from '../components/ResourceCard'
import { FilesAPI } from '../api/files'

export default function Search() {
  const [filters, setFilters] = useState({ q:'', type:'', department:'' })
  const [items, setItems] = useState([])

  function set(k,v){ setFilters(s=>({ ...s, [k]: v })) }

  useEffect(()=>{ FilesAPI.list(filters).then(d=>setItems(d.items)) }, [filters])

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="container-app py-8 space-y-6">
        <div className="grid md:grid-cols-3 gap-4">
          <Input label="Search" value={filters.q} onChange={e=>set('q', e.target.value)} placeholder="Keywords, course…" />
          <Select label="Type" value={filters.type} onChange={e=>set('type', e.target.value)}>
            <option value="">Any</option>
            <option>pdf</option><option>pptx</option><option>docx</option><option>zip</option>
          </Select>
          <Select label="Department" value={filters.department} onChange={e=>set('department', e.target.value)}>
            <option value="">Any</option>
            <option>CSE</option><option>EEE</option><option>BBA</option>
          </Select>
        </div>

        <div className="grid gap-4">
          {items.map(item=> <ResourceCard key={item.id} item={item} />)}
        </div>
      </section>
    </div>
  )
}
