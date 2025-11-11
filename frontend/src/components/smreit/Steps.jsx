import React from 'react';
import { Building2, FileText, PieChart, Wallet } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function StepsSMREIT() {
  const navigate = useNavigate();

  const steps = [
    {
      title: "Explore SM REITs",
      icon: <Building2 className="w-5 h-5" />,
      text: "Browse curated SM REIT opportunities across sectors",
    },
    {
      title: "Complete Verification",
      icon: <FileText className="w-5 h-5" />,
      text: "Finish quick KYC to start investing securely",
    },
    {
      title: "Invest Smartly",
      icon: <PieChart className="w-5 h-5" />,
      text: "Diversify with fractional ownership in high-growth assets",
    },
    {
      title: "Earn & Exit Easily",
      icon: <Wallet className="w-5 h-5" />,
      text: "Receive regular income and enjoy flexible liquidity options",
    },
  ];

  return (
    <div className="bg-white py-6 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-2 text-center">
          Investing in SM REITs Made Simple
        </h2>
        <p className="text-gray-600 text-sm text-center mb-6 max-w-2xl mx-auto">
          Start small, diversify your portfolio, and gain access to institutional-grade real estate through SM REITs.
        </p>

        <div className="relative">
          {/* Desktop Layout */}
          <div className="hidden md:flex items-start justify-center">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center" style={{ width: '180px' }}>
                  <div className="flex justify-center mb-2">
                    <div className="w-12 h-12 rounded-full bg-[#1e3a8a] flex items-center justify-center text-white">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1 text-sm text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-xs text-center">{step.text}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className="flex items-center" style={{ width: '120px', marginTop: '24px' }}>
                    <div className="flex-1 h-0.5 bg-[#1e3a8a]"></div>
                    <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[12px] border-l-[#1e3a8a]"></div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden">
            <div className="grid grid-cols-2 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="text-center">
                    <div className="flex justify-center mb-2">
                      <div className="w-10 h-10 rounded-full bg-[#1e3a8a] flex items-center justify-center text-white">
                        {step.icon}
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1 text-sm">{step.title}</h3>
                    <p className="text-gray-600 text-xs">{step.text}</p>
                  </div>

                  {/* Arrows for mobile */}
                  {index % 2 === 0 && index < steps.length - 1 && (
                    <div className="absolute top-5 left-full w-8 h-0.5 bg-[#1e3a8a] z-0">
                      <div className="absolute right-0 top-1/2 w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[8px] border-l-[#1e3a8a] transform -translate-y-1/2"></div>
                    </div>
                  )}
                  {index === 1 && (
                    <div className="absolute top-full left-1/2 w-0.5 h-8 bg-[#1e3a8a] transform -translate-x-1/2 z-0">
                      <div className="absolute bottom-0 left-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[8px] border-t-[#1e3a8a] transform -translate-x-1/2"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={() => navigate('#properties')}
            className="bg-[#1e3a8a] text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-[#1e40af] transition-colors"
          >
            Start Investing in SM REITs
          </button>
        </div>
      </div>
    </div>
  );
}
