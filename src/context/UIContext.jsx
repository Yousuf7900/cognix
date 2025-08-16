/* eslint react-refresh/only-export-components: off */
import { createContext, useContext, useState } from 'react'

export const UIContext = createContext(null)
export const useUI = () => useContext(UIContext)

let id = 0

export function UIProvider({ children }) {
  const [toasts, setToasts] = useState([])

  function notify(msg) {
    const toast = { id: id++, msg }
    setToasts(t => [...t, toast])
    setTimeout(() => {
      setToasts(t => t.filter(x => x.id !== toast.id))
    }, 3000)
  }

  return (
    <UIContext.Provider value={{ toasts, notify }}>
      {children}
    </UIContext.Provider>
  )
}
