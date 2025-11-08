import React from 'react'
import NavbarDemo from './components/fractional/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/fractional/Footer'

export default function FractionalLayout() {
  return (
    <div>
        <NavbarDemo/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
