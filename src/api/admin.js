import { api } from './client'
export const AdminAPI = {
  moderateBatch: (ids, action)=>api.post('/admin/moderate', { ids, action }),
  analytics: ()=>api.get('/admin/analytics')
}
