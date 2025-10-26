import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, Menu, X, ChevronRight, Star, Heart, Filter } from 'lucide-react';

const EcommerceLanding = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cartCount, setCartCount] = useState(0);
  const [wishlist, setWishlist] = useState(new Set());
  const [priceRange, setPriceRange] = useState('all');

  // Mock product data (in production, this would come from MongoDB via API)
  const products = [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      price: 299.99,
      category: 'electronics',
      rating: 4.8,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
      badge: 'Bestseller'
    },
    {
      id: 2,
      name: 'Smart Watch Series 5',
      price: 399.99,
      category: 'electronics',
      rating: 4.6,
      reviews: 189,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
      badge: 'New'
    },
    {
      id: 3,
      name: 'Designer Leather Backpack',
      price: 159.99,
      category: 'fashion',
      rating: 4.9,
      reviews: 412,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
      badge: ''
    },
    {
      id: 4,
      name: 'Minimalist Desk Lamp',
      price: 79.99,
      category: 'home',
      rating: 4.7,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&h=500&fit=crop',
      badge: 'Sale'
    },
    {
      id: 5,
      name: 'Athletic Running Shoes',
      price: 129.99,
      category: 'fashion',
      rating: 4.5,
      reviews: 298,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
      badge: ''
    },
    {
      id: 6,
      name: 'Portable Bluetooth Speaker',
      price: 89.99,
      category: 'electronics',
      rating: 4.6,
      reviews: 203,
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop',
      badge: 'Bestseller'
    },
    {
      id: 7,
      name: 'Ceramic Coffee Mug Set',
      price: 34.99,
      category: 'home',
      rating: 4.8,
      reviews: 567,
      image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&h=500&fit=crop',
      badge: ''
    },
    {
      id: 8,
      name: 'Yoga Mat Premium',
      price: 49.99,
      category: 'sports',
      rating: 4.7,
      reviews: 334,
      image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&h=500&fit=crop',
      badge: 'New'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'fashion', name: 'Fashion' },
    { id: 'home', name: 'Home & Living' },
    { id: 'sports', name: 'Sports' }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesPrice = priceRange === 'all' || 
      (priceRange === 'under50' && product.price < 50) ||
      (priceRange === '50to150' && product.price >= 50 && product.price < 150) ||
      (priceRange === 'over150' && product.price >= 150);
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const toggleWishlist = (productId) => {
    setWishlist(prev => {
      const newWishlist = new Set(prev);
      if (newWishlist.has(productId)) {
        newWishlist.delete(productId);
      } else {
        newWishlist.add(productId);
      }
      return newWishlist;
    });
  };

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                EliteShop
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition font-medium">Home</a>
              <a href="#products" className="text-gray-700 hover:text-blue-600 transition font-medium">Products</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition font-medium">Deals</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition font-medium">About</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition font-medium">Contact</a>
            </nav>

            {/* Cart & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <button className="relative p-2 hover:bg-gray-100 rounded-lg transition">
                <ShoppingCart className="w-6 h-6 text-gray-700" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <button 
                className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-gray-200 mt-4">
              <nav className="flex flex-col space-y-2 pt-4">
                <a href="#" className="text-gray-700 hover:text-blue-600 py-2 px-4 hover:bg-gray-50 rounded transition">Home</a>
                <a href="#products" className="text-gray-700 hover:text-blue-600 py-2 px-4 hover:bg-gray-50 rounded transition">Products</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 py-2 px-4 hover:bg-gray-50 rounded transition">Deals</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 py-2 px-4 hover:bg-gray-50 rounded transition">About</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 py-2 px-4 hover:bg-gray-50 rounded transition">Contact</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Discover Premium Products at Unbeatable Prices
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Shop the latest trends with exclusive deals. Quality guaranteed, satisfaction assured.
              </p>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition transform hover:scale-105 shadow-lg flex items-center space-x-2">
                <span>Shop Now</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <div className="hidden md:block">
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white bg-opacity-20 rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold">10K+</div>
                    <div className="text-sm text-blue-100">Products</div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold">50K+</div>
                    <div className="text-sm text-blue-100">Customers</div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold">4.9</div>
                    <div className="text-sm text-blue-100">Rating</div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold">24/7</div>
                    <div className="text-sm text-blue-100">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20" id="products">
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <div className="grid md:grid-cols-3 gap-4">
            {/* Search Bar */}
            <div className="md:col-span-2 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            {/* Price Filter */}
            <select 
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Prices</option>
              <option value="under50">Under $50</option>
              <option value="50to150">$50 - $150</option>
              <option value="over150">Over $150</option>
            </select>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex flex-wrap gap-3">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition transform hover:scale-105 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            {selectedCategory === 'all' ? 'All Products' : categories.find(c => c.id === selectedCategory)?.name}
          </h2>
          <span className="text-gray-600">{filteredProducts.length} products found</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2 group">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                {product.badge && (
                  <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${
                    product.badge === 'Bestseller' ? 'bg-yellow-400 text-yellow-900' :
                    product.badge === 'New' ? 'bg-green-400 text-green-900' :
                    'bg-red-400 text-red-900'
                  }`}>
                    {product.badge}
                  </span>
                )}
                <button 
                  onClick={() => toggleWishlist(product.id)}
                  className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition"
                >
                  <Heart 
                    className={`w-5 h-5 ${wishlist.has(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
                  />
                </button>
              </div>
              
              <div className="p-5">
                <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">
                    {product.rating} ({product.reviews})
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">
                    ${product.price}
                  </span>
                  <button 
                    onClick={addToCart}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition transform hover:scale-105"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-xl">No products found matching your criteria.</p>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">EliteShop</h3>
              <p className="text-gray-400">Your premier destination for quality products and exceptional service.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Customer Service</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Shipping Info</a></li>
                <li><a href="#" className="hover:text-white transition">Returns</a></li>
                <li><a href="#" className="hover:text-white transition">Track Order</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Subscribe for exclusive deals</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-l-lg text-gray-900 focus:outline-none"
                />
                <button className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 EliteShop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EcommerceLanding;