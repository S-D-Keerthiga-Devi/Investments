import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Landmark,
  BarChart3,
  PieChart,
  Shield,
  DollarSign,
  TrendingUp,
  Users,
  FileText,
  Globe,
  Banknote,
  Layers,
  ArrowUpRight,
} from "lucide-react";

export default function Features() {
  // REIT Features
  const reitFeatures = [
    {
      title: "Diversified Portfolio",
      description: "Invest in multiple commercial assets across locations.",
      icon: <PieChart className="w-8 h-8 text-green-600" />,
    },
    {
      title: "Regular Income",
      description: "Earn consistent dividends from rental yields.",
      icon: <DollarSign className="w-8 h-8 text-amber-600" />,
    },
    {
      title: "High Liquidity",
      description: "Buy or sell units easily through stock exchanges.",
      icon: <ArrowUpRight className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Professional Management",
      description: "Managed by experienced fund managers and trustees.",
      icon: <Users className="w-8 h-8 text-purple-600" />,
    },
    {
      title: "Regulated & Transparent",
      description: "Fully compliant under SEBI guidelines with public disclosures.",
      icon: <Shield className="w-8 h-8 text-indigo-600" />,
    },
    {
      title: "Steady Capital Growth",
      description: "Benefit from long-term appreciation of real estate assets.",
      icon: <TrendingUp className="w-8 h-8 text-teal-600" />,
    },
  ];

  return (
    <div className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">
            Why Invest in REITs
          </h2>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto">
            REITs offer a simple, transparent, and liquid way to invest in real estate portfolios managed by professionals.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {reitFeatures.map((feature, index) => (
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
