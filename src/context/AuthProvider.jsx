// src/context/AuthProvider.jsx
import React, { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import { AuthAPI } from '../api/auth'

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem('cognix_user')) } catch { return null }
  })
  const [loading, setLoading] = useState(false)

  useEffect(() => { /* check session here in real mode */ }, [])

  function login(email, password) {
    setLoading(true)
    return AuthAPI.login(email, password)
      .then(d => {
        setUser(d.user)
        localStorage.setItem('cognix_user', JSON.stringify(d.user))
        return d.user
      })
      .finally(() => setLoading(false))
  }

  function register(payload) {
    setLoading(true)
    return AuthAPI.register(payload)
      .then(d => {
        setUser(d.user)
        localStorage.setItem('cognix_user', JSON.stringify(d.user))
        return d.user
      })
      .finally(() => setLoading(false))
  }

  function logout() {
    localStorage.removeItem('cognix_user')
    setUser(null)
  }

  const value = { user, loading, login, logout, register, setUser }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
