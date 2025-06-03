import React from 'react'
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom'
import Timesheet from './Timesheet'
import Manager from './Manager'
import Admin from './Admin'

export default function Dashboard(){
  const navigate = useNavigate()
  const logout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-gray-800 text-white p-4 flex space-x-4">
        <NavLink to="" end className="hover:underline">Min Flextid</NavLink>
        <NavLink to="manager" className="hover:underline">Chefvy</NavLink>
        <NavLink to="admin" className="hover:underline">Admin</NavLink>
        <button onClick={logout} className="ml-auto">Logga ut</button>
      </nav>
      <main className="flex-1 p-4">
        <Routes>
          <Route path="" element={<Timesheet />} />
          <Route path="manager" element={<Manager />} />
          <Route path="admin" element={<Admin />} />
        </Routes>
      </main>
    </div>
  )
}
