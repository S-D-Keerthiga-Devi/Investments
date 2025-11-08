import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

const Cards = () => {
  const properties = [
    {
      id: 1,
      name: "Pre-Leased IT Park Tower",
      location: "Whitefield, Bangalore",
      type: "Commercial",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500&h=300&fit=crop",
      roi: "9.2%",
      rating: 5,
      badge: "bg-blue-900",
      minInvestment: "₹25,000",
      tenure: "4 Years",
      ownership: "Fractional Ownership"
    },
    {
      id: 2,
      name: "Co-Working Hub",
      location: "Hitech City, Hyderabad",
      type: "Office Space",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=500&h=300&fit=crop",
      roi: "8.8%",
      rating: 4,
      badge: "bg-green-600",
      minInvestment: "₹50,000",
      tenure: "5 Years",
      ownership: "Fractional Ownership"
    },
    {
      id: 3,
      name: "Retail Space in Business Plaza",
      location: "BKC, Mumbai",
      type: "Retail",
      image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=500&h=300&fit=crop",
      roi: "10.4%",
      rating: 5,
      badge: "bg-orange-600",
      minInvestment: "₹1,00,000",
      tenure: "6 Years",
      ownership: "Fractional Ownership"
    },
    {
      id: 4,
      name: "Warehouse Facility",
      location: "Pimpri-Chinchwad, Pune",
      type: "Industrial",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=300&fit=crop",
      roi: "9.8%",
      rating: 4,
      badge: "bg-purple-600",
      minInvestment: "₹75,000",
      tenure: "5 Years",
      ownership: "Fractional Ownership"
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-8">
          <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 rounded-full px-3 py-1 mb-3">
            <span className="text-xs font-semibold text-blue-900">Fractional Properties</span>
          </div>
          <h2 className="text-3xl font-bold text-blue-900 mb-2">
            Invest in High-Value Properties — Fraction by Fraction
          </h2>
          <p className="text-sm text-gray-600">
            Diversify your portfolio with professionally managed fractional real estate assets.
          </p>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {properties.map((property) => (
            <div 
              key={property.id}
              className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Image Section */}
              <div className="relative h-32 overflow-hidden">
                <img 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  src={property.image} 
                  alt={property.name} 
                />
                
                {/* Type Badge */}
                <div className="absolute top-2 left-2">
                  <span className={`${property.badge} px-1.5 py-0.5 text-xs font-bold tracking-wide text-white uppercase rounded-full shadow`}>
                    {property.type}
                  </span>
                </div>

                {/* ROI Badge */}
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-1.5 py-0.5 rounded-full shadow">
                  <p className="text-xs font-bold text-blue-900">{property.roi} ROI</p>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-3">
                {/* Title */}
                <h3 className="text-sm font-bold text-gray-900 mb-1 group-hover:text-blue-900 transition-colors line-clamp-1">
                  {property.name}
                </h3>

                {/* Location */}
                <div className="flex items-center text-gray-500 mb-2">
                  <MapPin className="w-3 h-3 mr-1 flex-shrink-0" />
                  <span className="text-xs truncate">{property.location}</span>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, index) => (
                    <svg 
                      key={index}
                      className={`w-3 h-3 ${index < property.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-xs text-gray-600 ml-1">({property.rating}.0)</span>
                </div>

                {/* Investment Details */}
                <div className="grid grid-cols-2 gap-2 mb-3 p-2 bg-gray-50 rounded">
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Min Investment</p>
                    <p className="text-xs font-bold text-gray-900">{property.minInvestment}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Tenure</p>
                    <p className="text-xs font-bold text-gray-900">{property.tenure}</p>
                  </div>
                </div>

                {/* Ownership Type */}
                <div className="text-center text-[11px] text-blue-900 font-semibold mb-2">
                  {property.ownership}
                </div>

                {/* CTA Button */}
                <button className="w-full py-1.5 bg-blue-900 text-white text-xs font-semibold rounded hover:bg-blue-800 transition-colors duration-300 flex items-center justify-center group">
                  View Details
                  <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-6">
          <button className="inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-blue-900 bg-white border-2 border-blue-900 rounded-lg hover:bg-blue-50 transition-colors duration-300 shadow-sm hover:shadow-md">
            View All Fractional Properties
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cards;
