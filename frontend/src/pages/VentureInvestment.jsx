import Cards from '../components/Cards'
import About from '../components/About'
import Decision from '../components/Decision'
import React from 'react'
import Steps from '../components/Steps'
import Comments from '../components/Comments'
import Hero from '../components/Hero'
import Features from '../components/Features'

export default function Landing() {
  return (
    <div>
        <Hero/>
        <Decision/>
        <About/>
        <Features/>
        <Cards/>
        <Steps/>
        <Comments/>
    </div>
  )
}
