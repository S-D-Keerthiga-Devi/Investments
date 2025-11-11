"use client";
import React from "react";
import { Star } from "lucide-react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export const testimonialData = [
  {
    name: "Ritika Desai",
    role: "Retail Investor",
    rating: 5,
    feedback:
      "Investing in SM REITs through BrickShare gave me access to high-quality retail spaces with minimal capital. The returns are steady and transparent.",
    avatar: "RD",
  },
  {
    name: "Manish Gupta",
    role: "Small Business Owner",
    rating: 4.5,
    feedback:
      "BrickShare’s SM REIT options let me diversify my savings into real estate without worrying about property management.",
    avatar: "MG",
  },
  {
    name: "Sanjana Rao",
    role: "Financial Analyst",
    rating: 5,
    feedback:
      "The SM REIT dashboard is intuitive and makes tracking returns effortless. Perfect for first-time and seasoned investors alike.",
    avatar: "SR",
  },
  {
    name: "Rohit Malhotra",
    role: "Investor",
    rating: 5,
    feedback:
      "I love how SM REITs combine flexibility and professional-grade real estate access. BrickShare made the whole process simple and digital.",
    avatar: "RM",
  },
  {
    name: "Priya Verma",
    role: "Wealth Consultant",
    rating: 4.5,
    feedback:
      "My clients appreciate the liquidity and predictable income from SM REIT investments. BrickShare’s platform ensures full transparency.",
    avatar: "PV",
  },
  {
    name: "Aditya Nair",
    role: "Corporate Professional",
    rating: 5,
    feedback:
      "SM REITs through BrickShare helped me diversify into commercial real estate seamlessly. Great experience overall!",
    avatar: "AN",
  },
];

const renderStars = (rating) => {
  return Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      className={`w-3 h-3 ${
        i < Math.floor(rating) ? "text-amber-400 fill-amber-400" : "text-gray-300"
      }`}
    />
  ));
};

export default function CommentsSMREIT() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">
            SM REIT Investor Stories
          </h2>
          <p className="text-gray-600 mt-1">
            Hear how investors are building diversified portfolios with SM REITs on BrickShare
          </p>
        </div>

        <div className="flex justify-center">
          <InfiniteMovingCards
            items={testimonialData.map((testimonial) => ({
              quote: (
                <div className="space-y-2">
                  <p className="text-sm text-gray-700">{testimonial.feedback}</p>
                  <div className="flex items-center gap-1">
                    {renderStars(testimonial.rating)}
                    <span className="text-xs text-gray-600">
                      {testimonial.rating.toFixed(1)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 pt-1">
                    <div className="w-8 h-8 rounded-full bg-[#1e3a8a] flex items-center justify-center text-white text-xs">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ),
            }))}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
}
