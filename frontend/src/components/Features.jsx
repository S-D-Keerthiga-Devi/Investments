import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  TrendingUp,
  Rocket,
  Shield,
  Award,
  BarChart3,
  Users,
  PieChart,
  FileText,
  Home,
  DollarSign,
  Percent,
  Clock,
  Search,
  Star,
  Target,
  Lightbulb,
  Briefcase,
  CheckCircle,
  ArrowUpRight,
  Building,
  Landmark,
  TrendingDown,
  HandCoins,
  Coins,
  Banknote,
  Receipt,
  Scale,
  FileCheck,
  Layers,
  Globe,
  Zap
} from "lucide-react";

export default function Features() {
  const [activeTab, setActiveTab] = useState("fractional");
  const [reitType, setReitType] = useState("reit");

  // Feature data for each investment type
  const investmentFeatures = {
    fractional: [
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
    ],
    reit: [
      {
        title: "Diversified Portfolio",
        description: "Multiple properties in one investment",
        icon: <PieChart className="w-8 h-8 text-blue-600" />
      },
      {
        title: "High Liquidity",
        description: "Trade like stocks",
        icon: <Zap className="w-8 h-8 text-green-600" />
      },
      {
        title: "Regular Dividends",
        description: "Consistent payouts",
        icon: <Banknote className="w-8 h-8 text-yellow-600" />
      },
      {
        title: "Professional Management",
        description: "Expert oversight",
        icon: <Briefcase className="w-8 h-8 text-purple-600" />
      },
      {
        title: "Tax Benefits",
        description: "Pass-through taxation",
        icon: <Receipt className="w-8 h-8 text-indigo-600" />
      },
      {
        title: "Regulated",
        description: "SEBI oversight",
        icon: <Shield className="w-8 h-8 text-red-600" />
      }
    ],
    smreit: [
      {
        title: "Small Ticket Size",
        description: "Start from ₹10,000",
        icon: <DollarSign className="w-8 h-8 text-blue-600" />
      },
      {
        title: "Asset Specific",
        description: "Single property focus",
        icon: <Building className="w-8 h-8 text-green-600" />
      },
      {
        title: "Distributions",
        description: "Periodic income",
        icon: <Banknote className="w-8 h-8 text-yellow-600" />
      },
      {
        title: "Professional Management",
        description: "Expert oversight",
        icon: <Briefcase className="w-8 h-8 text-purple-600" />
      },
      {
        title: "Tax Efficiency",
        description: "Pass-through structure",
        icon: <Receipt className="w-8 h-8 text-indigo-600" />
      },
      {
        title: "SEBI Regulated",
        description: "Investor protection",
        icon: <Shield className="w-8 h-8 text-red-600" />
      }
    ],
    venture: [
      {
        title: "High Growth",
        description: "Exponential potential",
        icon: <Rocket className="w-8 h-8 text-blue-600" />
      },
      {
        title: "Innovative Projects",
        description: "Smart cities, tech parks",
        icon: <Lightbulb className="w-8 h-8 text-green-600" />
      },
      {
        title: "Higher Returns",
        description: "Target 18-25%",
        icon: <TrendingUp className="w-8 h-8 text-yellow-600" />
      },
      {
        title: "Diversification",
        description: "Alternative assets",
        icon: <Layers className="w-8 h-8 text-purple-600" />
      },
      {
        title: "Expert Curation",
        description: "Vetted opportunities",
        icon: <Star className="w-8 h-8 text-indigo-600" />
      },
      {
        title: "Early Access",
        description: "Pre-launch deals",
        icon: <Search className="w-8 h-8 text-red-600" />
      }
    ]
  };

  // Investment type data
  const investmentTypes = [
    {
      id: "fractional",
      title: "Fractional Investment",
      description: "Direct property ownership",
      icon: <Building2 className="w-4 h-4" />
    },
    {
      id: "reit",
      title: "REIT",
      description: "Diversified portfolio",
      icon: <Landmark className="w-4 h-4" />
    },
    {
      id: "smreit",
      title: "SM REIT",
      description: "Small portfolio",
      icon: <Landmark className="w-4 h-4" />
    },
    {
      id: "venture",
      title: "Venture Investment",
      description: "High-growth projects",
      icon: <Rocket className="w-4 h-4" />
    }
  ];

  // Get the current features based on active tab and REIT type
  const getCurrentFeatures = () => {
    if (activeTab === "reit") {
      return investmentFeatures[reitType];
    }
    return investmentFeatures[activeTab];
  };

  return (
    <div className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">
            Investment Options
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            {investmentTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveTab(type.id)}
                className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === type.id
                    ? "bg-blue-900 text-white"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                <span className="mr-1">{type.icon}</span>
                {type.title}
              </button>
            ))}
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {getCurrentFeatures().map((feature, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border border-gray-200 bg-white hover:shadow-md transition-all"
            >
              <CardContent className="p-3 flex flex-col items-center text-center">
                <div className="mb-2">
                  {feature.icon}
                </div>
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