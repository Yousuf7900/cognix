import { useEffect, useState } from 'react'
import DashboardLayout from '../layouts/DashboardLayout'
import Card from '../components/Card'
import { AdminAPI } from '../api/admin'

export default function AdminAnalytics() {
  const [data, setData] = useState(null)
  useEffect(()=>{ AdminAPI.analytics().then(setData) }, [])

  return (
    <DashboardLayout>
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <div className="text-slate-400 text-sm">Submissions (30d)</div>
          <div className="text-3xl font-bold mt-1">{data?.submissionsLast30 ?? '—'}</div>
        </Card>
        <Card className="md:col-span-2">
          <div className="font-semibold mb-2">Top Contributors</div>
          <ul className="space-y-2">
            {(data?.topContributors||[]).map((u,i)=>(
              <li key={i} className="flex items-center justify-between">
                <span>{u.name}</span>
                <span className="badge">{u.uploads} uploads</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </DashboardLayout>
  )
}
