import { useState } from 'react'
import AuthLayout from '../layouts/AuthLayout'
import Input from '../components/Input'
import { useAuth } from '../context/AuthContext'
import { useNavigate, Link } from 'react-router-dom'

export default function Register() {
  const [form, setForm] = useState({ name:'', email:'', password:'' })
  const { register } = useAuth()
  const navigate = useNavigate()

  function set(k,v){ setForm(s=>({ ...s, [k]: v })) }
  async function onSubmit(e) {
    e.preventDefault()
    await register(form)
    navigate('/dashboard')
  }

  return (
    <AuthLayout title="Create your account">
      <form className="space-y-4" onSubmit={onSubmit}>
        <Input label="Full name" value={form.name} onChange={e=>set('name', e.target.value)} required />
        <Input label="Email" type="email" value={form.email} onChange={e=>set('email', e.target.value)} required />
        <Input label="Password" type="password" value={form.password} onChange={e=>set('password', e.target.value)} required />
        <button className="btn btn-primary w-full" type="submit">Create account</button>
        <p className="text-center text-sm text-slate-400">Have an account? <Link className="underline" to="/login">Login</Link></p>
      </form>
    </AuthLayout>
  )
}
