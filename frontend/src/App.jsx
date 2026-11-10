import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'

export default function App() {
  const [message, setMessage] = useState('');


/*useEffect(() => {
  fetch(`${import.meta.env.VITE_API_URL}/blog/hello/`)
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);

*/
  useEffect(() => {
    axios
      //.get("http://localhost:8000/blog/hello/")
      .get(`${import.meta.env.VITE_API_URL}/blog/hello`)
      .then(res => setMessage(res.data.message))
      .catch(err => console.log(err));
  }
  )

  return (
    <div>
      <h1>React + Django</h1>
      <p>{message}</p>
    </div>
  );
}


