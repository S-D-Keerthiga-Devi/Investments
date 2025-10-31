import React from 'react';
import { Search, FileCheck, LineChart, TrendingUp } from 'lucide-react';

export default function Steps() {
  const steps = [
    {
      phase: "Phase 1",
      title: "Choose Investment",
      icon: <Search className="w-8 h-8" />,
      points: [
        "Browse and select from our curated list of opportunities",
        "Review detailed property information and financial projections"
      ]
    },
    {
      phase: "Phase 2",
      title: "Complete KYC",
      icon: <FileCheck className="w-8 h-8" />,
      points: [
        "A quick and secure verification process to get you started",
        "Submit required documents for regulatory compliance"
      ]
    },
    {
      phase: "Phase 3",
      title: "Track Portfolio",
      icon: <LineChart className="w-8 h-8" />,
      points: [
        "Monitor your investments and growth through our platform",
        "Access real-time analytics and performance metrics"
      ]
    },
    {
      phase: "Phase 4",
      title: "Earn Returns",
      icon: <TrendingUp className="w-8 h-8" />,
      points: [
        "Receive regular rental income and capital appreciation",
        "Enjoy hassle-free passive income from your investments"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-[#1e3a8a] mb-6">
            Getting Started is Simple
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Follow our streamlined process to begin your real estate investment journey
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Horizontal line for desktop */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-[#1e3a8a] z-0"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative z-10">
              {/* Vertical line for mobile */}
              {index < steps.length - 1 && (
                <div className="lg:hidden absolute top-16 left-8 w-0.5 h-[calc(100%-2rem)] bg-[#1e3a8a] z-0"></div>
              )}
              
              {/* Icon with phase label centered above */}
              <div className="mb-6 flex flex-col items-center">
                {/* Phase Label */}
                <span className="text-[#1e3a8a] font-semibold text-sm uppercase tracking-wider mb-2">
                  {step.phase}
                </span>
                <div className="h-1 w-16 bg-[#1e3a8a] rounded-full"></div>
                
                {/* Icon */}
                <div className="mt-4 relative flex justify-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-[#1e3a8a] opacity-10"></div>
                  </div>
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-white border-4 border-[#1e3a8a] text-[#1e3a8a] shadow-md">
                    {step.icon}
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                {step.title}
              </h3>

              {/* Points */}
              <ul className="space-y-3">
                {step.points.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1e3a8a] text-white flex-shrink-0 mr-3 mt-0.5">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-gray-600 leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <button className="bg-[#1e3a8a] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1e40af] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Start Your Investment Journey
          </button>
        </div>
      </div>
    </div>
  );
}