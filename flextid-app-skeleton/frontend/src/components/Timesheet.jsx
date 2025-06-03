import React,{useState,useEffect} from 'react'
import axios from 'axios'
import jwtDecode from 'jwt-decode'

export default function Timesheet(){
  const [entries,setEntries]=useState([])
  const [form,setForm]=useState({date:'',start:'08:00',lunch_start:'12:00',lunch_end:'13:00',end:'17:00'})
  const token = localStorage.getItem('token')
  const headers={Authorization:`Bearer ${token}`}

  const fetchEntries=()=>axios.get('http://localhost:3001/api/entries',{headers}).then(r=>setEntries(r.data))
  useEffect(()=>{fetchEntries()},[])

  const handleSubmit=e=>{
    e.preventDefault()
    axios.post('http://localhost:3001/api/entries',form,{headers}).then(()=>{fetchEntries();setForm({...form,date:''})})
  }

  const totalFlex = entries.reduce((sum,e)=>sum+e.flex,0).toFixed(2)

  return (
    <div>
      <h2 className="text-xl mb-4">Registrera flextid</h2>
      <form onSubmit={handleSubmit} className="space-x-2 mb-6 flex flex-wrap">
        <input type="date" value={form.date} onChange={e=>setForm({...form,date:e.target.value})} required className="border p-1"/>
        <input type="time" value={form.start} onChange={e=>setForm({...form,start:e.target.value})} required className="border p-1"/>
        <input type="time" value={form.lunch_start} onChange={e=>setForm({...form,lunch_start:e.target.value})} required className="border p-1"/>
        <input type="time" value={form.lunch_end} onChange={e=>setForm({...form,lunch_end:e.target.value})} required className="border p-1"/>
        <input type="time" value={form.end} onChange={e=>setForm({...form,end:e.target.value})} required className="border p-1"/>
        <button className="bg-green-600 text-white px-3 rounded">Spara</button>
      </form>
      <h3 className="text-lg mb-2">Mina registreringar (Saldo: {totalFlex} h)</h3>
      <table className="min-w-full bg-white shadow">
        <thead><tr><th className="p-2 border">Datum</th><th className="p-2 border">Arbetade timmar</th><th className="p-2 border">Flex</th></tr></thead>
        <tbody>{entries.map(e=><tr key={e.id}><td className="border p-1">{e.date}</td><td className="border p-1">{e.hours_worked.toFixed(2)}</td><td className="border p-1">{e.flex.toFixed(2)}</td></tr>)}</tbody>
      </table>
    </div>
  )
}
