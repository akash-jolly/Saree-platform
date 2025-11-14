# 🚀 Quick Start Guide - SareeElegance Platform

## ⚡ Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
cd frontend
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Visit: **http://localhost:5173**

---

## 📱 Test the Platform

### Browse Features
1. **Home Page** - See hero banner, categories, featured products
2. **Products Page** - Click "All Sarees" or "Shop Now"
3. **Search** - Try searching for "silk" or "banarasi"
4. **Filters** - Use category and price filters
5. **Product Details** - Click any product card
6. **Add to Cart** - Click "Add to Cart" button
7. **View Cart** - Click cart icon in navbar
8. **Manage Cart** - Update quantities, remove items

### Mobile Testing
- Resize browser to mobile width
- Test mobile menu (hamburger icon)
- Test mobile filters
- Check responsive layout

---

## 🛠️ Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 📂 Key Files to Customize

### Change Products
**File**: `src/data/products.js`
- Edit existing products
- Add new products
- Modify categories

### Change Colors/Branding
**File**: `tailwind.config.js`
- Update `brand` colors
- Update `primary` colors
- Add custom colors

### Change Layout
- **Navbar**: `src/components/Navbar.jsx`
- **Footer**: `src/components/Footer.jsx`
- **Home**: `src/pages/Home.jsx`

---

## 🎨 Color Scheme

```javascript
Primary: #0ea5e9 (Blue)
Brand: #ef4444 (Red)
```

---

## 🔧 Troubleshooting

### Port Already in Use
If port 5173 is busy, Vite will automatically try 5174, 5175, etc.

### Clear Cache
```bash
rm -r -fo node_modules/.vite
npm run dev
```

### Reinstall Dependencies
```bash
rm -r -fo node_modules
npm install
npm run dev
```

---

## 📦 Build for Production

```bash
npm run build
```

Output folder: `dist/`

Deploy the `dist` folder to:
- Vercel
- Netlify  
- AWS S3
- Any static hosting

---

## 🎯 Features Checklist

- ✅ Home page with hero & products
- ✅ Product listing with filters
- ✅ Product details page
- ✅ Shopping cart
- ✅ Search functionality
- ✅ Mobile responsive
- ✅ State management (Redux)
- ✅ Routing (React Router)
- ✅ LocalStorage cart persistence
- ✅ Production optimized

---

## 📞 Need Help?

Check these files:
- `README.md` - Full documentation
- `PROJECT_SUMMARY.md` - Complete feature list
- `.env.example` - Environment variables

---

**Happy Coding! 🎉**
