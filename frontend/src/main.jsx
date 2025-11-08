import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

import Layout from './Layout'
import Landing from './pages/Landing'
import FractionalLayout from './FractionalLayout'
import FractionalInvestment from './pages/FractionalInvestment'
import ReitLayout from './ReitLayout'
import Reit from './pages/Reit'
import SmReitLayout from './SmReitLayout'
import SmReit from './pages/SmReit'
import VentureLayout from './VentureLayout'
import VentureInvestment from './pages/VentureInvestment'
import VentureHero from './components/fractional/Hero'
import Decisions from './components/fractional/Decision'
import About from './components/fractional/About'
import Cards from './components/fractional/Cards'
import Steps from './components/fractional/Steps'
import Comments from './components/fractional/Comments'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
      </Route>

      {/* --- SITE 1 --- */}
      <Route path="/fractional-investment" element={<FractionalLayout />}>
      <Route index element={<FractionalInvestment />}/>
        
      </Route>

      {/* --- SITE 2 --- */}
      <Route path="/reit" element={<ReitLayout />}>
        <Route index element={<Reit />} />
      </Route>

      {/* --- SITE 3 --- */}
      <Route path="/sm-reit" element={<SmReitLayout />}>
        <Route index element={<SmReit />} />
      </Route>

      {/* --- SITE 4 --- */}
      <Route path="/venture-investment" element={<VentureLayout />}>
        <Route index element={<VentureInvestment />} />
      </Route>
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
