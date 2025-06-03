import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function Admin(){
  const [users,setUsers]=useState([])
  const token=localStorage.getItem('token')
  const headers={Authorization:`Bearer ${token}`}
  useEffect(()=>{axios.get('http://localhost:3001/api/users',{headers}).then(r=>setUsers(r.data))},[])
  return (
    <div>
      <h2 className="text-xl mb-4">Alla användare</h2>
      <table className="min-w-full bg-white shadow">
        <thead><tr><th className="p-1 border">Namn</th><th className="p-1 border">Roll</th><th className="p-1 border">Enhet</th></tr></thead>
        <tbody>{users.map(u=><tr key={u.id}><td className="border p-1">{u.first_name} {u.last_name}</td><td className="border p-1">{u.role}</td><td className="border p-1">{u.unit}</td></tr>)}</tbody>
      </table>
    </div>
  )
}
