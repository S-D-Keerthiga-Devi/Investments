import React from 'react'
import NavbarDemo from './components/venture/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/venture/Footer'

export default function ReitLayout() {
  return (
    <div>
        <NavbarDemo/>
        <Outlet/>
        <div id="footer"><Footer/></div>
    </div>
  )
}
