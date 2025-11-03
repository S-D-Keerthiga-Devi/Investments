import React from 'react';
import { ArrowRight, TrendingUp, Users, FileCheck } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-[70vh] bg-gradient-to-br from-white via-blue-50/30 to-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-blue-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/5 h-1/5 bg-indigo-100/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[70vh] py-12">

          {/* Left Content Section */}
          <div className="relative z-10 space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 rounded-full px-3 py-1">
              <TrendingUp className="w-4 h-4 text-blue-900" />
              <span className="text-xs font-semibold text-blue-900">Trusted by 5,000+ Investors</span>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-gray-900">Own Real Estate,</span>
                <br />
                <span className="bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-900 bg-clip-text text-transparent">
                  Fraction by Fraction.
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-base text-gray-600 leading-relaxed max-w-lg">
              Invest in premium commercial spaces through fractional ownership, REITs, or venture-backed opportunities. Start building your real estate portfolio today.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="group inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-blue-900 rounded-lg hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl">
                Start Investing
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-blue-900 bg-white border-2 border-blue-900 rounded-lg hover:bg-blue-50 transition-all duration-300">
                Explore Properties
              </button>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div>
                <p className="text-2xl font-bold text-blue-900">14.2%</p>
                <p className="text-xs text-gray-600 mt-1">Avg. Annual ROI</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-900">5,000+</p>
                <p className="text-xs text-gray-600 mt-1">Happy Investors</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-900">$150M</p>
                <p className="text-xs text-gray-600 mt-1">Assets Managed</p>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="pt-4">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Backed by Trust & Transparency
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex flex-col items-center text-center group">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <FileCheck className="w-4 h-4 text-blue-900" />
                  </div>
                  <p className="text-xs text-gray-600 mt-1 font-medium">RERA Compliant</p>
                </div>

                <div className="flex flex-col items-center text-center group">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <svg className="w-4 h-4 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-xs text-gray-600 mt-1 font-medium">SEBI Regulated</p>
                </div>

                <div className="flex flex-col items-center text-center group">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <svg className="w-4 h-4 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-xs text-gray-600 mt-1 font-medium">ISO Certified</p>
                </div>

                <div className="flex flex-col items-center text-center group">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <svg className="w-4 h-4 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-xs text-gray-600 mt-1 font-medium">Data Encrypted</p>
                </div>

                <div className="flex flex-col items-center text-center group">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <Users className="w-4 h-4 text-blue-900" />
                  </div>
                  <p className="text-xs text-gray-600 mt-1 font-medium">Verified Partner</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative lg:h-[500px] flex items-center justify-center">
            {/* Main Image Container */}
            <div className="relative w-full max-w-xl">
              {/* Large Featured Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.01] transition-all duration-500">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop"
                  alt="Modern Commercial Building"
                  className="w-full h-[350px] lg:h-[450px] object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent"></div>

                {/* Floating Stats Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Featured Property</p>
                      <h3 className="text-lg font-bold text-gray-900">Tech Park, Bangalore</h3>
                      <p className="text-xs text-gray-500 mt-1 flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        Whitefield, Bangalore
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-600 mb-1">Expected IRR</p>
                      <p className="text-2xl font-bold text-blue-900">9.5%</p>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-gray-200 flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <div>
                        <p className="text-xs text-gray-500">Min Investment</p>
                        <p className="text-sm font-semibold text-gray-900">₹25L</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Tenure</p>
                        <p className="text-sm font-semibold text-gray-900">5 Years</p>
                      </div>
                    </div>
                    <button className="px-3 py-1 bg-blue-900 text-white text-xs font-semibold rounded-md hover:bg-blue-800 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-3xl opacity-20 blur-2xl"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;