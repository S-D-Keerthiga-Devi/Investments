"use client";
import React from "react";
import { Star, StarHalf, Quote } from "lucide-react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

// Real estate investment testimonial data
export const testimonialData = [
  {
    name: "Michael Thompson",
    role: "Real Estate Investor",
    rating: 5,
    feedback:
      "FractionVest has completely transformed my investment strategy. I've diversified my portfolio across three premium properties with minimal capital. The transparency and returns are exceptional.",
    avatar: "MT",
  },
  {
    name: "Jennifer Rodriguez",
    role: "Property Developer",
    rating: 5,
    feedback:
      "As a property developer, I've found FractionVest invaluable for connecting with qualified investors. The platform streamlined my funding process and helped me close deals 40% faster.",
    avatar: "JR",
  },
  {
    name: "David Chen",
    role: "Real Estate Agent",
    rating: 4.5,
    feedback:
      "I recommend FractionVest to all my clients looking to invest. The fractional ownership model opens up opportunities that were previously only available to high-net-worth individuals.",
    avatar: "DC",
  },
  {
    name: "Sarah Williams",
    role: "First-time Investor",
    rating: 5,
    feedback:
      "I was hesitant about real estate investing, but FractionVest made it accessible and straightforward. I started with just $5,000 and now own shares in two commercial properties.",
    avatar: "SW",
  },
  {
    name: "Robert Johnson",
    role: "Retirement Planner",
    rating: 4.5,
    feedback:
      "The consistent returns from FractionVest properties have become a cornerstone of my clients' retirement portfolios. The 14% average annual ROI is unmatched in today's market.",
    avatar: "RJ",
  },
  {
    name: "Amanda Patel",
    role: "Commercial Property Owner",
    rating: 5,
    feedback:
      "Listing my property on FractionVest was the best decision. I attracted premium investors and maintained full control while freeing up capital for new ventures.",
    avatar: "AP",
  },
];

// Rating display component
const StarRating = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <Star key={`full-${i}`} className="w-4 h-4 text-amber-400 fill-amber-400" />
    );
  }

  if (hasHalfStar) {
    stars.push(
      <StarHalf key="half" className="w-4 h-4 text-amber-400 fill-amber-400" />
    );
  }

  while (stars.length < 5) {
    stars.push(
      <Star key={`off-${stars.length}`} className="w-4 h-4 text-gray-300" />
    );
  }

  return <div className="flex gap-0.5">{stars}</div>;
};

export default function Comments() {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-blue-200/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full">
            <Quote className="w-6 h-6 text-blue-600" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1e3a8a] tracking-tight">
            Investor Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Join thousands of investors who have built wealth through our fractional real estate investment platform
          </p>
        </div>

        {/* Stats Section */}
        <div className="flex flex-wrap justify-center gap-8 mt-8 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#1e3a8a]">14.2%</div>
            <div className="text-sm text-gray-600">Average Annual ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#1e3a8a]">$150M+</div>
            <div className="text-sm text-gray-600">Assets Under Management</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#1e3a8a]">5000+</div>
            <div className="text-sm text-gray-600">Active Investors</div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="flex flex-col items-center justify-center mt-10">
          <InfiniteMovingCards
            items={testimonialData.map((testimonial) => ({
              quote: (
                <div className="space-y-4">
                  <Quote className="w-8 h-8 text-blue-500/20" />
                  <p className="text-base leading-relaxed text-gray-700">
                    {testimonial.feedback}
                  </p>
                  <div className="flex items-center gap-2 pt-2">
                    <StarRating rating={testimonial.rating} />
                    <span className="text-sm font-medium text-gray-600">
                      {testimonial.rating.toFixed(1)}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950 flex items-center justify-center text-white font-semibold text-sm shadow-lg">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600">
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