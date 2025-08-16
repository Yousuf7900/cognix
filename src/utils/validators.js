export const required = (val)=> val && String(val).trim().length > 0
export function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
