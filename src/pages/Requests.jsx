import { useEffect, useState } from 'react'
import DashboardLayout from '../layouts/DashboardLayout'
import Card from '../components/Card'
import Input from '../components/Input'
import TextArea from '../components/TextArea'
import { RequestsAPI } from '../api/requests'

export default function Requests() {
  const [items, setItems] = useState([])
  const [form, setForm] = useState({ title:'', course:'', description:'' })

  function set(k,v){ setForm(s=>({ ...s, [k]: v })) }

  useEffect(()=>{ RequestsAPI.list().then(d=>setItems(d.items)) }, [])

  async function onSubmit(e){
    e.preventDefault()
    const { item } = await RequestsAPI.create(form)
    setItems(s=>[item, ...s])
    setForm({ title:'', course:'', description:'' })
  }

  return (
    <DashboardLayout>
      <Card>
        <h2 className="text-xl font-semibold mb-4">Request Resource</h2>
        <form className="grid md:grid-cols-2 gap-4" onSubmit={onSubmit}>
          <Input label="Title" value={form.title} onChange={e=>set('title', e.target.value)} required />
          <Input label="Course code" value={form.course} onChange={e=>set('course', e.target.value)} />
          <div className="md:col-span-2"><TextArea label="Details" value={form.description} onChange={e=>set('description', e.target.value)} /></div>
          <div className="md:col-span-2"><button className="btn btn-primary">Submit</button></div>
        </form>
      </Card>

      <div className="grid gap-4">
        {items.map(r=>(
          <Card key={r.id}>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold">{r.title}</div>
                <div className="text-xs text-slate-400 mt-1">{r.course}</div>
              </div>
              <span className="badge">{r.status}</span>
            </div>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  )
}
