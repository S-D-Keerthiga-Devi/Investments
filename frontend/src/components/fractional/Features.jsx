import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { 
  Building2, 
  DollarSign, 
  Coins, 
  TrendingUp, 
  Scale, 
  ArrowUpRight 
} from "lucide-react";

export default function FractionalFeatures() {
  const fractionalFeatures = [
    {
      title: "Direct Ownership",
      description: "Own a fraction of high-value properties",
      icon: <Building2 className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Low Entry Barrier",
      description: "Start with just ₹25,000",
      icon: <DollarSign className="w-8 h-8 text-green-600" />
    },
    {
      title: "Rental Income",
      description: "Receive monthly rental income",
      icon: <Coins className="w-8 h-8 text-yellow-600" />
    },
    {
      title: "Appreciation",
      description: "Benefit from property value growth",
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />
    },
    {
      title: "Transparent Pricing",
      description: "No hidden fees",
      icon: <Scale className="w-8 h-8 text-indigo-600" />
    },
    {
      title: "Easy Exit",
      description: "Sell anytime on marketplace",
      icon: <ArrowUpRight className="w-8 h-8 text-red-600" />
    }
  ];

  return (
    <div className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">
            Fractional Investment
          </h2>
          <p className="text-gray-600 text-sm">
            Invest in premium properties with affordable ownership
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {fractionalFeatures.map((feature, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border border-gray-200 bg-white hover:shadow-md transition-all"
            >
              <CardContent className="p-3 flex flex-col items-center text-center">
                <div className="mb-2">{feature.icon}</div>
                <h4 className="text-sm font-semibold text-gray-900 mb-1">{feature.title}</h4>
                <p className="text-gray-600 text-xs">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
