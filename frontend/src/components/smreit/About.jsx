import React from 'react';
import { TrendingUp } from 'lucide-react';

export default function SMREITAbout() {
  const smReit = {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "SM REIT",
    description: "Diversified exposure to premium commercial real estate through regulated REITs.",
    estimatedROI: "10-14%",
    riskLevel: "Low to Medium",
    features: [
      "Invest in a professionally managed real estate portfolio",
      "Earn consistent rental income and capital appreciation",
      "High liquidity — buy or sell units anytime",
      "Start with investments as low as ₹10,000",
      "Regulated by SEBI ensuring transparency and compliance"
    ],
    bgColor: "bg-indigo-50"
  };

  return (
    <div className="min-h-[60vh] bg-white">
      {/* SM REIT Section */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-1">
              SM REIT Investments
            </h2>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              A simple and transparent way to invest in premium commercial real estate through regulated REITs.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow hover:shadow-md transition-all duration-300 overflow-hidden">
            <div className={`${smReit.bgColor} p-4 flex justify-center`}>
              <div className="text-blue-900">{smReit.icon}</div>
            </div>

            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {smReit.title}
              </h3>
              <p className="text-gray-700 mb-4 text-sm">{smReit.description}</p>

              <div className="grid grid-cols-2 gap-3 mb-4 p-3 bg-gray-50 rounded">
                <div>
                  <p className="text-[11px] text-gray-500 uppercase mb-1">ROI</p>
                  <p className="text-sm font-semibold text-blue-900">{smReit.estimatedROI}</p>
                </div>
                <div>
                  <p className="text-[11px] text-gray-500 uppercase mb-1">Risk</p>
                  <p className="text-sm font-semibold text-blue-900">{smReit.riskLevel}</p>
                </div>
              </div>

              <ul className="space-y-2">
                {smReit.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="w-3.5 h-3.5 text-blue-900 mr-2 mt-0.5 flex-shrink-0"
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
