import React from 'react';
import { Building2 } from 'lucide-react';

export default function About() {
  const fractionalInvestment = {
    icon: <Building2 className="w-5 h-5" />,
    title: "Fractional Investment",
    description: "Own shares of premium commercial properties with minimal capital and steady income potential.",
    estimatedROI: "12–18%",
    riskLevel: "Medium",
    features: [
      "Co-own institutional-grade real estate",
      "Start with lower investment amounts",
      "Earn quarterly rental income",
      "Enjoy capital appreciation on exit",
      "Access professionally managed assets"
    ],
    bgColor: "bg-blue-50"
  };

  return (
    <div className="min-h-[50vh] bg-white">
      {/* Fractional Investment Section */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-blue-900 mb-2">
              Why Choose Fractional Investment
            </h2>
            <p className="text-xs md:text-sm text-gray-600 max-w-2xl mx-auto">
              Invest fractionally in high-value real estate and enjoy ownership benefits without the full cost burden.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow hover:shadow-md transition-all duration-300 overflow-hidden">
            <div className={`${fractionalInvestment.bgColor} p-3 flex justify-center`}>
              <div className="text-blue-900">{fractionalInvestment.icon}</div>
            </div>

            <div className="p-4 md:p-5">
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">
                {fractionalInvestment.title}
              </h3>
              <p className="text-gray-600 text-xs md:text-sm mb-4">
                {fractionalInvestment.description}
              </p>

              <div className="grid grid-cols-2 gap-3 mb-4 p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-[10px] text-gray-500 uppercase mb-1">Expected ROI</p>
                  <p className="text-sm font-bold text-blue-900">{fractionalInvestment.estimatedROI}</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase mb-1">Risk Level</p>
                  <p className="text-sm font-bold text-blue-900">{fractionalInvestment.riskLevel}</p>
                </div>
              </div>

              <ul className="space-y-2">
                {fractionalInvestment.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="w-3 h-3 text-blue-900 mr-2 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700 text-xs md:text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
