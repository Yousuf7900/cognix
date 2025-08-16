import { useState } from 'react'
import DashboardLayout from '../layouts/DashboardLayout'
import Input from '../components/Input'
import Select from '../components/Select'
import TextArea from '../components/TextArea'
import Card from '../components/Card'
import { FilesAPI } from '../api/files'
import { useUI } from '../context/UIContext'

export default function Upload() {
  const [fileInfo, setFileInfo] = useState({ name:'', course:'', department:'', description:'', type:'pdf' })
  const { notify } = useUI()

  function set(k,v){ setFileInfo(s=>({ ...s, [k]: v })) }
  async function onSubmit(e){
    e.preventDefault()
    await FilesAPI.upload(fileInfo) // mocked
    notify('File queued for upload')
  }

  return (
    <DashboardLayout>
      <Card>
        <h2 className="text-xl font-semibold mb-4">Upload Resource</h2>
        <form className="grid md:grid-cols-2 gap-4" onSubmit={onSubmit}>
          <Input label="Display name" value={fileInfo.name} onChange={e=>set('name', e.target.value)} required />
          <Input label="Course code" value={fileInfo.course} onChange={e=>set('course', e.target.value)} placeholder="e.g., CSE201" required />
          <Select label="Department" value={fileInfo.department} onChange={e=>set('department', e.target.value)}>
            <option value="">Select…</option>
            <option>CSE</option><option>EEE</option><option>BBA</option>
          </Select>
          <Select label="File Type" value={fileInfo.type} onChange={e=>set('type', e.target.value)}>
            <option>pdf</option><option>pptx</option><option>docx</option><option>zip</option>
          </Select>
          <div className="md:col-span-2"><TextArea label="Description" value={fileInfo.description} onChange={e=>set('description', e.target.value)} /></div>
          <div className="md:col-span-2"><button className="btn btn-primary">Upload</button></div>
        </form>
      </Card>
    </DashboardLayout>
  )
}
