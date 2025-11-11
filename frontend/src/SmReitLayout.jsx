import React from 'react'
import NavbarDemo from './components/smreit/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/smreit/Footer'

export default function ReitLayout() {
  return (
    <div>
        <NavbarDemo/>
        <Outlet/>
        <div id="footer"><Footer/></div>
    </div>
  )
}
