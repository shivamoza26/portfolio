# 🚀 Portfolio Deployment Guide

## Deployment Issue Resolution

### Problem
```
Deploy did not succeed: Deploy directory 'portfolio/dist' does not exist
```

### Root Cause
The deployment service was looking for the build output in the wrong directory path due to incorrect base directory configuration.

### Solution ✅

The deployment configuration has been updated with the correct settings:

#### **Netlify Configuration** (`netlify.toml`)
```toml
[build]
  base = "portfolio"
  command = "npm ci && npm run build"
  publish = "dist"
```

**Key Changes:**
- ✅ **Added `base = "portfolio"`** - Sets the working directory
- ✅ **Updated `command`** - Removed `cd portfolio &&` since base is set
- ✅ **Updated `publish`** - Changed from `portfolio/dist` to `dist` (relative to base)

#### **Vercel Configuration** (`vercel.json`)
```json
{
  "name": "shivam-oza-portfolio",
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ]
}
```

## 📁 Correct Directory Structure

```
Portfolio/
├── README.md                    # Root documentation
├── netlify.toml                # Netlify config (root level)
└── portfolio/                  # Base directory
    ├── package.json            # Dependencies
    ├── vite.config.ts          # Build config
    ├── netlify.toml            # Netlify config (project level)
    ├── vercel.json             # Vercel config
    ├── src/                    # Source code
    ├── public/                 # Static assets
    └── dist/                   # Build output (generated)
        ├── index.html          # Main HTML file
        ├── assets/             # JS/CSS bundles
        └── ...                 # Other static files
```

## 🔧 Build Verification

### Local Build Test
```bash
cd portfolio
npm install
npm run build
```

### Expected Output
```
dist/index.html                   5.30 kB │ gzip:  1.56 kB
dist/assets/index-CwAFxldc.css   40.56 kB │ gzip:  6.61 kB
dist/assets/index-B9NbWBaF.js    94.16 kB │ gzip: 23.27 kB
dist/assets/vendor-D3F3s8fL.js  141.72 kB │ gzip: 45.48 kB
```

### Verify Dist Contents
```bash
# Check if dist directory exists
ls portfolio/dist/

# Should contain:
# - index.html
# - assets/ (CSS and JS files)
# - favicon.ico
# - resume.pdf
# - manifest.json
```

## 🌐 Platform-Specific Settings

### **Netlify Deployment**
1. **Repository**: Connect to `https://github.com/shivamoza26/portfolio`
2. **Base Directory**: `portfolio`
3. **Build Command**: `npm ci && npm run build`
4. **Publish Directory**: `dist`
5. **Node Version**: `20` (set in netlify.toml)

### **Vercel Deployment**
1. **Framework Preset**: Vite
2. **Root Directory**: `portfolio`
3. **Build Command**: `npm run build`
4. **Output Directory**: `dist`
5. **Install Command**: `npm install`

### **GitHub Pages** (Alternative)
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: cd portfolio && npm ci
      - run: cd portfolio && npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./portfolio/dist
```

## 🔍 Troubleshooting

### Issue: "Deploy directory does not exist"
- ✅ **Solution**: Use correct base directory in deployment settings
- ✅ **Check**: Ensure `dist` folder is generated after build
- ✅ **Verify**: Build command runs without errors

### Issue: "Build command failed"
- Check Node.js version (should be 18+)
- Verify all dependencies are installed
- Run `npm run build` locally first

### Issue: "404 errors on refresh"
- ✅ **Solution**: SPA redirect rules are configured in netlify.toml
- Redirects all routes to `/index.html` for React Router

## 📊 Performance Metrics

### Build Output Analysis
- **Total Size**: ~281 kB (gzipped: ~77 kB)
- **Vendor Chunk**: React + React-DOM (cached separately)
- **Main Bundle**: Application code with tree shaking
- **CSS**: Purged Tailwind with only used utilities

### Lighthouse Targets
- ✅ **Performance**: ≥90 (optimized images, minimal JS)
- ✅ **Accessibility**: ≥90 (ARIA, semantic HTML)
- ✅ **Best Practices**: ≥90 (HTTPS, modern formats)
- ✅ **SEO**: ≥90 (meta tags, structured data)

## 🚀 Quick Deploy Commands

### Deploy to Netlify
```bash
# If using Netlify CLI
cd portfolio
npm run build
npx netlify deploy --prod --dir=dist
```

### Deploy to Vercel
```bash
# If using Vercel CLI
cd portfolio
npm run build
npx vercel --prod
```

### Manual Upload
```bash
# Build and zip for manual upload
cd portfolio
npm run build
tar -czf portfolio-build.tar.gz dist/
```

## ✅ Deployment Checklist

- [x] Base directory set to `portfolio`
- [x] Build command: `npm ci && npm run build`
- [x] Publish directory: `dist`
- [x] Node version: 20
- [x] SPA redirects configured
- [x] Security headers enabled
- [x] Cache headers for assets
- [x] Build output verified locally
- [x] All source files committed to git
- [x] Repository connected to deployment service

## 🔗 Live URLs

Once deployed successfully:
- **Netlify**: `https://your-site-name.netlify.app`
- **Vercel**: `https://your-site-name.vercel.app`
- **GitHub Pages**: `https://shivamoza26.github.io/portfolio`

---

**Last Updated**: August 30, 2025  
**Status**: ✅ Ready for deployment
