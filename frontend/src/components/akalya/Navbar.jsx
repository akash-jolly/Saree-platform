import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiShoppingCart, FiSearch, FiMenu, FiX, FiHeart, FiUser } from 'react-icons/fi';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { cartItemsCount } = useCart();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'All Sarees', path: '/products' },
    { name: 'Kasavu', path: '/products?category=kasavu' },
    { name: 'Silk', path: '/products?category=silk' },
    { name: 'Wedding', path: '/products?category=wedding-sarees' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-bg sticky top-0 z-50 shadow-md border-b border-brand/10">
      <div className="container mx-auto px-4">
        {/* Christmas Offer Banner */}
        <div className="bg-gradient-to-r from-deepRed to-forestGreen text-ivory text-center py-2 -mx-4 px-4">
          <p className="text-sm md:text-base font-medium">
            🎄 Festive Offer: Up to 40% OFF on All Kerala Sarees | Free Shipping Above ₹10,000 🎁
          </p>
        </div>

        {/* Main Navbar */}
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              {/* Logo image */}
              <img 
                src="/src/assets/logo.png" 
                alt="Nīṭi śāṭikā" 
                className="h-10 w-auto"
              />
              <span className="text-2xl md:text-3xl font-serif font-bold text-brand ml-2">
                Nīṭi śāṭikā
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-muted hover:text-brand font-medium transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="w-full">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Kerala sarees..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-muted/30 rounded-full focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent bg-white"
                />
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted w-5 h-5" />
              </div>
            </form>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4 md:space-x-6">
            {/* Mobile Search Icon */}
            <button className="md:hidden text-muted hover:text-brand">
              <FiSearch className="w-6 h-6" />
            </button>

            {/* Wishlist */}
            <button className="hidden sm:block text-muted hover:text-brand relative">
              <FiHeart className="w-6 h-6" />
            </button>

            {/* User Account */}
            <button className="hidden sm:block text-muted hover:text-brand">
              <FiUser className="w-6 h-6" />
            </button>

            {/* Cart */}
            <Link to="/cart" className="text-muted hover:text-brand relative group">
              <FiShoppingCart className="w-6 h-6" />
              {cartItemsCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-brand text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
                >
                  {cartItemsCount}
                </motion.span>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-muted hover:text-brand"
            >
              {isMobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden py-4 border-t border-brand/10"
          >
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Kerala sarees..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-muted/30 rounded-full focus:outline-none focus:ring-2 focus:ring-brand bg-white"
                />
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted w-5 h-5" />
              </div>
            </form>

            {/* Mobile Navigation Links */}
            <div className="space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-muted hover:text-brand hover:bg-brand/5 font-medium py-2 px-3 rounded-lg transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
