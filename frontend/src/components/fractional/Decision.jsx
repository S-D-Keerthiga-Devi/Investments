import React from 'react';
import { useNavigate } from 'react-router-dom';

const Decisions = () => {
  const navigate = useNavigate()
  return (
    <section className="py-6 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">
          Buy or Sell Fractional Real Estate
          </h2>
          <p className="text-gray-600 text-xs md:text-sm mt-1">
          Invest smartly in premium commercial spaces or exit anytime with ease
          </p>
        </div>

        {/* Cards */}
        <div className="flex justify-center items-center gap-4 sm:gap-16">
          {/* Buy */}
          <div onClick={()=> navigate('#properties')} className="bg-gray-50 rounded-lg p-3 text-center border border-gray-100 hover:border-[#1e3a8a] hover:shadow-md transition-all duration-300 w-32 h-32 flex flex-col items-center justify-center cursor-pointer">
            <div className="w-6 h-6 bg-[#1e3a8a] rounded-md flex items-center justify-center mb-2">
              <svg
                className="w-3 h-3 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-xs text-[#1e3a8a] mb-1">
            Buy Fractional Shares
            </h3>
          </div>

          {/* Sell */}
          <div className="bg-gray-50 rounded-lg p-3 text-center border border-gray-100 hover:border-[#1e3a8a] hover:shadow-md transition-all duration-300 w-32 h-32 flex flex-col items-center justify-center cursor-pointer">
            <div className="w-6 h-6 bg-[#1e3a8a] rounded-md flex items-center justify-center mb-2">
              <svg
                className="w-3 h-3 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-xs text-[#1e3a8a] mb-1">
            Sell Your Shares
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Decisions;