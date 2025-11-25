import React from 'react';
import { useNavigate } from 'react-router-dom';

const Decisions = () => {
  const navigate = useNavigate();
  return (
    <section className="py-6 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">
            Buy or Sell REIT Investments
          </h2>
          <p className="text-gray-600 text-xs md:text-sm mt-1">
            Build wealth through premium real estate portfolios — buy new units or sell your holdings seamlessly
          </p>
        </div>

        {/* Cards */}
        <div className="flex justify-center items-center gap-4 sm:gap-16">
          {/* Buy */}
          <div
            onClick={() => navigate('#properties')}
            className="bg-gray-50 rounded-lg p-3 text-center border border-gray-100 hover:border-[#1e3a8a] hover:shadow-md transition-all duration-300 w-32 h-32 flex flex-col items-center justify-center cursor-pointer"
          >
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
                  d="M12 8c-1.657 0-3 1.343-3 3v5H6a2 2 0 01-2-2V9l8-4 8 4v5a2 2 0 01-2 2h-3v-5c0-1.657-1.343-3-3-3z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-xs text-[#1e3a8a] mb-1">
              Buy REIT Units
            </h3>
          </div>

          {/* Sell */}
          <div
            onClick={() => navigate('#sell-reit')}
            className="bg-gray-50 rounded-lg p-3 text-center border border-gray-100 hover:border-[#1e3a8a] hover:shadow-md transition-all duration-300 w-32 h-32 flex flex-col items-center justify-center cursor-pointer"
          >
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
                  d="M12 8v8m0 0l3-3m-3 3l-3-3m9-9a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-xs text-[#1e3a8a] mb-1">
              Sell REIT Units
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Decisions;