import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiFacebook, FiInstagram, FiTwitter, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand text-bg mt-16">
      {/* Newsletter Section */}
      <div className="bg-brand/90 border-b border-brand">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-serif font-bold mb-3">
              Stay Updated
            </h3>
            <p className="text-bg/80 mb-6">
              Subscribe to receive exclusive deals and new arrivals
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full text-brand bg-white focus:outline-none focus:ring-2 focus:ring-brand"
              />
              <button
                type="submit"
                className="bg-white text-brand px-8 py-3 rounded-full font-semibold hover:bg-bg transition-colors border border-white"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white text-xl font-serif font-bold mb-4">
              Nīṭi Śāṭikā
            </h3>
            <p className="text-sm mb-4 text-bg/80">
              Celebrating Kerala's rich handloom heritage. Authentic Kasavu, Silk, and Handloom sarees handcrafted by skilled artisans.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-bg transition-colors">
                <FiFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-bg transition-colors">
                <FiInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-bg transition-colors">
                <FiTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-bg transition-colors">Home</Link></li>
              <li><Link to="/products" className="hover:text-bg transition-colors">All Sarees</Link></li>
              <li><Link to="/products?category=kasavu" className="hover:text-bg transition-colors">Kasavu Collection</Link></li>
              <li><Link to="/products?category=silk" className="hover:text-bg transition-colors">Silk Sarees</Link></li>
              <li><Link to="/about" className="hover:text-bg transition-colors">Our Story</Link></li>
              <li><Link to="/contact" className="hover:text-bg transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-white font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-bg transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-bg transition-colors">Returns & Exchange</a></li>
              <li><a href="#" className="hover:text-bg transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-bg transition-colors">Care Instructions</a></li>
              <li><a href="#" className="hover:text-bg transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-bg transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <FiMapPin className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-bg" />
                <span>MG Road, Kochi, Kerala, India - 682001</span>
              </li>
              <li className="flex items-center">
                <FiPhone className="w-5 h-5 mr-2 text-bg" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <FiMail className="w-5 h-5 mr-2 text-bg" />
                <span>hello@nitisatika.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-brand/20 bg-brand">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-bg/80">&copy; {currentYear} Nīṭi Śāṭikā. All rights reserved. Handcrafted in Kerala 🌴</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-bg transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-bg transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-bg transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;