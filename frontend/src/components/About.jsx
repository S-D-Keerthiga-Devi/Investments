import React from 'react';
import { Building2, TrendingUp, Rocket, Shield, Award, BarChart3, Users } from 'lucide-react';

export default function About() {
  const investmentTypes = [
    {
      icon: <Building2 className="w-6 h-6" />,
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
      icon: <TrendingUp className="w-6 h-6" />,
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
      icon: <Rocket className="w-6 h-6" />,
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
    <div className="min-h-[60vh] bg-white">
      {/* Hero Section */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-3">
            <span className="text-xs font-semibold text-blue-900 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
              About Us
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-900 bg-clip-text text-transparent leading-tight">
            About FractionVest
          </h1>
          <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Democratizing real estate investment for everyone. We provide flexible investment options 
            that align with your financial goals, from direct ownership to diversified funds.
          </p>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-16 bg-gradient-to-r from-blue-900 to-indigo-800 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Investment Options Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Flexible Investment Options For You
            </h2>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              Choose the investment path that aligns with your financial goals, from direct 
              ownership to diversified funds.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {investmentTypes.map((type, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              >
                <div className={`${type.bgColor} p-4 flex justify-center`}>
                  <div className="text-blue-900">
                    {type.icon}
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {type.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-4 p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                        Estimated ROI
                      </p>
                      <p className="text-base font-bold text-blue-900">
                        {type.estimatedROI}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                        Risk Level
                      </p>
                      <p className="text-base font-bold text-blue-900">
                        {type.riskLevel}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg 
                          className="w-4 h-4 text-blue-900 mr-2 mt-0.5 flex-shrink-0" 
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