// src/context/UIProvider.jsx
import React, { useState } from 'react';
import { UIContext } from './UIContext';

export default function UIProvider({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [toasts, setToasts] = useState([]);

  function notify(msg, type = 'info') {
    const id = Math.random().toString(36).slice(2);
    setToasts((t) => [...t, { id, msg, type }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 3000);
  }

  return (
    <UIContext.Provider value={{ sidebarOpen, setSidebarOpen, toasts, notify }}>
      {children}
    </UIContext.Provider>
  );
}
