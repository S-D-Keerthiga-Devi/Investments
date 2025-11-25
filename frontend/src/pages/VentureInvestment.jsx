// fractional.jsx (landing page)
import Cards from '../components/venture/Cards'
import About from '../components/venture/About'
import Decision from '../components/venture/Decision'
import React, { useEffect } from 'react'
import Steps from '../components/venture/Steps'
import Comments from '../components/venture/Comments'
import Hero from '../components/venture/Hero'
import Features from '../components/venture/Features'
import { useLocation } from 'react-router-dom'

export default function Reit() {
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