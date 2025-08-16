import { useUI } from '../context/UIContext'

export default function Toasts() {
  const { toasts } = useUI()
  return (
    <div className="fixed bottom-4 right-4 space-y-2">
      {toasts.map(t=>(
        <div key={t.id} className="card px-4 py-2">{t.msg}</div>
      ))}
    </div>
  )
}
