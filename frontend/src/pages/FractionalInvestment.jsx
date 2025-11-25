// fractional.jsx (landing page)
import Cards from '../components/fractional/Cards'
import About from '../components/fractional/About'
import Decision from '../components/fractional/Decision'
import React, { useEffect } from 'react'
import Steps from '../components/fractional/Steps'
import Comments from '../components/fractional/Comments'
import Hero from '../components/fractional/Hero'
import Features from '../components/fractional/Features'
import { useLocation } from 'react-router-dom'

export default function FractionalInvestment() {
  const location = useLocation();

  useEffect(() => {
    // Function to scroll to element
    const scrollToElement = (elementId) => {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // Check if there's a hash in the URL
    if (location.hash) {
      // Remove the '#' and get the element ID
      const elementId = location.hash.substring(1);
      // Scroll to the element
      setTimeout(() => scrollToElement(elementId), 100);
    }
  }, [location]);

  return (
    <div>
        <div id="hero"><Hero/></div>
        <div id="decision"><Decision/></div>
        <div id="properties"><Cards/></div>
        <div id="steps"><Steps/></div>
        <div id="features"><Features/></div>
        <div id="comments"><Comments/></div>
    </div>
  )
}