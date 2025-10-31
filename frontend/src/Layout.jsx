import React from 'react'
import NavbarDemo from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

export default function Layout() {
  return (
    <div>
        <NavbarDemo/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
