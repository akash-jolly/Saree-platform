# 🎄 Akalya Sarees - Kerala Christmas E-Commerce Platform

**Grace of Kerala, Woven in Gold — Celebrate This Christmas in Style**

A complete, responsive e-commerce frontend for selling authentic Kerala sarees with a festive Christmas theme. Built with React + Vite + Tailwind CSS + Framer Motion.

---

## ✨ Features Implemented

### 🎨 Design & Theme
- **Kerala + Christmas Fusion**: Ivory-gold Kerala tones with festive red and green accents
- **Color Palette**:
  - Ivory White (#FFFFF0)
  - Gold (#D4AF37)
  - Deep Red (#8B0000)
  - Forest Green (#1B4332)
- **Custom Fonts**:
  - Headings: Playfair Display / Noto Serif
  - Body: Poppins / Inter
- **Festive Elements**: Christmas snow effects, Kerala patterns, gold shimmer

### 📄 Pages

#### 1. **Home Page** ✅
- Hero section with Kerala saree model & tagline
- Christmas offer banner (40% OFF)
- Category grid (Kasavu, Silk, Cotton, Wedding, Handloom)
- Featured products section with festive background
- "Why Choose Us" section highlighting heritage & quality
- Testimonials slider (Kerala brides, buyers, dancers)
- Newsletter signup with Christmas theme
- Footer with Kerala + Christmas motifs

#### 2. **Products Page** ✅
- Grid layout for all sarees
- **Filters**: Category, Fabric, Price Range
- **Sorting**: Featured, Newest, Popular, Price (Low/High)
- Responsive filter sidebar
- Search functionality
- Shows 10 Kerala sarees from JSON data

#### 3. **Product Details Page** (Placeholder Created)
- Will include: Image gallery with zoom
- Saree details, price, material, care instructions
- "Add to Cart" button
- Related products carousel
- "Handcrafted in Kerala" badge
- Christmas offer label

#### 4. **Cart Page** (Placeholder Created)
- Product list with quantity controls
- Subtotal & total calculations
- Festive border design
- Checkout button

#### 5. **Checkout Page** (Placeholder Created)
- Shipping details form
- Payment method selection (UI only)
- Order summary with Christmas delivery info

#### 6. **About Page** (Placeholder Created)
- Story of Kerala handloom sarees
- Artisan highlight
- Christmas celebration message

#### 7. **Contact Page** (Placeholder Created)
- Contact form
- Kerala address
- Map placeholder with festive border

### 🛠️ Technical Features

#### **State Management**
- ✅ Context API for cart management
- ✅ LocalStorage persistence
- ✅ Add/Remove/Update cart items
- ✅ Automatic totals & discounts

#### **Performance**
- ✅ Lazy loading routes
- ✅ Code splitting
- ✅ Framer Motion animations
- ✅ Optimized images

#### **Components**
- ✅ **Navbar**: Responsive with cart counter, search, Christmas offer banner
- ✅ **Footer**: Kerala-themed with Christmas candle icons
- ✅ **ProductCard**: Festive design with offer badges, ratings
- ✅ Reusable and modular

### 📊 Product Data
- ✅ 10 Kerala sarees in JSON
- ✅ Fields: name, image (3 per product), price, fabric, category, offer, badge
- ✅ Categories: Kasavu, Silk, Cotton, Wedding Sarees, Handloom

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm/yarn/pnpm

### Installation

```bash
cd frontend
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Build for Production

```bash
npm run build
```

---

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   └── akalya/
│   │       ├── Navbar.jsx
│   │       ├── Footer.jsx
│   │       └── ProductCard.jsx
│   ├── pages/
│   │   └── akalya/
│   │       ├── Home.jsx
│   │       ├── Products.jsx
│   │       ├── ProductDetails.jsx (placeholder)
│   │       ├── Cart.jsx (placeholder)
│   │       ├── Checkout.jsx (placeholder)
│   │       ├── About.jsx (placeholder)
│   │       └── Contact.jsx (placeholder)
│   ├── context/
│   │   └── CartContext.jsx
│   ├── data/
│   │   └── akalyaProducts.json
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js (Kerala + Christmas theme)
├── postcss.config.js
├── vite.config.js
└── package.json
```

---

## 🎨 Customization

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  ivory: '#FFFFF0',
  gold: '#D4AF37',
  deepRed: '#8B0000',
  forestGreen: '#1B4332',
}
```

### Add Products
Edit `src/data/akalyaProducts.json`:
```json
{
  "sarees": [...],
  "categories": [...]
}
```

---

## 🔌 Backend Integration Points

All components are ready for backend API integration:

```javascript
// Example: Products page
// Replace this:
import productsData from '../../data/akalyaProducts.json';

// With API call:
const { data } = await axios.get('/api/products');
```

### API Endpoints to Implement:
- `GET /api/products` - Fetch all sarees
- `GET /api/products/:id` - Get single product
- `GET /api/categories` - Get categories
- `POST /api/cart` - Add to cart
- `POST /api/checkout` - Process order
- `POST /api/contact` - Contact form submission

---

## ✅ Completed Features

- ✅ Tailwind CSS v4 with Kerala + Christmas color palette
- ✅ Framer Motion animations (fade-in, slide-up, float)
- ✅ Context API cart state management
- ✅ LocalStorage cart persistence
- ✅ Home page with all sections
- ✅ Products page with filters & sorting
- ✅ Responsive navbar with Christmas banner
- ✅ Kerala-themed footer
- ✅ Product cards with festive design
- ✅ 10 Kerala sarees JSON data
- ✅ Mobile-responsive design
- ✅ React Router navigation

## 🚧 To Be Completed

- ⏳ Product Details page (full implementation)
- ⏳ Cart page (full implementation)
- ⏳ Checkout page (full implementation)
- ⏳ About page (full implementation)
- ⏳ Contact page (full implementation)
- ⏳ Backend API integration
- ⏳ Payment gateway
- ⏳ User authentication

---

## 🎯 Key Highlights

1. **Authentic Kerala Theme**: Traditional ivory-gold aesthetics
2. **Christmas Special**: Festive red-green accents, snow effects
3. **Mobile-First**: Fully responsive across all devices
4. **Performance**: Lazy loading, code splitting, optimized animations
5. **Production-Ready**: Clean code, modular structure
6. **Cart Functionality**: Full cart management with persistence
7. **Festive UX**: Christmas offers, delivery info, testimonials

---

## 📝 Notes

- Logo: "Akalya Sarees" in gold with ⭐ star icon
- All images use Unsplash placeholders
- Cart data persists in localStorage
- Placeholder pages ready for full implementation
- Backend integration comments included

---

## 🎁 Christmas Features

- 🎄 Festive offer banners (40% OFF)
- 🎁 Christmas delivery timeline
- ⭐ Kerala + Christmas color fusion
- 🔔 Temple bell & candle motifs
- ❄️ Subtle snow effects
- 🌟 Gold gradient text effects

---

## 📞 Support

For questions or contributions:
- Email: hello@akalyasarees.com
- Website: [akalyasarees.com](#)

---

**Built with ❤️ celebrating Kerala's handloom heritage and Christmas joy**

**Status**: ✅ Core Pages Complete | 🚧 Detail Pages In Progress
