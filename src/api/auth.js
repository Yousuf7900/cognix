import { api } from './client'
export const AuthAPI = {
  login: (email, password)=>api.post('/auth/login', { email, password }),
  register: (payload)=>api.post('/auth/register', payload),
  me: ()=>api.get('/auth/me'),
  logout: ()=>api.post('/auth/logout', {})
}
