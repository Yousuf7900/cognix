import { api } from './client'
export const ClubsAPI = {
  list: ()=>api.get('/clubs'),
  save: (payload)=>api.post('/clubs', payload)
}
