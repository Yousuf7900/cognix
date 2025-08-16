import { api } from './client'
export const RequestsAPI = {
  list: ()=>api.get('/requests'),
  create: (payload)=>api.post('/requests', payload),
  updateStatus: (id, status)=>api.put('/requests/'+id, { status }),
}
