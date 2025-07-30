# Local Development Setup Guide

This guide will help you set up and run the Akash More Portfolio website on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher)
  - Download from: https://nodejs.org/
  - Verify installation: `node --version`
- **npm** (comes with Node.js)
  - Verify installation: `npm --version`
- **Git** (optional, for cloning)
  - Download from: https://git-scm.com/

## Step-by-Step Setup

### 1. Download/Clone the Project

**Option A: Download ZIP**
1. Download the project ZIP file
2. Extract to your desired location
3. Open terminal/command prompt in the extracted folder

**Option B: Clone from GitHub**
```bash
git clone <your-github-repository-url>
cd portfolio-website
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- React and TypeScript
- Vite build tool
- Tailwind CSS
- UI components
- Server dependencies

### 3. Start the Development Server

```bash
npm run dev
```

You should see output like:
```
> rest-express@1.0.0 dev
> NODE_ENV=development tsx server/index.ts
[express] serving on port 5000
```

### 4. Open in Browser

Navigate to: http://localhost:5000

The website should load with all features working:
- ✅ Responsive design
- ✅ Dark/light mode toggle
- ✅ Smooth animations
- ✅ Download functionality for CV and certificates
- ✅ Contact form

## Development Features

### Hot Module Replacement
- Changes to code automatically reload the browser
- Instant feedback during development

### File Structure
```
portfolio-website/
├── client/src/          # Frontend React code
├── server/              # Backend Express server
├── attached_assets/     # Downloadable files
└── shared/             # Shared TypeScript types
```

### Key Files to Customize

1. **client/src/pages/home.tsx** - Main portfolio content
2. **client/src/index.css** - Styles and animations
3. **attached_assets/** - Replace with your own CV and certificates
4. **server/routes.ts** - API endpoints

## Building for Production

```bash
npm run build
```

This creates optimized files in the `dist/` folder ready for deployment.

## Troubleshooting

### Port Already in Use
If port 5000 is busy, the server will automatically use the next available port.

### Permission Issues
On Windows, you might need to run terminal as Administrator.

### Dependencies Not Installing
Try:
```bash
npm cache clean --force
rm -rf node_modules
npm install
```

### Files Not Downloading
Ensure all files exist in the `attached_assets/` folder with correct names.

## Customization Guide

### Adding Your Own Content

1. **Replace Images**
   - Add your profile picture to `attached_assets/`
   - Update the import in `home.tsx`

2. **Update Contact Information**
   - Modify email, phone, LinkedIn in `home.tsx`
   - Update the contact form endpoint if needed

3. **Add/Remove Sections**
   - Edit the `home.tsx` file
   - Follow the existing pattern for new sections

4. **Modify Styling**
   - Update `index.css` for global styles
   - Use Tailwind classes for component styling

### Adding New Certificates

1. Add PDF file to `attached_assets/`
2. Create new card in the certifications section
3. Update the download function call

## Deployment Options

### Vercel (Recommended)
1. Push code to GitHub
2. Connect GitHub repo to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Drag the `dist/` folder to Netlify

### Traditional Hosting
1. Build the project: `npm run build`
2. Upload `dist/` contents to your web server

## Support

For technical support or questions:
- Email: akashmore7427@gmail.com
- LinkedIn: [Akash More](https://www.linkedin.com/in/akash-more-90885518a/)

## Common Commands Reference

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check for updates
npm outdated

# Update dependencies
npm update
```

---

**Happy Coding! 🚀**