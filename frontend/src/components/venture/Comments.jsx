// Comments.jsx
"use client";
import React from "react";
import { Star } from "lucide-react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export const testimonialData = [
  {
    name: "Michael Thompson",
    role: "Real Estate Investor",
    rating: 5,
    feedback: "FractionVest transformed my investment strategy. I've diversified across three premium properties with minimal capital.",
    avatar: "MT",
  },
  {
    name: "Jennifer Rodriguez",
    role: "Property Developer",
    rating: 5,
    feedback: "FractionVest streamlined my funding process and helped me close deals 40% faster.",
    avatar: "JR",
  },
  {
    name: "David Chen",
    role: "Real Estate Agent",
    rating: 4.5,
    feedback: "I recommend FractionVest to all clients. It opens opportunities previously only available to high-net-worth individuals.",
    avatar: "DC",
  },
  {
    name: "Sarah Williams",
    role: "First-time Investor",
    rating: 5,
    feedback: "I started with just $5,000 and now own shares in two commercial properties.",
    avatar: "SW",
  },
  {
    name: "Robert Johnson",
    role: "Retirement Planner",
    rating: 4.5,
    feedback: "The consistent returns have become a cornerstone of my clients' retirement portfolios.",
    avatar: "RJ",
  },
  {
    name: "Amanda Patel",
    role: "Commercial Property Owner",
    rating: 5,
    feedback: "Listing my property on FractionVest was the best decision. I attracted premium investors.",
    avatar: "AP",
  },
];

const renderStars = (rating) => {
  return Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      className={`w-3 h-3 ${i < Math.floor(rating) ? "text-amber-400 fill-amber-400" : "text-gray-300"}`}
    />
  ));
};

export default function Comments() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-[#1e3a8a]">Investor Success Stories</h2>
          <p className="text-gray-600 mt-1">Join thousands of investors building wealth through our platform</p>
        </div>

        <div className="flex justify-center">
          <InfiniteMovingCards
            items={testimonialData.map((testimonial) => ({
              quote: (
                <div className="space-y-2">
                  <p className="text-sm text-gray-700">{testimonial.feedback}</p>
                  <div className="flex items-center gap-1">
                    {renderStars(testimonial.rating)}
                    <span className="text-xs text-gray-600">{testimonial.rating.toFixed(1)}</span>
                  </div>
                  <div className="flex items-center gap-2 pt-1">
                    <div className="w-8 h-8 rounded-full bg-[#1e3a8a] flex items-center justify-center text-white text-xs">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
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