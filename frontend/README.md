# SareeElegance - E-Commerce Platform

A modern, production-ready e-commerce platform built with React, Vite, Tailwind CSS, and Redux Toolkit for selling traditional Indian sarees.

## 🚀 Features

### Customer Features
- **Home Page**: Hero banner, featured products, categories, and best sellers
- **Product Listing**: Advanced filtering by category, price range, and sorting options
- **Product Details**: Image gallery, detailed descriptions, add to cart functionality
- **Shopping Cart**: Full cart management with quantity updates, price calculations
- **Search**: Real-time product search functionality
- **Mobile Responsive**: Fully optimized for mobile, tablet, and desktop devices

### Technical Features
- **React 19** with modern hooks and patterns
- **Redux Toolkit** for state management (cart functionality)
- **React Router** for navigation
- **Tailwind CSS v4** for styling
- **Lazy Loading** for optimal performance
- **LocalStorage** for cart persistence
- **Vite** for fast development and optimized builds
- **Production-ready** code structure

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ProductCard.jsx
│   │   ├── CategoryFilter.jsx
│   │   ├── PriceFilter.jsx
│   │   └── LoadingSpinner.jsx
│   ├── pages/              # Page components
│   │   ├── Home.jsx
│   │   ├── ProductListing.jsx
│   │   ├── ProductDetails.jsx
│   │   └── Cart.jsx
│   ├── store/              # Redux store
│   │   ├── store.js
│   │   └── cartSlice.js
│   ├── data/               # Mock data
│   │   └── products.js
│   ├── utils/              # Utility functions
│   │   └── helpers.js
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # App entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
├── .env.example            # Environment variables template
├── .gitignore             # Git ignore rules
├── index.html             # HTML template
├── package.json           # Dependencies
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
└── README.md              # This file
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm
- Git

### Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Saree-platform/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables** (optional)
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

   The app will be available at `http://localhost:5173`

## 📦 Build & Deployment

### Production Build
```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Preview Production Build
```bash
npm run preview
# or
yarn preview
# or
pnpm preview
```

### Deployment Options
- **Vercel**: Connect your GitHub repo and deploy
- **Netlify**: Drag and drop the `dist` folder
- **AWS S3**: Upload `dist` folder to S3 bucket
- **Any static hosting**: Upload contents of `dist` folder

## 🎨 Customization

### Changing Colors
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      brand: { ... },  // Your brand colors
      primary: { ... } // Primary theme colors
    }
  }
}
```

### Adding Products
Edit `src/data/products.js` and add your product data.

### Modifying Layout
- **Navbar**: Edit `src/components/Navbar.jsx`
- **Footer**: Edit `src/components/Footer.jsx`
- **Home Page**: Edit `src/pages/Home.jsx`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The platform is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🛒 Cart Features

- Add/remove items
- Update quantities
- Price calculations
- Discount calculations
- Shipping cost calculations
- LocalStorage persistence
- Cart count badge

## 🎯 Future Enhancements

- [ ] User authentication
- [ ] Backend API integration
- [ ] Payment gateway integration
- [ ] Wishlist functionality
- [ ] Product reviews and ratings
- [ ] Order history
- [ ] Email notifications
- [ ] Admin dashboard
- [ ] Multi-language support
- [ ] Product recommendations

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Developer

Built with ❤️ for the love of traditional Indian sarees.

## 📞 Support

For support, email support@sareeelegance.com or create an issue in the repository.

---

**Note**: This is a frontend-only implementation. Backend integration is required for production use.
