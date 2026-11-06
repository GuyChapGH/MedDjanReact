import React, { useEffect, useState } from 'react'

import './App.css'

export default function App() {
  const [message, setMessage] = useState('');
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/blog/hello/`)
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);
  return (
    <div>
      <h1>React + Django</h1>
      <p>{message}</p>
    </div>
  );
}


