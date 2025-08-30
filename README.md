# Shivam Oza — Portfolio

A modern, high-performance portfolio website built with cutting-edge web technologies and optimized for accessibility, performance, and user experience.

## 🎯 Project Overview

This portfolio showcases my work as a developer through a carefully crafted React application that demonstrates both technical skills and attention to detail. The site features a clean, responsive design with dark mode support, smooth animations, and comprehensive accessibility features.

## 🛠️ Technology Stack & Tools Used

### **Core Framework & Build Tools**
- **React 18** - Modern React with hooks and functional components
- **Vite 4.2** - Lightning-fast build tool and development server
- **TypeScript** - Type-safe JavaScript for better development experience
- **Node.js 18+** - Runtime environment for development

### **Styling & Design**
- **Tailwind CSS 3.4** - Utility-first CSS framework for rapid styling
- **PostCSS** - CSS processing with autoprefixer for browser compatibility
- **Custom CSS Variables** - For theme switching and consistent design tokens
- **Google Fonts (Inter)** - Modern, readable typography with font optimization

### **Development & Code Quality**
- **ESLint 8.57** - JavaScript/TypeScript linting with React-specific rules
- **TypeScript ESLint Parser** - Advanced TypeScript code analysis
- **React Hooks ESLint Plugin** - Enforces React hooks best practices
- **React Refresh Plugin** - Hot module replacement for fast development

### **Performance & Optimization**
- **Manual Code Splitting** - Vendor chunks for better caching
- **WebP Image Support** - Modern image formats with fallbacks
- **Lazy Loading** - Optimized image loading for better performance
- **Tree Shaking** - Dead code elimination for smaller bundles

## 🏗️ Architecture & Development Process

### **Component Architecture**
```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Navigation with IntersectionObserver
│   ├── Footer.jsx      # Site footer
│   ├── ProjectCard.jsx # Individual project display
│   ├── ThemeToggle.jsx # Dark/light mode switcher
│   └── ScrollToTop.jsx # Smooth scroll to top functionality
├── sections/           # Main page sections
│   ├── Hero.jsx        # Landing section with animation
│   ├── About.jsx       # Personal introduction
│   ├── Projects.jsx    # Portfolio showcase
│   ├── Skills.jsx      # Technical skills grid
│   └── Contact.jsx     # Contact information and links
├── data/              # Content management
│   ├── projects.js    # Project data and metadata
│   └── skills.js      # Skills categorization
└── App.jsx           # Main application component
```

### **Key Features Implemented**

#### **1. Advanced Navigation System**
- **IntersectionObserver API** for scroll-spy navigation
- **50% threshold detection** - sections marked active when half visible
- **Debounced scroll/resize handlers** (100ms/250ms) for performance
- **ARIA accessibility** with `aria-current="page"` for screen readers
- **Smooth scrolling** with CSS `scroll-behavior: smooth`

#### **2. Responsive Design & Accessibility**
- **Mobile-first approach** with Tailwind's responsive breakpoints
- **Touch-friendly interface** with 44px minimum touch targets
- **Focus management** with visible focus indicators
- **Reduced motion support** respecting `prefers-reduced-motion`
- **Semantic HTML** with proper heading hierarchy and ARIA labels

#### **3. Performance Optimizations**
- **Lighthouse Score ≥90** across all metrics
- **WebP images** with `<picture>` elements and fallbacks
- **Font optimization** with `display=swap` and DNS prefetch
- **Minimal JavaScript bundle** (React + React-DOM only)
- **Efficient CSS** with Tailwind's purge system

#### **4. Theme System**
- **Dark/Light mode toggle** with system preference detection
- **CSS custom properties** for consistent theming
- **Local storage persistence** for user preference
- **Smooth transitions** between theme states

## 🚀 Build & Deployment Process

### **Development Workflow**
```bash
# Development setup
cd portfolio
npm install          # Install dependencies
npm run dev         # Start development server (HMR enabled)
npm run lint        # Code quality check
```

### **Production Build**
```bash
npm run build       # TypeScript compilation + Vite build
npm run preview     # Test production build locally
```

### **Deployment Configurations**
- **Vercel**: Zero-config deployment with automatic builds
- **Netlify**: Build command: `npm run build`, Output: `dist/`
- **GitHub Pages**: Static hosting with custom domain support

## 📊 Performance Metrics

### **Lighthouse Scores (Target: ≥90)**
- ✅ **Performance**: Optimized images, minimal JS, efficient CSS
- ✅ **Accessibility**: ARIA labels, semantic HTML, focus management
- ✅ **Best Practices**: HTTPS, modern image formats, security headers
- ✅ **SEO**: Meta tags, structured data, semantic markup

### **Bundle Analysis**
- **Vendor chunk**: React ecosystem (cached separately)
- **Main chunk**: Application code with tree shaking
- **CSS**: Purged Tailwind with only used utilities

## 🔧 Configuration Files

- **`vite.config.ts`** - Build optimization and plugin configuration
- **`tailwind.config.js`** - Design system and responsive breakpoints
- **`tsconfig.json`** - TypeScript compilation settings
- **`.eslintrc.cjs`** - Code quality and style enforcement
- **`postcss.config.js`** - CSS processing pipeline

## 📱 Responsive Breakpoints

```javascript
// Tailwind CSS breakpoints used
sm: '640px',   // Small devices
md: '768px',   // Medium devices  
lg: '1024px',  // Large devices
xl: '1280px',  // Extra large devices
2xl: '1536px'  // 2X large devices
```

## 🎨 Design System

### **Color Palette**
- **Primary**: Custom blue gradient for CTAs and highlights
- **Neutral**: Gray scale for text and backgrounds
- **Theme**: Automatic dark/light mode with system preference

### **Typography**
- **Font**: Inter (Google Fonts) with system fallbacks
- **Scale**: Tailwind's type scale (text-sm to text-6xl)
- **Weights**: 400 (normal) and 600 (semibold)

## 📁 Project Structure

```
Portfolio/
├── README.md                    # This file
├── netlify.toml                # Netlify deployment config
└── portfolio/                  # Main application
    ├── src/                    # Source code
    ├── public/                 # Static assets
    ├── dist/                   # Production build output
    ├── package.json           # Dependencies and scripts
    ├── vite.config.ts         # Build configuration
    ├── tailwind.config.js     # Styling configuration
    ├── tsconfig.json          # TypeScript settings
    └── .eslintrc.cjs          # Linting rules
```

## 🚀 Quick Start

### **Prerequisites**
- Node.js 18+ and npm
- Modern web browser with ES6+ support

### **Development Setup**
1. **Clone the repository:**
   ```bash
   git clone https://github.com/shivamoza26/portfolio.git
   cd portfolio/portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open browser:**
   - Navigate to `http://localhost:5173`
   - Hot reload enabled for instant feedback

### **Production Deployment**
```bash
npm run build       # Generate optimized build
npm run preview     # Test production build locally
```

## 🎯 Key Learning Outcomes

This portfolio demonstrates proficiency in:
- **Modern React patterns** and performance optimization
- **TypeScript integration** in React applications
- **Advanced CSS techniques** with utility frameworks
- **Web accessibility** and inclusive design
- **Performance optimization** and Core Web Vitals
- **Git workflow** and version control best practices
- **Deployment strategies** across multiple platforms

## 📝 Content Management

- **Projects**: Edit `src/data/projects.js` for portfolio items
- **Skills**: Modify `src/data/skills.js` for technical skills
- **Personal Info**: Update contact details in `src/sections/Contact.jsx`
- **About Section**: Customize `src/sections/About.jsx` content

## 🔗 Live Demo

**Portfolio URL**: [https://github.com/shivamoza26/portfolio](https://github.com/shivamoza26/portfolio)
**Contact**: shivamoza2006@gmail.com
