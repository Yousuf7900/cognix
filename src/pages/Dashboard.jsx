import DashboardLayout from '../layouts/DashboardLayout'
import Card from '../components/Card'
import { useAuth } from '../context/AuthContext'
import { NotificationsAPI } from '../api/notifications'
import { useEffect, useState } from 'react'

export default function Dashboard() {
  const { user } = useAuth()
  const [notifications, setNotifications] = useState([])

  useEffect(()=>{ NotificationsAPI.list().then(d=>setNotifications(d.items)) }, [])

  return (
    <DashboardLayout>
      <div className="grid md:grid-cols-3 gap-6">
        <Card><div className="text-slate-400 text-sm">Role</div><div className="text-2xl font-bold mt-1 capitalize">{user?.role||'guest'}</div></Card>
        <Card><div className="text-slate-400 text-sm">Recent Activity</div><div className="mt-1">Uploads, requests, and comments will appear here.</div></Card>
        <Card><div className="text-slate-400 text-sm">Suggested</div><div className="mt-1">Top resources tailored to your courses.</div></Card>
      </div>

      <Card className="p-0 overflow-hidden">
        <div className="border-b border-slate-800 px-4 py-3 font-semibold">Notifications</div>
        <ul className="divide-y divide-slate-800">
          {notifications.map(n=>(
            <li key={n.id} className="px-4 py-3 flex items-center justify-between">
              <span className="text-slate-200">{n.text}</span>
              <span className="badge">{n.type}</span>
            </li>
          ))}
        </ul>
      </Card>
    </DashboardLayout>
  )
}
