import { useState } from 'react'
import AuthLayout from '../layouts/AuthLayout'
import Input from '../components/Input'
import { useAuth } from '../context/AuthContext'
import { useNavigate, Link } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('sam@example.com')
  const [password, setPassword] = useState('password')
  const { login } = useAuth()
  const navigate = useNavigate()

  async function onSubmit(e) {
    e.preventDefault()
    await login(email, password)
    navigate('/dashboard')
  }

  return (
    <AuthLayout title="Login">
      <form className="space-y-4" onSubmit={onSubmit}>
        <Input label="Email" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
        <Input label="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
        <button className="btn btn-primary w-full" type="submit">Sign in</button>
        <p className="text-center text-sm text-slate-400">No account? <Link className="underline" to="/register">Register</Link></p>
      </form>
    </AuthLayout>
  )
}
