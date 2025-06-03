import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function Manager(){
  const [data,setData]=useState({users:[],entries:[]})
  const token=localStorage.getItem('token')
  const headers={Authorization:`Bearer ${token}`}
  useEffect(()=>{axios.get('http://localhost:3001/api/subordinates',{headers}).then(r=>setData(r.data))},[])
  return (
    <div>
      <h2 className="text-xl mb-4">Mina medarbetare</h2>
      {data.users.length===0?<p>Inga medarbetare kopplade.</p>:
      data.users.map(u=>{
        const ent = data.entries.filter(e=>e.user_id===u.id)
        const saldo = ent.reduce((s,e)=>s+e.flex,0).toFixed(2)
        return (
          <div key={u.id} className="mb-4">
            <h3 className="font-semibold">{u.first_name} {u.last_name} (Saldo: {saldo} h)</h3>
            <table className="min-w-full bg-white shadow">
              <thead><tr><th className="p-1 border">Datum</th><th className="p-1 border">Flex</th></tr></thead>
              <tbody>{ent.map(e=><tr key={e.id}><td className="border p-1">{e.date}</td><td className="border p-1">{e.flex.toFixed(2)}</td></tr>)}</tbody>
            </table>
          </div>
        )
      })}
    </div>
  )
}
