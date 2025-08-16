import { api } from './client'
export const EventsAPI = {
  list: ()=>api.get('/events'),
  rsvp: (id)=>api.post('/events/'+id+'/rsvp', {})
}
