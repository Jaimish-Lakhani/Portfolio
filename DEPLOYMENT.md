# Vercel Deployment Guide

This project is optimized for deployment on Vercel. Follow these steps to deploy:

## Automatic Deployment (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for Vercel deployment"
   git push origin master
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "New Project"
   - Import your repository
   - Vercel will automatically detect the settings

3. **Deployment Settings** (Auto-detected)
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

## Manual Deployment via CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

## Environment Variables

If you need environment variables:

1. In Vercel dashboard, go to your project
2. Navigate to "Settings" → "Environment Variables"
3. Add your variables (see `.env.example` for reference)

## Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Navigate to "Settings" → "Domains"
3. Add your custom domain

## Build Optimization

The project includes several optimizations:
- Code splitting for better performance
- Minification and tree shaking
- Chunk optimization for caching
- Removed console logs in production

## Troubleshooting

**Build fails?**
- Check Node.js version (should be 16+ or 18+)
- Ensure all dependencies are in `package.json`
- Check for TypeScript errors

**404 on refresh?**
- The `vercel.json` file handles SPA routing
- All routes redirect to `index.html`

**Slow loading?**
- Check bundle size with `npm run build`
- Consider lazy loading for large components

## Final Notes

✅ **Production Build Tested**: The application builds successfully and runs in production mode
✅ **Interactive ID Card**: Physics-based draggable ID card with realistic interactions
✅ **SEO Optimized**: Enhanced meta tags for better search visibility
✅ **Performance Optimized**: Code splitting, minification, and caching strategies

**Build Stats:**
- Total Bundle Size: ~1.5MB (compressed to ~275KB gzip)
- Build Time: ~37 seconds
- Chunks: Optimally split for caching

Your portfolio is ready for deployment on Vercel!
