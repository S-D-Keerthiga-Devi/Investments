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
            Buy or Sell SM REIT Units
          </h2>
          <p className="text-gray-600 text-xs md:text-sm mt-1">
            Discover high-growth real estate investments designed for small & medium investors — invest or exit with ease.
          </p>
        </div>

        {/* Cards */}
        <div className="flex justify-center items-center gap-4 sm:gap-16">
          {/* Buy SM REIT */}
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
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-xs text-[#1e3a8a] mb-1">
              Buy SM REIT Units
            </h3>
          </div>

          {/* Sell SM REIT */}
          <div
            onClick={() => navigate('#sell-smreit')}
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
                  d="M12 20V8m0 0l-4 4m4-4l4 4"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-xs text-[#1e3a8a] mb-1">
              Sell SM REIT Units
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Decisions;