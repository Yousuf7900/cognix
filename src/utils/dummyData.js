const db = {
  users: [
    { id:1, name:'Admin', email:'admin@example.com', role:'admin' },
    { id:2, name:'Sam Student', email:'sam@example.com', role:'student' },
  ],
  files: [
    { id:1, name:'Algorithms Notes.pdf', course:'CSE201', department:'CSE', type:'pdf', rating:4.5, downloads:120, uploader:2, createdAt: Date.now()-86400000*4 },
    { id:2, name:'Digital Logic Slides.pptx', course:'EEE210', department:'EEE', type:'pptx', rating:4.0, downloads:33, uploader:2, createdAt: Date.now()-86400000*8 },
  ],
  requests: [
    { id:1, title:'Need past papers for CSE201', course:'CSE201', status:'pending', priority:'high', requester:2, createdAt: Date.now()-86400000*2 },
  ],
  events: [
    { id:1, title:'AI Club Meetup', date: new Date(Date.now()+86400000*5).toISOString(), location:'Auditorium', cover:'/logo.svg', rsvps:12 },
  ],
  clubs: [
    { id:1, name:'AI Club', desc:'Exploring ML/AI', members: 45 },
    { id:2, name:'Robotics', desc:'Build cool bots', members: 28 },
  ],
  notifications: [
    { id:1, type:'event', text:'AI Club Meetup next week' },
    { id:2, type:'request', text:'Your request got upvoted' },
  ]
}

function json(data){ return Promise.resolve(JSON.parse(JSON.stringify(data))) }

export async function mock(path, options) {
  const method = (options?.method||'GET').toUpperCase()
  const body = options?.body ? JSON.parse(options.body) : {}

  if (path.startsWith('/auth/login') && method==='POST') {
    const user = db.users.find(u=>u.email===body.email) || db.users[1]
    return json({ user })
  }
  if (path.startsWith('/auth/register') && method==='POST') {
    const id = db.users.length+1
    const user = { id, name: body.name||'New User', email: body.email, role:'student' }
    db.users.push(user)
    return json({ user })
  }
  if (path==='/events') return json({ items: db.events })
  if (path==='/clubs') return json({ items: db.clubs })
  if (path==='/notifications') return json({ items: db.notifications })
  if (path==='/requests' && method==='GET') return json({ items: db.requests })
  if (path==='/requests' && method==='POST') {
    const id = db.requests.length+1
    const item = { id, ...body, status:'pending', createdAt: Date.now() }
    db.requests.push(item); return json({ item })
  }
  if (path.startsWith('/files/search')) return json({ items: db.files })
  if (path.startsWith('/admin/analytics')) {
    return json({
      submissionsLast30: 42,
      topContributors: db.users.slice(0,3).map(u=>({ name:u.name, uploads: Math.floor(Math.random()*10)+1 }))
    })
  }
  return json({ ok:true })
}
