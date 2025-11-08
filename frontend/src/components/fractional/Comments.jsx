"use client";
import React from "react";
import { Star } from "lucide-react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export const testimonialData = [
  {
    name: "Rahul Mehta",
    role: "IT Professional, Bengaluru",
    rating: 5,
    feedback:
      "I never thought I could own part of a Grade-A office space. With FractionVest, I invested ₹50K and started earning monthly rent within weeks.",
    avatar: "RM",
  },
  {
    name: "Priya Sharma",
    role: "NRI Investor, Dubai",
    rating: 5,
    feedback:
      "FractionVest made property investing in India seamless. Transparent dashboards and regular payouts make it truly passive income.",
    avatar: "PS",
  },
  {
    name: "Arjun Patel",
    role: "Corporate Executive, Mumbai",
    rating: 4.5,
    feedback:
      "The fractional model helped me diversify across 3 commercial assets with ease. Excellent platform design and communication.",
    avatar: "AP",
  },
  {
    name: "Neha Verma",
    role: "First-Time Investor, Pune",
    rating: 5,
    feedback:
      "FractionVest gave me access to premium properties I could never afford alone. The process was smooth and fully digital.",
    avatar: "NV",
  },
  {
    name: "Rohan Singh",
    role: "Wealth Advisor, Delhi",
    rating: 4.5,
    feedback:
      "Many of my clients are switching to fractional investments. It’s a safe and scalable way to generate stable returns.",
    avatar: "RS",
  },
  {
    name: "Meera Iyer",
    role: "Property Owner, Hyderabad",
    rating: 5,
    feedback:
      "Listing my commercial property on FractionVest helped me raise funds faster and connect with credible investors.",
    avatar: "MI",
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
    <section className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">
            Fractional Investment Success Stories
          </h2>
          <p className="text-gray-600 mt-1">
            Hear how investors are building wealth through fractional ownership
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="flex justify-center">
          <InfiniteMovingCards
            items={testimonialData.map((testimonial) => ({
              quote: (
                <div className="space-y-2">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {testimonial.feedback}
                  </p>

                  {/* Star Rating */}
                  <div className="flex items-center gap-1">
                    {renderStars(testimonial.rating)}
                    <span className="text-xs text-gray-600">
                      {testimonial.rating.toFixed(1)}
                    </span>
                  </div>

                  {/* User Info */}
                  <div className="flex items-center gap-2 pt-1">
                    <div className="w-8 h-8 rounded-full bg-[#1e3a8a] flex items-center justify-center text-white text-xs font-medium">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-gray-600">
                        {testimonial.role}
                      </div>
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
