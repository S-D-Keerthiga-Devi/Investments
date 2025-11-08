import React from 'react';
import { ArrowRight, Rocket, Users, LineChart, FileCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const VentureHero = () => {
  const navigate = useNavigate()
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
              <span className="text-gray-900">Invest in Tomorrow’s</span>
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
              <button onClick={()=> navigate('#properties')} className="group inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-indigo-900 rounded-lg hover:bg-indigo-800 transition-all duration-300 shadow-lg hover:shadow-xl">
                Explore Ventures
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={()=> navigate('#steps')} className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-indigo-900 bg-white border-2 border-indigo-900 rounded-lg hover:bg-indigo-50 transition-all duration-300">
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

          {/* Right Image */}
          <div className="relative lg:h-[400px] flex items-center justify-center">
            <div className="relative w-full max-w-xl">
              <div className="relative rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.01] transition-all duration-500">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=800&fit=crop"
                  alt="Startup Team Collaboration"
                  className="w-full h-[300px] lg:h-[350px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 via-transparent to-transparent"></div>

                {/* Floating Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Featured Venture</p>
                      <h3 className="text-lg font-bold text-gray-900">GreenPulse Tech</h3>
                      <p className="text-xs text-gray-500 mt-1">Sustainable Energy Platform</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-600 mb-1">Expected ROI</p>
                      <p className="text-2xl font-bold text-indigo-900">22%</p>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-gray-200 flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <div>
                        <p className="text-xs text-gray-500">Min Investment</p>
                        <p className="text-sm font-semibold text-gray-900">₹5L</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Round</p>
                        <p className="text-sm font-semibold text-gray-900">Series A</p>
                      </div>
                    </div>
                    <button onClick={()=> navigate('#properties')} className="px-3 py-1 bg-indigo-900 text-white text-xs font-semibold rounded-md hover:bg-indigo-800 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default VentureHero;
