"use client";
import React from "react";
import { Star } from "lucide-react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export const testimonialData = [
  {
    name: "Rajesh Mehta",
    role: "Retail Investor",
    rating: 5,
    feedback:
      "BrickShare made REIT investing simple and transparent. I now earn steady rental income from top-grade commercial properties.",
    avatar: "RM",
  },
  {
    name: "Ananya Sharma",
    role: "Wealth Advisor",
    rating: 5,
    feedback:
      "I recommend BrickShare REITs to my clients seeking diversification and predictable returns. The dashboard insights are excellent.",
    avatar: "AS",
  },
  {
    name: "Vikram Singh",
    role: "Institutional Investor",
    rating: 4.5,
    feedback:
      "Their curated REIT portfolios are professionally managed and deliver consistent performance across market cycles.",
    avatar: "VS",
  },
  {
    name: "Neha Patel",
    role: "First-time Investor",
    rating: 5,
    feedback:
      "Investing in REITs through BrickShare helped me enter real estate with small capital and zero management hassle.",
    avatar: "NP",
  },
  {
    name: "Amit Khanna",
    role: "Financial Planner",
    rating: 4.5,
    feedback:
      "My clients appreciate the liquidity and stable yield from BrickShare’s listed and fractional REIT offerings.",
    avatar: "AK",
  },
  {
    name: "Kiran Rao",
    role: "Corporate Executive",
    rating: 5,
    feedback:
      "The process was smooth and completely digital. I’ve built a strong REIT portfolio with minimal effort.",
    avatar: "KR",
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

export default function Comments() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">Investor Experiences</h2>
          <p className="text-gray-600 mt-1">
            Hear from investors growing wealth through REITs on BrickShare
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
