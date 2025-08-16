const MOCK = true; // flip to false when backend is ready
const BASE = '/api'; // your PHP endpoints base

async function request(path, options = {}) {
  if (MOCK) {
    const { mock } = await import('../utils/dummyData.js');
    return mock(path, options);
  } else {
    const res = await fetch(BASE + path, {
      headers: { 'Content-Type': 'application/json', ...(options.headers||{}) },
      credentials: 'include',
      ...options
    });
    if (!res.ok) throw new Error(await res.text());
    return res.json();
  }
}

export const api = {
  get: (p)=>request(p),
  post: (p, body)=>request(p, { method:'POST', body: JSON.stringify(body) }),
  put: (p, body)=>request(p, { method:'PUT', body: JSON.stringify(body) }),
  del: (p)=>request(p, { method:'DELETE' })
}
