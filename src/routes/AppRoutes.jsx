import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Dashboard from '../pages/Dashboard'
import Upload from '../pages/Upload'
import Requests from '../pages/Requests'
import Events from '../pages/Events'
import Clubs from '../pages/Clubs'
import Search from '../pages/Search'
import AdminModeration from '../pages/AdminModeration'
import AdminAnalytics from '../pages/AdminAnalytics'
import NotFound from '../pages/NotFound'
import { useAuth } from '../context/AuthContext'

function Private({ children }) {
  const { user } = useAuth()
  return user ? children : <Navigate to="/login" replace />
}
function AdminOnly({ children }) {
  const { user } = useAuth()
  return user?.role === 'admin' ? children : <Navigate to="/dashboard" replace />
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<Private><Dashboard /></Private>} />
      <Route path="/upload" element={<Private><Upload /></Private>} />
      <Route path="/requests" element={<Private><Requests /></Private>} />
      <Route path="/events" element={<Events />} />
      <Route path="/clubs" element={<Clubs />} />
      <Route path="/search" element={<Search />} />

      <Route path="/admin/moderation" element={<AdminOnly><AdminModeration /></AdminOnly>} />
      <Route path="/admin/analytics" element={<AdminOnly><AdminAnalytics /></AdminOnly>} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
