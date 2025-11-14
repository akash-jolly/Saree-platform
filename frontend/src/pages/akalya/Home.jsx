import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiTruck, FiShield, FiAward, FiStar } from 'react-icons/fi';
import ProductCard from '../../components/akalya/ProductCard';
import productsData from '../../data/akalyaProducts.json';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { sarees, categories } = productsData;
  
  // Get featured products (first 8)
  const featuredProducts = sarees.slice(0, 8);

  // Testimonials
  const testimonials = [
    {
      id: 1,
      name: "Lakshmi Menon",
      role: "Kerala Bride",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      text: "The Kasavu saree I ordered for my wedding was absolutely stunning! The craftsmanship and quality exceeded my expectations. Thank you Akalya Sarees!",
      rating: 5
    },
    {
      id: 2,
      name: "Priya Nair",
      role: "Classical Dancer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "As a Bharatanatyam dancer, I need sarees that are both beautiful and comfortable. Akalya's collection is perfect for performances!",
      rating: 5
    },
    {
      id: 3,
      name: "Anjali Kumar",
      role: "Festive Shopper",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      text: "I bought 3 sarees for Christmas celebrations and everyone loved them! The Christmas offers made it even better. Highly recommended!",
      rating: 5
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-bg">
      {/* Hero Section */}
      <section className="relative bg-bg overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block bg-brand text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                New Collection
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand mb-6 leading-tight">
                Grace of Kerala, <br />Woven in Elegance
              </h1>
              
              <p className="text-xl text-muted mb-8 max-w-lg">
                Discover authentic Kerala sarees - Kasavu, Silk, Cotton, and Handloom varieties. 
                Handcrafted by skilled artisans with timeless elegance.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/products"
                  className="bg-brand text-white px-8 py-4 rounded-full font-semibold hover:bg-muted transition-all duration-200 text-center inline-flex items-center justify-center group"
                >
                  Shop Now
                  <FiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/products?category=wedding-sarees"
                  className="border-2 border-brand text-brand px-8 py-4 rounded-full font-semibold hover:bg-brand hover:text-white transition-all duration-200 text-center"
                >
                  Bridal Collection
                </Link>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&h=1000&fit=crop"
                  alt="Kerala Saree Model"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <p className="text-brand font-bold text-lg">Premium Quality</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white border-y border-brand/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-4 p-4 rounded-lg"
            >
              <div className="bg-brand/10 p-4 rounded-full">
                <FiTruck className="w-8 h-8 text-brand" />
              </div>
              <div>
                <h3 className="font-semibold text-brand">Free Shipping</h3>
                <p className="text-sm text-muted">On orders above ₹5,000</p>
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-4 p-4 rounded-lg"
            >
              <div className="bg-brand/10 p-4 rounded-full">
                <FiShield className="w-8 h-8 text-brand" />
              </div>
              <div>
                <h3 className="font-semibold text-brand">100% Authentic</h3>
                <p className="text-sm text-muted">Handcrafted in Kerala</p>
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-4 p-4 rounded-lg"
            >
              <div className="bg-brand/10 p-4 rounded-full">
                <FiAward className="w-8 h-8 text-brand" />
              </div>
              <div>
                <h3 className="font-semibold text-brand">Quality Assured</h3>
                <p className="text-sm text-muted">Premium Kerala silk & cotton</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand mb-4">
              Shop by Category
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Explore our curated collection of traditional Kerala sarees
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  to={`/products?category=${category.slug}`}
                  className="group block relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <div className="text-white">
                      <h3 className="font-serif font-semibold text-lg">{category.name}</h3>
                      <p className="text-xs text-brand-200">{category.count} Products</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block bg-brand/10 px-4 py-2 rounded-full text-brand font-semibold mb-4">
              Featured Collection
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand mb-4">
              Featured Kerala Sarees
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Handpicked sarees perfect for all occasions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/products"
              className="inline-flex items-center bg-brand text-white px-8 py-3 rounded-full font-semibold hover:bg-muted transition-colors shadow-lg group"
            >
              View All Products
              <FiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand mb-4">
              Why Choose Nīṭi Śāṭikā
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Heritage, Quality, and Kerala Roots
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-brand text-5xl mb-4">🌴</div>
              <h3 className="text-xl font-serif font-bold text-brand mb-3">Kerala Heritage</h3>
              <p className="text-muted">
                Every saree tells a story of Kerala's rich handloom tradition, passed down through generations of skilled artisans.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-brand text-5xl mb-4">✨</div>
              <h3 className="text-xl font-serif font-bold text-brand mb-3">Premium Quality</h3>
              <p className="text-muted">
                We source only the finest materials - pure silk, cotton, and gold zari - ensuring every saree is a masterpiece.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-brand text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-serif font-bold text-brand mb-3">Supporting Artisans</h3>
              <p className="text-muted">
                Every purchase directly supports Kerala's weaving communities, preserving traditional craftsmanship for future generations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand mb-4">
              What Our Customers Say
            </h2>
            <p className="text-muted">Kerala brides and classical dancers love us!</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-bg p-8 md:p-12 rounded-2xl shadow-lg"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-24 h-24 rounded-full border-4 border-brand shadow-lg"
                />
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start mb-3">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <FiStar key={i} className="w-5 h-5 text-brand fill-current" />
                    ))}
                  </div>
                  <p className="text-muted text-lg italic mb-4">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                  <div>
                    <p className="font-serif font-bold text-brand text-xl">
                      {testimonials[currentTestimonial].name}
                    </p>
                    <p className="text-muted text-sm">{testimonials[currentTestimonial].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Testimonial Dots */}
            <div className="flex justify-center mt-6 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial ? 'bg-brand w-8' : 'bg-brand/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-brand text-white">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Join Our Community
            </h2>
            <p className="text-bg/80 mb-8">
              Subscribe for exclusive offers, new arrivals, and Kerala saree styling tips
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-3 rounded-full text-brand focus:outline-none focus:ring-2 focus:ring-brand"
              />
              <button
                type="submit"
                className="bg-white text-brand px-8 py-3 rounded-full font-semibold hover:bg-bg transition-colors shadow-lg"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;