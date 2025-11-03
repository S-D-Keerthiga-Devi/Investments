import React from 'react';
import { Search, FileCheck, LineChart, TrendingUp, Shield, Award, BarChart3, Users } from 'lucide-react';

export default function Steps() {
  const steps = [
    {
      phase: "Phase 1",
      title: "Choose Investment",
      icon: <Search className="w-6 h-6" />,
      points: [
        "Browse and select from our curated list of opportunities",
        "Review detailed property information and financial projections"
      ]
    },
    {
      phase: "Phase 2",
      title: "Complete KYC",
      icon: <FileCheck className="w-6 h-6" />,
      points: [
        "A quick and secure verification process to get you started",
        "Submit required documents for regulatory compliance"
      ]
    },
    {
      phase: "Phase 3",
      title: "Track Portfolio",
      icon: <LineChart className="w-6 h-6" />,
      points: [
        "Monitor your investments and growth through our platform",
        "Access real-time analytics and performance metrics"
      ]
    },
    {
      phase: "Phase 4",
      title: "Earn Returns",
      icon: <TrendingUp className="w-6 h-6" />,
      points: [
        "Receive regular rental income and capital appreciation",
        "Enjoy hassle-free passive income from your investments"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Fully Regulated",
      description: "We operate under strict regulatory compliance, ensuring your investments are secure."
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Professionally Audited",
      description: "All our properties and financials are vetted by top-tier auditing firms."
    },
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: "Low Entry Barrier",
      description: "Start investing in premium real estate with a fraction of the total cost."
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Hassle-Free Exit",
      description: "Our secondary market provides a seamless and liquid exit strategy for investors."
    }
  ];

  return (
    <div className="min-h-[60vh] bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4">
            Getting Started is Simple
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto font-light">
            Follow our streamlined process to begin your real estate investment journey
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Horizontal line for desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-[#1e3a8a] z-0"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative z-10">
              {/* Vertical line for mobile */}
              {index < steps.length - 1 && (
                <div className="lg:hidden absolute top-12 left-6 w-0.5 h-[calc(100%-1.5rem)] bg-[#1e3a8a] z-0"></div>
              )}
              
              {/* Icon with phase label centered above */}
              <div className="mb-4 flex flex-col items-center">
                {/* Phase Label */}
                <span className="text-[#1e3a8a] font-semibold text-xs uppercase tracking-wider mb-2">
                  {step.phase}
                </span>
                <div className="h-1 w-12 bg-[#1e3a8a] rounded-full"></div>
                
                {/* Icon */}
                <div className="mt-3 relative flex justify-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#1e3a8a] opacity-10"></div>
                  </div>
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-[#1e3a8a] text-[#1e3a8a] shadow-md">
                    {step.icon}
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">
                {step.title}
              </h3>

              {/* Points */}
              <ul className="space-y-2">
                {step.points.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#1e3a8a] text-white flex-shrink-0 mr-2 mt-0.5">
                      <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-gray-600 text-sm leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <button className="bg-[#1e3a8a] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1e40af] transition-colors duration-300 shadow-lg hover:shadow-xl">
            Start Your Investment Journey
          </button>
        </div>

        {/* Why Invest With Us Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Why Invest With Us
            </h2>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              Benefit from our commitment to security, transparency, and investor-focused solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="text-center p-4 rounded-lg hover:bg-blue-50 transition-all duration-300"
              >
                <div className="flex justify-center mb-3 text-blue-900">
                  {benefit.icon}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}