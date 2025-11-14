import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/akalya/Navbar';
import Footer from './components/akalya/Footer';
import './index.css';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/akalya/Home'));
const Products = lazy(() => import('./pages/akalya/Products'));
// Temp: Use placeholders for remaining pages - replace with actual components
const ProductDetails = () => <div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">Product Details - Coming Soon</h1></div>;
const Cart = () => <div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">Cart - Coming Soon</h1></div>;
const Checkout = () => <div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">Checkout - Coming Soon</h1></div>;
const About = () => <div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">About - Coming Soon</h1></div>;
const Contact = () => <div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">Contact - Coming Soon</h1></div>;

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            <Suspense fallback={
              <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-brand"></div>
              </div>
            }>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

// 404 Not Found Component
const NotFound = () => (
  <div className="min-h-screen bg-bg flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-6xl font-serif font-bold text-brand mb-4">404</h1>
      <p className="text-xl text-muted mb-8">Page not found</p>
      <a href="/" className="bg-brand text-white px-6 py-3 rounded-full font-semibold hover:bg-muted transition-colors inline-block">
        Return Home
      </a>
    </div>
  </div>
);

export default App;