import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiShoppingCart, FiHeart, FiStar } from 'react-icons/fi';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product, index = 0 }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <Link to={`/product/${product.id}`} className="group block">
        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-brand/10">
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
              <div className="absolute top-3 left-3 bg-brand text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                {discount}% OFF
              </div>
            )}

            {/* Badge */}
            {product.badge && (
              <div className="absolute top-3 right-3 bg-brand text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                {product.badge}
              </div>
            )}

            {/* Hover Actions */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="bg-white text-brand px-6 py-3 rounded-full font-semibold hover:bg-brand hover:text-white transition-colors duration-200 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center space-x-2 border border-brand"
              >
                <FiShoppingCart className="w-5 h-5" />
                <span>{product.inStock ? 'Quick Add' : 'Out of Stock'}</span>
              </button>
            </div>

            {/* Wishlist Button */}
            <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-brand hover:text-white z-10 border border-brand">
              <FiHeart className="w-5 h-5" />
            </button>
          </div>

          {/* Product Info */}
          <div className="p-4">
            {/* Category */}
            <div className="text-xs text-brand font-semibold mb-1 uppercase tracking-wide">
              {product.category}
            </div>

            {/* Product Name */}
            <h3 className="text-brand font-semibold mb-2 line-clamp-2 group-hover:text-muted transition-colors min-h-[3rem]">
              {product.name}
            </h3>

            {/* Fabric */}
            <p className="text-xs text-muted mb-2">{product.fabric}</p>

            {/* Rating */}
            <div className="flex items-center mb-3">
              <div className="flex items-center text-brand">
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`}
                  />
                ))}
                <span className="text-sm text-muted ml-1">{product.rating}</span>
              </div>
              <span className="text-xs text-muted ml-2">({product.reviews})</span>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-2 mb-3">
              <span className="text-2xl font-bold text-brand">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-sm text-muted line-through">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>

            {/* Add to Cart Button - Mobile */}
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="w-full bg-brand text-white py-2 rounded-lg font-semibold hover:bg-muted transition-colors duration-200 flex items-center justify-center space-x-2 lg:hidden disabled:bg-gray-300 disabled:cursor-not-allowed border border-brand"
            >
              <FiShoppingCart className="w-5 h-5" />
              <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;