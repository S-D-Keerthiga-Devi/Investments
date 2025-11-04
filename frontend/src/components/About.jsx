import React from 'react';
import { Building2, TrendingUp, Rocket } from 'lucide-react';

export default function About() {
  const investmentTypes = [
    {
      icon: <Building2 className="w-5 h-5" />,
      title: "Fractional Investment",
      description: "Direct ownership in high-value properties",
      estimatedROI: "12-18%",
      riskLevel: "Medium",
      features: [
        "Own shares in premium real estate",
        "Lower capital requirements",
        "Direct property ownership rights",
        "Quarterly dividend distributions"
      ],
      bgColor: "bg-blue-50"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "REIT / SM REIT",
      description: "Diversified portfolio through Real Estate Investment Trusts",
      estimatedROI: "10-14%",
      riskLevel: "Low to Medium",
      features: [
        "Diversified real estate exposure",
        "High liquidity and tradability",
        "Professional management",
        "Regular income distributions"
      ],
      bgColor: "bg-indigo-50"
    },
    {
      icon: <Rocket className="w-5 h-5" />,
      title: "Venture Investment",
      description: "High-growth potential in emerging real estate ventures",
      estimatedROI: "18-25%",
      riskLevel: "Medium to High",
      features: [
        "Access to innovative projects",
        "Higher return potential",
        "Early-stage opportunities",
        "Portfolio diversification"
      ],
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <div className="min-h-[50vh] bg-white">
      {/* Investment Options Section */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-1">
              Flexible Investment Options For You
            </h2>
            <p className="text-xs text-gray-600 max-w-2xl mx-auto">
              Choose the investment path that aligns with your financial goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {investmentTypes.map((type, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <div className={`${type.bgColor} p-3 flex justify-center`}>
                  <div className="text-blue-900">
                    {type.icon}
                  </div>
                </div>
                
                <div className="p-3">
                  <h3 className="text-base font-bold text-gray-900 mb-1">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 mb-3 text-xs">
                    {type.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2 mb-3 p-2 bg-gray-50 rounded">
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase mb-1">ROI</p>
                      <p className="text-sm font-bold text-blue-900">
                        {type.estimatedROI}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase mb-1">Risk</p>
                      <p className="text-sm font-bold text-blue-900">
                        {type.riskLevel}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-1">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg 
                          className="w-3 h-3 text-blue-900 mr-1 mt-0.5 flex-shrink-0" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path 
                            fillRule="evenodd" 
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                            clipRule="evenodd" 
                          />
                        </svg>
                        <span className="text-gray-700 text-xs">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}