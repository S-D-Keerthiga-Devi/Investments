import React, { useState, useEffect } from 'react';
import { ArrowRight, Rocket, Users, LineChart, FileCheck, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

const VentureHero = () => {
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500&h=300&fit=crop",
      title: "GreenPulse Tech",
      location: "Bengaluru, India",
      type: "Series A",
      yield: "22%",
      minInvestment: "₹5,00,000",
      sector: "Clean Energy",
      rating: 5,
      badge: "bg-green-700",
      ownership: "Venture - Sustainable Energy",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop",
      title: "FinNext Solutions",
      location: "Mumbai, India",
      type: "Series B",
      yield: "28%",
      minInvestment: "₹10,00,000",
      sector: "FinTech",
      rating: 5,
      badge: "bg-blue-900",
      ownership: "Venture - Financial Technology",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&h=300&fit=crop",
      title: "HealthBot AI",
      location: "Hyderabad, India",
      type: "Seed Round",
      yield: "35%",
      minInvestment: "₹2,50,000",
      sector: "HealthTech",
      rating: 5,
      badge: "bg-purple-700",
      ownership: "Venture - Healthcare AI",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleExplore = () => {
    const propertiesSection = document.querySelector("#properties");
    if (propertiesSection) {
      propertiesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLearnMore = () => {
    const stepsSection = document.querySelector("#steps");
    if (stepsSection) {
      stepsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-[60vh] bg-gradient-to-br from-white via-indigo-50/30 to-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-indigo-100/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[60vh] py-8">

          {/* Left Section */}
          <div className="relative z-10 space-y-4">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-100 rounded-full px-3 py-1">
              <Rocket className="w-4 h-4 text-indigo-900" />
              <span className="text-xs font-semibold text-indigo-900">Fueling 100+ Startups</span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-gray-900">Invest in Tomorrow's</span>
              <br />
              <span className="bg-gradient-to-r from-indigo-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent">
                Fastest Growing Startups.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base text-gray-600 leading-relaxed max-w-lg">
              Discover curated startup opportunities backed by experts. 
              Diversify your portfolio with early-stage ventures and next-gen businesses shaping the future.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button 
                onClick={handleExplore} 
                className="group inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-indigo-900 rounded-lg hover:bg-indigo-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Ventures
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={handleLearnMore} 
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-indigo-900 bg-white border-2 border-indigo-900 rounded-lg hover:bg-indigo-50 transition-all duration-300"
              >
                Learn How It Works
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
              <div>
                <p className="text-xl font-bold text-indigo-900">35%</p>
                <p className="text-xs text-gray-600 mt-1">Avg. IRR (Top Ventures)</p>
              </div>
              <div>
                <p className="text-xl font-bold text-indigo-900">100+</p>
                <p className="text-xs text-gray-600 mt-1">Startups Funded</p>
              </div>
              <div>
                <p className="text-xl font-bold text-indigo-900">$80M+</p>
                <p className="text-xs text-gray-600 mt-1">Capital Raised</p>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="pt-4">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex flex-col items-center text-center group">
                  <div className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                    <FileCheck className="w-4 h-4 text-indigo-900" />
                  </div>
                  <p className="text-xs text-gray-600 mt-1 font-medium">SEBI Registered</p>
                </div>

                <div className="flex flex-col items-center text-center group">
                  <div className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                    <LineChart className="w-4 h-4 text-indigo-900" />
                  </div>
                  <p className="text-xs text-gray-600 mt-1 font-medium">Data-Driven Insights</p>
                </div>

                <div className="flex flex-col items-center text-center group">
                  <div className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                    <Users className="w-4 h-4 text-indigo-900" />
                  </div>
                  <p className="text-xs text-gray-600 mt-1 font-medium">Global Network</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Carousel Section */}
          <div className="relative flex items-center justify-center py-8">
            <div className="relative w-full max-w-md mx-auto">
              <div className="relative h-[480px]">
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-700 ${
                      index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                  >
                    <div className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                      {/* Image Section */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        {/* Type Badge */}
                        <div className="absolute top-2 left-2">
                          <span className={`${slide.badge} px-2 py-1 text-xs font-bold tracking-wide text-white uppercase rounded-full shadow`}>
                            {slide.type}
                          </span>
                        </div>

                        {/* ROI Badge */}
                        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full shadow">
                          <p className="text-xs font-bold text-indigo-900">{slide.yield} ROI</p>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-4">
                        <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-indigo-900 transition-colors">
                          {slide.title}
                        </h3>

                        {/* Location */}
                        <div className="flex items-center text-gray-500 mb-3">
                          <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                          <span className="text-sm">{slide.location}</span>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center mb-3">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${i < slide.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                          <span className="text-sm text-gray-600 ml-1">({slide.rating}.0)</span>
                        </div>

                        {/* Investment Details */}
                        <div className="grid grid-cols-2 gap-3 mb-3 p-3 bg-gray-50 rounded">
                          <div>
                            <p className="text-xs text-gray-500 mb-1">Min Investment</p>
                            <p className="text-sm font-bold text-gray-900">{slide.minInvestment}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 mb-1">Sector</p>
                            <p className="text-sm font-bold text-gray-900">{slide.sector}</p>
                          </div>
                        </div>

                        {/* Ownership Type */}
                        <div className="text-center text-xs text-indigo-900 font-semibold mb-3">
                          {slide.ownership}
                        </div>

                        {/* CTA Button */}
                        <button
                          onClick={handleExplore}
                          className="w-full py-2 bg-indigo-900 text-white text-sm font-semibold rounded hover:bg-indigo-800 transition-colors duration-300 flex items-center justify-center group"
                        >
                          View Details
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Carousel Controls */}
              <button
                onClick={() => setCurrent(current === 0 ? slides.length - 1 : current - 1)}
                className="absolute top-1/2 -left-12 transform -translate-y-1/2 bg-white hover:bg-gray-50 text-indigo-900 p-2 rounded-full shadow-md hover:shadow-lg transition-all z-20"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setCurrent(current === slides.length - 1 ? 0 : current + 1)}
                className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-white hover:bg-gray-50 text-indigo-900 p-2 rounded-full shadow-md hover:shadow-lg transition-all z-20"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Carousel Indicators */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === current ? 'bg-indigo-900 w-6' : 'bg-gray-300 w-2'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default VentureHero;