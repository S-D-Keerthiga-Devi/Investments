import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Landmark,
  PieChart,
  Shield,
  DollarSign,
  TrendingUp,
  Users,
  Banknote,
  Globe,
  Layers,
  ArrowUpRight,
  BarChart3,
} from "lucide-react";

export default function SMREITFeatures() {
  // SM REIT Features
  const smReitFeatures = [
    {
      title: "Affordable Entry Point",
      description: "Start investing in real estate with as little as ₹10,000.",
      icon: <Banknote className="w-8 h-8 text-green-600" />,
    },
    {
      title: "Diversified Portfolio",
      description: "Own units across multiple commercial real estate assets.",
      icon: <PieChart className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Regular Income Stream",
      description: "Earn periodic dividends from rental yields and profits.",
      icon: <DollarSign className="w-8 h-8 text-amber-600" />,
    },
    {
      title: "High Liquidity",
      description: "Buy or sell SM REIT units easily through digital platforms.",
      icon: <ArrowUpRight className="w-8 h-8 text-indigo-600" />,
    },
    {
      title: "Professional Management",
      description: "Managed by expert asset managers and trustees for stability.",
      icon: <Users className="w-8 h-8 text-purple-600" />,
    },
    {
      title: "Regulated & Transparent",
      description: "Fully governed by SEBI with regular disclosures and audits.",
      icon: <Shield className="w-8 h-8 text-teal-600" />,
    },
  ];

  return (
    <div className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">
            Why Invest in SM REITs
          </h2>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto">
            SM REITs make institutional-grade real estate accessible to individual investors through a secure, regulated, and transparent model.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {smReitFeatures.map((feature, index) => (
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
