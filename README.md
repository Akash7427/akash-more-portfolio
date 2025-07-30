# Akash Sanjay More - Professional Portfolio Website

A modern, responsive portfolio website for Akash Sanjay More, SAP Security Consultant at IBM India. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Dark/Light Mode**: Animated theme toggle with smooth transitions
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **Downloadable Assets**: CV and certificates with proper download functionality
- **Contact Form**: Functional email integration
- **Animated Interactions**: Smooth animations and hover effects
- **Print-Friendly**: Optimized for CV printing

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and optimized builds
- **Tailwind CSS** for styling
- **shadcn/ui** component library
- **Wouter** for lightweight routing
- **TanStack Query** for state management
- **React Hook Form** with Zod validation

### Backend
- **Node.js** with Express.js
- **TypeScript** for type safety
- **File serving** for certificate downloads

### Development Tools
- **Hot Module Replacement** for fast development
- **ESLint** and **Prettier** for code quality
- **TypeScript** strict mode

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5000`

## 🏗️ Project Structure

```
portfolio-website/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility functions
│   │   └── index.css      # Global styles and animations
│   └── index.html         # HTML template
├── server/                # Backend Express server
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   ├── storage.ts        # Data storage interface
│   └── vite.ts           # Vite integration
├── shared/               # Shared types and schemas
│   └── schema.ts         # TypeScript interfaces
├── attached_assets/      # Downloadable files (CV, certificates)
└── package.json         # Dependencies and scripts
```

## 🎨 Key Features

### Animations
- **Floating Profile Image**: Gentle up-down animation
- **Section Animations**: Fade-in, slide-in, bounce-in effects
- **Hover Effects**: Smooth transitions on interactive elements
- **Theme Toggle**: Animated slider with icon transitions

### Download System
- Secure file serving through Express.js
- Support for PDF downloads (CV and certificates)
- Error handling and user feedback

### Responsive Design
- Mobile-first approach
- Optimized for tablets and desktops
- Print-friendly styling

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 📱 Contact Form

The contact form is fully functional and includes:
- Real-time validation
- Email sending capability (configured for akashmore7427@gmail.com)
- Success/error feedback
- Form reset after submission

## 🎯 Deployment

The application is designed to run on various platforms:

### Replit (Current)
- Already configured with workflows
- Automatic restarts and hot reloading

### Vercel/Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder
3. Configure environment variables if needed

### Docker (Optional)
A Dockerfile can be added for containerized deployment.

## 🔒 Environment Variables

No environment variables are required for basic functionality. The contact form uses a simple endpoint that can be extended with email service integration.

## 📄 License

This project is for portfolio purposes. All content and design are proprietary to Akash Sanjay More.

## 🤝 Contributing

This is a personal portfolio project. For suggestions or improvements, please contact:

- **Email**: akashmore7427@gmail.com
- **LinkedIn**: [Akash More](https://www.linkedin.com/in/akash-more-90885518a/)
- **Phone**: +91 8141292894

## 🏆 Achievements Showcased

- **SAP Certified Technology Consultant** - S/4 Hana System Administration
- **SAP Security Administration Specialist**
- **Microsoft Azure Fundamentals Certified**
- **5 IBM Professional Certifications**
- **Smart India Hackathon 2020 Winner** - Innovative Category

---

**Built with ❤️ by Akash Sanjay More**
*SAP Security Consultant at IBM India*