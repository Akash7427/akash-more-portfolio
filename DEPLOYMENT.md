# Deployment Guide - Three Platform Options

This guide provides step-by-step instructions for deploying your portfolio website on three popular platforms: Vercel, Netlify, and GitHub Pages.

## 🚀 Option 1: Vercel (Recommended)

Vercel offers the best performance and easiest setup for React applications.

### Prerequisites
- GitHub account with your repository
- Vercel account (free at vercel.com)

### Step-by-Step Instructions

1. **Push Your Code to GitHub** (if not done already)
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   git remote add origin https://github.com/your-username/portfolio-website.git
   git push -u origin main
   ```

2. **Sign Up/Login to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign up" or "Login"
   - Choose "Continue with GitHub"

3. **Import Your Repository**
   - Click "New Project" on Vercel dashboard
   - Click "Import" next to your portfolio repository
   - Vercel will automatically detect it's a React app

4. **Configure Build Settings**
   - **Framework Preset**: Vite (should auto-detect)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for build completion
   - Your site will be live at `https://your-repo-name.vercel.app`

6. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

### Automatic Updates
- Every push to your main branch automatically triggers a new deployment
- Preview deployments for pull requests

---

## 🌐 Option 2: Netlify

Great alternative with drag-and-drop deployment options.

### Method A: Git-based Deployment (Recommended)

1. **Prepare GitHub Repository**
   - Ensure your code is pushed to GitHub
   - Repository should be public or you have Netlify access

2. **Sign Up/Login to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Sign up" → "GitHub"
   - Authorize Netlify to access your repositories

3. **Import from Git**
   - Click "New site from Git" on Netlify dashboard
   - Choose "GitHub"
   - Select your portfolio repository

4. **Configure Build Settings**
   - **Branch to deploy**: `main`
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

5. **Deploy Site**
   - Click "Deploy site"
   - Wait for build completion (2-3 minutes)
   - Site will be live at `https://random-name.netlify.app`

6. **Custom Site Name**
   - Go to Site Settings → General
   - Change site name to something like `akash-more-portfolio`
   - New URL: `https://akash-more-portfolio.netlify.app`

### Method B: Manual Deployment

1. **Build Your Project Locally**
   ```bash
   npm install
   npm run build
   # Copy assets for downloads
   cp -r attached_assets dist/
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder to the deployment area
   - Site will be instantly live

### Custom Domain Setup
- Go to Domain Settings → Add custom domain
- Follow DNS configuration instructions
- Free SSL certificate included

---

## 📄 Option 3: GitHub Pages

Free hosting directly from your GitHub repository.

### Prerequisites
- GitHub repository (public for free accounts)
- Code pushed to GitHub

### Step-by-Step Instructions

1. **Prepare Your Repository**
   - Ensure all code is committed and pushed
   - Repository must be public for free GitHub Pages

2. **Create GitHub Actions Workflow**
   
   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
     pull_request:
       branches: [ main ]
   
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       
       steps:
       - name: Checkout
         uses: actions/checkout@v3
         
       - name: Setup Node.js
         uses: actions/setup-node@v3
         with:
           node-version: '18'
           cache: 'npm'
           
       - name: Install dependencies
         run: npm ci
         
       - name: Build
         run: npm run build
         
       - name: Deploy to GitHub Pages
         uses: peaceiris/actions-gh-pages@v3
         if: github.ref == 'refs/heads/main'
         with:
           github_token: ${{ secrets.GITHUB_TOKEN }}
           publish_dir: ./dist
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click "Settings" tab
   - Scroll to "Pages" section
   - Source: "Deploy from a branch"
   - Branch: `gh-pages` (will be created automatically)
   - Folder: `/ (root)`

4. **Update Base Path** (Important!)
   
   Update `vite.config.ts`:
   ```typescript
   export default defineConfig({
     // ... other config
     base: '/your-repository-name/',  // Add this line
   })
   ```

5. **Commit and Push**
   ```bash
   git add .
   git commit -m "Add GitHub Pages deployment"
   git push origin main
   ```

6. **Check Deployment**
   - Go to Actions tab in your repository
   - Watch the deployment process
   - Site will be live at: `https://your-username.github.io/your-repository-name/`

### Custom Domain for GitHub Pages
1. Add `CNAME` file to your repository root:
   ```
   your-domain.com
   ```
2. Configure DNS with your domain provider
3. Enable HTTPS in repository settings

---

## 🎯 Comparison Summary

| Feature | Vercel | Netlify | GitHub Pages |
|---------|--------|---------|--------------|
| **Ease of Setup** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Performance** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Custom Domains** | ✅ Free | ✅ Free | ✅ Free |
| **SSL Certificate** | ✅ Auto | ✅ Auto | ✅ Auto |
| **Build Speed** | Very Fast | Fast | Medium |
| **CDN** | Global | Global | GitHub CDN |
| **Cost** | Free tier | Free tier | Free |

## 🏆 Recommendation

**For Your Portfolio**: Use **Vercel**
- Fastest performance
- Best developer experience
- Automatic deployments
- Perfect for React/Vite applications
- Professional URLs

## 📁 Important: Before Deployment

**Build the Project First:**
```bash
npm run build
cp -r attached_assets dist/
```

This creates the `dist` folder with:
- Optimized React app in `dist/public/`
- Express server in `dist/index.js`
- All downloadable assets in `dist/attached_assets/`

## 🔧 Post-Deployment Checklist

After deploying to any platform:

1. **Test All Features**
   - ✅ Homepage loads correctly
   - ✅ Dark/light mode toggle works
   - ✅ All animations are smooth
   - ✅ Download buttons work for CV and certificates
   - ✅ Contact form submits properly
   - ✅ Mobile responsiveness

2. **SEO Optimization**
   - Add your live URL to LinkedIn profile
   - Submit to Google Search Console
   - Update any hardcoded URLs in your code

3. **Analytics (Optional)**
   - Add Google Analytics
   - Monitor visitor statistics

4. **Monitoring**
   - Set up uptime monitoring
   - Check performance metrics

---

**Your portfolio website will be live and accessible worldwide! 🌍**

Choose the platform that best fits your needs and follow the detailed steps above. All three options will give you a professional, fast-loading portfolio website.