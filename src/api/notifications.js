import { api } from './client'
export const NotificationsAPI = {
  list: ()=>api.get('/notifications')
}
