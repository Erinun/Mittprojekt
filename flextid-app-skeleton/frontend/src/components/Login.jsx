import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [error,setError]=useState('')
  const navigate = useNavigate()

  const handleSubmit= async e =>{
    e.preventDefault()
    try{
      const res = await axios.post('http://localhost:3001/api/login',{email,password})
      localStorage.setItem('token',res.data.token)
      navigate('/dashboard')
    }catch(err){
      setError(err.response?.data?.error || 'Något gick fel')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="bg-white shadow-md rounded p-8" onSubmit={handleSubmit}>
        <h1 className="text-2xl mb-4 text-center">Logga in</h1>
        {error && <p className="text-red-500">{error}</p>}
        <input className="border p-2 mb-4 w-full" type="email" placeholder="E-post" value={email} onChange={e=>setEmail(e.target.value)} required/>
        <input className="border p-2 mb-4 w-full" type="password" placeholder="Lösenord" value={password} onChange={e=>setPassword(e.target.value)} required/>
        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">Logga in</button>
      </form>
    </div>
  )
}
