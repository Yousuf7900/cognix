import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container-app py-6 flex gap-6">
        <Sidebar />
        <main className="flex-1 space-y-6">
          {children}
        </main>
      </div>
    </div>
  )
}
