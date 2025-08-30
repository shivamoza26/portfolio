# Deployment Guide

## 🚀 Quick Deploy Commands

### Vercel Deployment
```bash
npm run deploy:vercel
```

### Netlify Deployment
```bash
npm run deploy:netlify
```

### Test Production Build Locally
```bash
npm run test:build
```

## 📁 Required Assets Checklist

Before deploying, ensure these assets are in place:

### ✅ Resume
- [ ] `/public/resume.pdf` - Your actual resume (currently placeholder)

### ✅ Profile Image
- [ ] `/public/assets/profile.webp` - Optimized profile image (400x400px)
- [ ] `/public/assets/profile.jpg` - Fallback profile image (400x400px)

### ✅ Project Images
- [ ] `/public/assets/project-1.webp` and `.jpg` - Data analysis project (400x225px)
- [ ] `/public/assets/project-2.webp` and `.jpg` - Web project (400x225px)
- [ ] `/public/assets/project-3.webp` and `.jpg` - Dashboard project (400x225px)
- [ ] `/public/assets/project-4.webp` and `.jpg` - Analytics project (400x225px)

### ✅ Social Media
- [ ] `/public/assets/og-image.jpg` - Open Graph image (1200x630px)
- [ ] `/public/favicon.ico` - Website favicon (32x32px)

## 🔧 Platform-Specific Setup

### Vercel
1. **Connect Repository**
   ```bash
   npx vercel
   ```
2. **Configure Settings**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Environment Variables** (if needed)
   - `NODE_VERSION`: `18`

### Netlify
1. **Connect Repository**
   ```bash
   npx netlify init
   ```
2. **Configuration** (already in `netlify.toml`)
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `18`

### GitHub Pages
1. **Add to Repository**
   ```bash
   npm install --save-dev gh-pages
   ```
2. **Add Deploy Script**
   ```json
   "deploy:github": "npm run build && npx gh-pages -d dist"
   ```
3. **Enable GitHub Pages** in repository settings

## 🌐 Custom Domain Setup

### Vercel
1. Add domain in Vercel dashboard
2. Update DNS records:
   ```
   CNAME: your-domain.com → cname.vercel-dns.com
   ```

### Netlify
1. Add domain in Netlify dashboard
2. Update DNS records:
   ```
   CNAME: your-domain.com → your-site.netlify.app
   ```

## ⚡ Performance Verification

After deployment, verify:

1. **Lighthouse Score** ≥90 for all metrics
2. **Hash Navigation** works (e.g., `/#about`, `/#projects`)
3. **Images Load** properly with WebP support
4. **Resume Download** works from buttons
5. **Theme Toggle** persists across sessions
6. **Mobile Responsive** design

## 🔍 Testing Commands

```bash
# Build and test locally
npm run build
npm run preview

# Check for build errors
npm run lint

# Test specific routes
npm run preview
# Then visit: http://localhost:4173/#about
```

## 📋 Pre-Deployment Checklist

- [ ] Replace placeholder resume with actual PDF
- [ ] Add real profile image (optimized WebP + JPEG)
- [ ] Add actual project screenshots (16:9 aspect ratio)
- [ ] Update project URLs and GitHub links
- [ ] Verify all social media links
- [ ] Test contact form (currently simulated)
- [ ] Check all internal hash navigation
- [ ] Verify responsive design on mobile
- [ ] Test dark/light theme toggle
- [ ] Run Lighthouse audit
- [ ] Optimize images for web (compress)

## 🚨 Common Issues & Solutions

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Routing Issues
- Ensure hash navigation works: `/#section-name`
- Check `scroll-behavior: smooth` in CSS
- Verify anchor IDs match navigation links

### Image Loading Issues
- Check file paths are correct (`/assets/image.webp`)
- Ensure WebP fallbacks exist
- Verify image dimensions match CSS

### Performance Issues
- Check bundle size: `npm run build -- --analyze`
- Optimize images with tools like Squoosh.app
- Verify lazy loading is working

## 📈 Post-Deployment

1. **Submit to Search Engines**
   - Google Search Console
   - Bing Webmaster Tools

2. **Monitor Performance**
   - Google PageSpeed Insights
   - GTmetrix
   - Lighthouse CI

3. **Analytics** (optional)
   - Google Analytics
   - Plausible Analytics

## 🔗 Quick Links

- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [GitHub Pages Guide](https://pages.github.com)
- [Lighthouse Testing](https://pagespeed.web.dev)

---

**Ready to deploy?** Run `npm run test:build` first to verify everything works locally!
