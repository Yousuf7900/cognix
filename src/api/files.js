import { api } from './client'
export const FilesAPI = {
  list: (q)=>api.post('/files/search', q||{}),
  upload: (payload)=>api.post('/files/upload', payload),
  rate: (id, rating)=>api.post('/files/'+id+'/rate', { rating }),
  comment: (id, text)=>api.post('/files/'+id+'/comment', { text }),
}
