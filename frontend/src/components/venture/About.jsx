import React from 'react';
import { Rocket } from 'lucide-react';

export default function VentureInvestment() {
  const venture = {
    icon: <Rocket className="w-5 h-5" />,
    title: "Venture Investment",
    description: "High-growth potential in emerging real estate ventures",
    estimatedROI: "18-25%",
    riskLevel: "Medium to High",
    features: [
      "Access to innovative real estate projects",
      "Higher return potential compared to traditional REITs",
      "Early-stage investment opportunities",
      "Strong portfolio diversification benefits",
      "Backed by expert market insights"
    ],
    bgColor: "bg-purple-50"
  };

  return (
    <div className="min-h-[60vh] bg-white">
      {/* Venture Investment Section */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">
              Venture Investment Opportunities
            </h2>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              Invest in high-growth real estate ventures and innovative property development startups. 
              Ideal for investors seeking long-term capital appreciation and portfolio diversification.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow hover:shadow-md transition-all duration-300 overflow-hidden">
            <div className={`${venture.bgColor} p-4 flex justify-center`}>
              <div className="text-blue-900">{venture.icon}</div>
            </div>

            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {venture.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">{venture.description}</p>

              <div className="grid grid-cols-2 gap-3 mb-4 p-3 bg-gray-50 rounded">
                <div>
                  <p className="text-[11px] text-gray-500 uppercase mb-1">Estimated ROI</p>
                  <p className="text-base font-bold text-blue-900">
                    {venture.estimatedROI}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-gray-500 uppercase mb-1">Risk Level</p>
                  <p className="text-base font-bold text-blue-900">
                    {venture.riskLevel}
                  </p>
                </div>
              </div>

              <ul className="space-y-2">
                {venture.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="w-3.5 h-3.5 text-blue-900 mr-1.5 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700 text-sm">{feature}</span>
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
