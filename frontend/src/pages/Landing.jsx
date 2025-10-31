import Cards from '../components/Cards'
import About from '../components/About'
import Decision from '../components/Decision'
import React from 'react'
import Steps from '../components/Steps'
import Comments from '../components/Comments'
import Hero from '../components/Hero'

export default function Landing() {
  return (
    <div>
        <Hero/>
        <Decision/>
        <About/>
        <Cards/>
        <Steps/>
        <Comments/>
    </div>
  )
}
