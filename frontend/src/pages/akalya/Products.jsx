import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiFilter, FiX } from 'react-icons/fi';
import ProductCard from '../../components/akalya/ProductCard';
import productsData from '../../data/akalyaProducts.json';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(productsData.sarees);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedFabric, setSelectedFabric] = useState('all');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 50000 });
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');

  const fabrics = ['all', 'Pure Silk', 'Pure Cotton', 'Handloom Cotton', 'Handloom Silk', 'Cotton-Silk Blend'];
  const priceRanges = [
    { label: 'All Prices', min: 0, max: 50000 },
    { label: 'Under ₹5,000', min: 0, max: 5000 },
    { label: '₹5,000 - ₹10,000', min: 5000, max: 10000 },
    { label: '₹10,000 - ₹20,000', min: 10000, max: 20000 },
    { label: 'Above ₹20,000', min: 20000, max: 50000 },
  ];

  useEffect(() => {
    let result = [...productsData.sarees];

    if (searchQuery) {
      result = result.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());
    }

    if (selectedFabric !== 'all') {
      result = result.filter(p => p.fabric === selectedFabric);
    }

    result = result.filter(p => p.price >= priceRange.min && p.price <= priceRange.max);

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => b.id - a.id);
        break;
      case 'popular':
        result.sort((a, b) => b.rating - a.rating);
        break;
    }

    setFilteredProducts(result);
  }, [selectedCategory, selectedFabric, priceRange, sortBy, searchQuery]);

  return (
    <div className="min-h-screen bg-bg py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-brand mb-2">
            {searchQuery ? `Search: "${searchQuery}"` : selectedCategory !== 'all' ? selectedCategory : 'All Kerala Sarees'}
          </h1>
          <p className="text-muted">{filteredProducts.length} products found</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-xl shadow-md sticky top-24">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-serif font-bold text-brand text-lg">Filters</h3>
                <button onClick={() => {
                  setSelectedCategory('all');
                  setSelectedFabric('all');
                  setPriceRange({ min: 0, max: 50000 });
                }} className="text-sm text-brand hover:text-muted">Clear All</button>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-semibold text-brand mb-3">Category</h4>
                <div className="space-y-2">
                  <label className="flex items-center cursor-pointer">
                    <input type="radio" checked={selectedCategory === 'all'} onChange={() => setSelectedCategory('all')} className="text-brand" />
                    <span className="ml-2 text-sm">All Categories</span>
                  </label>
                  {productsData.categories.map(cat => (
                    <label key={cat.id} className="flex items-center cursor-pointer">
                      <input type="radio" checked={selectedCategory === cat.slug} onChange={() => setSelectedCategory(cat.slug)} className="text-brand" />
                      <span className="ml-2 text-sm">{cat.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Fabric Filter */}
              <div className="mb-6">
                <h4 className="font-semibold text-brand mb-3">Fabric</h4>
                <select value={selectedFabric} onChange={(e) => setSelectedFabric(e.target.value)} className="w-full p-2 border border-brand/30 rounded-lg">
                  {fabrics.map(f => <option key={f} value={f}>{f === 'all' ? 'All Fabrics' : f}</option>)}
                </select>
              </div>

              {/* Price Filter */}
              <div className="mb-6">
                <h4 className="font-semibold text-brand mb-3">Price Range</h4>
                <div className="space-y-2">
                  {priceRanges.map((range, i) => (
                    <label key={i} className="flex items-center cursor-pointer">
                      <input type="radio" checked={priceRange.min === range.min && priceRange.max === range.max} onChange={() => setPriceRange({ min: range.min, max: range.max })} className="text-brand" />
                      <span className="ml-2 text-sm">{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-muted">{filteredProducts.length} products</p>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="px-4 py-2 border border-brand/30 rounded-lg">
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;