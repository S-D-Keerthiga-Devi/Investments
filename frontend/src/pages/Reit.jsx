// fractional.jsx (landing page)
import Cards from '../components/reit/Cards'
import About from '../components/reit/About'
import Decision from '../components/reit/Decision'
import React, { useEffect } from 'react'
import Steps from '../components/reit/Steps'
import Comments from '../components/reit/Comments'
import Hero from '../components/reit/Hero'
import Features from '../components/reit/Features'
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
        <div id="about"><About/></div>
        <div id="features"><Features/></div>
        <div id="properties"><Cards/></div>
        <div id="steps"><Steps/></div>
        <div id="comments"><Comments/></div>
    </div>
  )
}