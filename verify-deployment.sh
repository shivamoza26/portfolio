#!/bin/bash

# Deployment Test Script
# Run this to verify the portfolio is ready for deployment

echo "🚀 Portfolio Deployment Verification"
echo "===================================="

# Check if build exists
if [ -d "dist" ]; then
    echo "✅ Production build exists"
else
    echo "❌ No production build found. Run 'npm run build' first."
    exit 1
fi

# Check critical files
echo ""
echo "📁 Checking critical files..."

files=("dist/index.html" "dist/resume.pdf" "public/assets/README.md" "vercel.json" "netlify.toml")

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file"
    else
        echo "❌ $file missing"
    fi
done

# Check bundle size
echo ""
echo "📊 Bundle Analysis:"
if [ -f "dist/assets/vendor-*.js" ]; then
    vendor_size=$(ls -lah dist/assets/vendor-*.js | awk '{print $5}')
    echo "✅ Vendor bundle: $vendor_size"
fi

if [ -f "dist/assets/index-*.js" ]; then
    app_size=$(ls -lah dist/assets/index-*.js | awk '{print $5}')
    echo "✅ App bundle: $app_size"
fi

if [ -f "dist/assets/index-*.css" ]; then
    css_size=$(ls -lah dist/assets/index-*.css | awk '{print $5}')
    echo "✅ CSS bundle: $css_size"
fi

echo ""
echo "🔗 Hash Navigation URLs to Test:"
echo "  - Homepage: http://localhost:4173/"
echo "  - About: http://localhost:4173/#about"
echo "  - Skills: http://localhost:4173/#skills"
echo "  - Projects: http://localhost:4173/#projects"
echo "  - Contact: http://localhost:4173/#contact"

echo ""
echo "🚀 Ready to deploy!"
echo "  - Vercel: npm run deploy:vercel"
echo "  - Netlify: npm run deploy:netlify"
echo "  - Test locally: npm run preview"

echo ""
echo "⚠️  Remember to:"
echo "  1. Replace placeholder resume.pdf"
echo "  2. Add real profile and project images"
echo "  3. Update social media links"
echo "  4. Test all functionality before going live"
