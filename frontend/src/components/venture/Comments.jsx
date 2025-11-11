"use client";
import React from "react";
import { Star } from "lucide-react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export const testimonialData = [
  {
    name: "Aarav Mehta",
    role: "Angel Investor",
    rating: 5,
    feedback:
      "VentureInvest opened doors to early-stage startups I could never access before. The platform’s due diligence gives me confidence in every investment.",
    avatar: "AM",
  },
  {
    name: "Nisha Patel",
    role: "Tech Entrepreneur",
    rating: 4.5,
    feedback:
      "As both a founder and investor, I love how VentureInvest bridges startups with micro-investors. Transparent, smooth, and professional!",
    avatar: "NP",
  },
  {
    name: "Rahul Khanna",
    role: "Corporate Professional",
    rating: 5,
    feedback:
      "Investing in startups through VentureInvest was easy and insightful. The portfolio dashboard keeps me updated on every milestone.",
    avatar: "RK",
  },
  {
    name: "Sneha Reddy",
    role: "Wealth Advisor",
    rating: 5,
    feedback:
      "I recommend VentureInvest to clients who want exposure to innovation-led startups without large commitments. A game-changer for retail investors.",
    avatar: "SR",
  },
  {
    name: "Karan Joshi",
    role: "Finance Consultant",
    rating: 4.5,
    feedback:
      "VentureInvest makes early-stage investing accessible and data-driven. The platform’s insights are extremely useful for decision-making.",
    avatar: "KJ",
  },
  {
    name: "Ishita Roy",
    role: "Retail Investor",
    rating: 5,
    feedback:
      "The experience was seamless — from discovery to investment tracking. I feel part of the startup ecosystem now!",
    avatar: "IR",
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

export default function CommentsVentureInvestment() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">
            Venture Investor Experiences
          </h2>
          <p className="text-gray-600 mt-1">
            Hear how investors are supporting innovation and earning equity through VentureInvest
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
