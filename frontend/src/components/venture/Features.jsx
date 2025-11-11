import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Rocket,
  LineChart,
  ShieldCheck,
  DollarSign,
  Lightbulb,
  Users,
  Building2,
  BarChart3,
  TrendingUp,
  Briefcase,
} from "lucide-react";

export default function VentureInvestmentFeatures() {
  // Venture Investment Features
  const ventureFeatures = [
    {
      title: "High Growth Potential",
      description: "Invest in early-stage and fast-scaling real estate ventures with strong upside potential.",
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
    },
    {
      title: "Early Access Advantage",
      description: "Get early investment entry into projects before they reach mainstream markets.",
      icon: <Rocket className="w-8 h-8 text-pink-600" />,
    },
    {
      title: "Diversified Opportunities",
      description: "Spread your investments across multiple startups, sectors, and geographies.",
      icon: <LineChart className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Strategic Partnerships",
      description: "Co-invest with reputed venture firms, angel investors, and real estate innovators.",
      icon: <Users className="w-8 h-8 text-purple-600" />,
    },
    {
      title: "Potential for Higher ROI",
      description: "Target long-term returns of 18–25% through value appreciation and exits.",
      icon: <DollarSign className="w-8 h-8 text-amber-600" />,
    },
    {
      title: "Risk-Managed Framework",
      description: "Invest in ventures vetted by domain experts with strong governance and compliance.",
      icon: <ShieldCheck className="w-8 h-8 text-indigo-600" />,
    },
  ];

  return (
    <div className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">
            Why Invest in Venture Real Estate
          </h2>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto">
            Venture investments combine the growth of startups with the stability of real estate. 
            Participate in innovative projects reshaping the property landscape — from proptech to green infrastructure.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {ventureFeatures.map((feature, index) => (
            <Card
              key={index}
              className="overflow-hidden border border-gray-200 bg-white hover:shadow-md transition-all"
            >
              <CardContent className="p-3 flex flex-col items-center text-center">
                <div className="mb-2">{feature.icon}</div>
                <h4 className="text-sm font-semibold text-gray-900 mb-1">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-xs">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
