import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FiShoppingCart, FiHeart, FiStar } from 'react-icons/fi';
import { addToCart } from '../store/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCart(product));
  };

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
        {/* Image Container */}
        <div className="relative overflow-hidden aspect-[3/4]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
          
          {/* Discount Badge */}
          {discount > 0 && (
            <div className="absolute top-3 left-3 bg-brand-500 text-white px-2 py-1 rounded-md text-sm font-bold">
              {discount}% OFF
            </div>
          )}

          {/* Stock Status */}
          {!product.inStock && (
            <div className="absolute top-3 right-3 bg-gray-800 text-white px-2 py-1 rounded-md text-sm font-semibold">
              Out of Stock
            </div>
          )}

          {/* Hover Actions */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="bg-white text-gray-800 px-6 py-2 rounded-full font-semibold hover:bg-primary-600 hover:text-white transition-colors duration-200 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              {product.inStock ? 'Quick Add' : 'Out of Stock'}
            </button>
          </div>

          {/* Wishlist Button */}
          <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-brand-500 hover:text-white">
            <FiHeart className="w-5 h-5" />
          </button>
        </div>

        {/* Product Info */}
        <div className="p-4">
          {/* Category */}
          <div className="text-xs text-primary-600 font-semibold mb-1 uppercase tracking-wide">
            {product.category}
          </div>

          {/* Product Name */}
          <h3 className="text-gray-800 font-semibold mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center mb-2">
            <div className="flex items-center text-yellow-400">
              <FiStar className="w-4 h-4 fill-current" />
              <span className="text-sm text-gray-700 ml-1">{product.rating}</span>
            </div>
            <span className="text-xs text-gray-500 ml-2">({product.reviews} reviews)</span>
          </div>

          {/* Price */}
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice > product.price && (
              <span className="text-sm text-gray-500 line-through">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>

          {/* Add to Cart Button - Mobile */}
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="mt-3 w-full bg-primary-600 text-white py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center space-x-2 lg:hidden disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            <FiShoppingCart className="w-5 h-5" />
            <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
