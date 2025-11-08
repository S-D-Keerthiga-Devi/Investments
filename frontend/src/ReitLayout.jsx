import React from 'react'
import NavbarDemo from './components/reit/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/reit/Footer'

export default function ReitLayout() {
  return (
    <div>
        <NavbarDemo/>
        <Outlet/>
        <div id="footer"><Footer/></div>
    </div>
  )
}
