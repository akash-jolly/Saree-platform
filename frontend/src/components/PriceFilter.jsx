import React from 'react';
import { priceRanges } from '../data/products';

const PriceFilter = ({ selectedPriceRange, onPriceRangeChange }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <h3 className="font-semibold text-gray-800 mb-3">Price Range</h3>
      <div className="space-y-2">
        {priceRanges.map((range, index) => (
          <label
            key={index}
            className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors"
          >
            <input
              type="radio"
              name="priceRange"
              checked={selectedPriceRange?.label === range.label}
              onChange={() => onPriceRangeChange(range)}
              className="w-4 h-4 text-primary-600 focus:ring-primary-500"
            />
            <span className="ml-3 text-gray-700">{range.label}</span>
          </label>
        ))}
      </div>
      {selectedPriceRange && (
        <button
          onClick={() => onPriceRangeChange(null)}
          className="mt-3 text-sm text-primary-600 hover:text-primary-700 font-medium"
        >
          Clear filter
        </button>
      )}
    </div>
  );
};

export default PriceFilter;
