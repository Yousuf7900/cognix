/* eslint react-refresh/only-export-components: off */
import { createContext, useContext, useState } from 'react'

export const AuthContext = createContext(null)
export const useAuth = () => useContext(AuthContext)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  async function login(email, password) {
    // mock login: accept any credentials
    void password
    await new Promise(r => setTimeout(r, 100))
    setUser({ name: 'Sam', email, role: 'student' })
  }

  async function register(info) {
    await new Promise(r => setTimeout(r, 100))
    setUser({ ...info, role: 'student' })
  }

  function logout() {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  )
}
