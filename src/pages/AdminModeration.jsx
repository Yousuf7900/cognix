import DashboardLayout from '../layouts/DashboardLayout'
import Card from '../components/Card'
import { useEffect, useState } from 'react'
import { FilesAPI } from '../api/files'
import { AdminAPI } from '../api/admin'

export default function AdminModeration() {
  const [files, setFiles] = useState([])
  const [selected, setSelected] = useState({})

  useEffect(()=>{ FilesAPI.list().then(d=>setFiles(d.items)) }, [])
  function toggle(id){ setSelected(s=>({ ...s, [id]: !s[id] })) }
  async function doAction(action){
    const ids = Object.entries(selected).filter(([,v])=>v).map(([id])=>+id)
    if (!ids.length) return
    await AdminAPI.moderateBatch(ids, action) // mocked
    setSelected({})
  }

  return (
    <DashboardLayout>
      <Card>
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Moderation Queue</h2>
          <div className="flex gap-2">
            <button className="btn btn-ghost" onClick={()=>doAction('reject')}>Reject</button>
            <button className="btn btn-primary" onClick={()=>doAction('approve')}>Approve</button>
          </div>
        </div>
      </Card>

      <div className="grid gap-3">
        {files.map(f=>(
          <Card key={f.id} className="flex items-center justify-between">
            <label className="flex items-center gap-3">
              <input type="checkbox" checked={!!selected[f.id]} onChange={()=>toggle(f.id)} />
              <span className="font-medium">{f.name}</span>
            </label>
            <div className="text-xs text-slate-400">{f.department} • {f.course}</div>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  )
}
