# Portfolio Website - Akash Sanjay More

## Overview

This is a professional portfolio website for Akash Sanjay More, an SAP Security Consultant at IBM India. The application is built as a full-stack web application with a React frontend, Express.js backend, and PostgreSQL database integration using Drizzle ORM. The site showcases professional experience, skills, projects, and provides a contact form for potential clients or employers.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS for utility-first styling with custom design tokens
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for REST API endpoints
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL session store with connect-pg-simple
- **Build System**: esbuild for production bundling

### Design System
- **Component Library**: shadcn/ui with "new-york" style variant
- **Color Scheme**: Neutral base with IBM blue primary colors
- **Typography**: Inter font family for clean, professional appearance
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Key Components

### Database Schema
- **Users Table**: Basic user management with UUID primary keys, username, and password fields
- **Schema Location**: `shared/schema.ts` for type-safe sharing between frontend and backend
- **Validation**: Drizzle-Zod integration for runtime validation

### API Endpoints
- **Contact Form**: `/api/contact` POST endpoint for handling contact form submissions
- **Error Handling**: Centralized error middleware with proper HTTP status codes
- **Request Logging**: Custom middleware for API request/response logging

### Frontend Pages
- **Home Page**: Complete portfolio showcase with sections for:
  - Professional experience at IBM and previous companies
  - Technical skills and certifications
  - Project portfolios from different roles
  - Educational background
  - Contact form integration
- **404 Page**: Custom not found page with developer-friendly messaging

### UI Components
- Comprehensive component library covering:
  - Form components (Input, Textarea, Button, Label)
  - Layout components (Card, Separator, Badge)
  - Interactive components (Dialog, Tooltip, Accordion)
  - Navigation components (Tabs, Navigation Menu)

## Data Flow

### Client-Server Communication
1. **Frontend**: React components use TanStack Query for data fetching
2. **API Layer**: Express.js handles HTTP requests with JSON middleware
3. **Database**: Drizzle ORM manages PostgreSQL connections and queries
4. **Response Flow**: JSON responses with proper error handling and status codes

### Form Submission Flow
1. User fills out contact form on frontend
2. Form validation using React Hook Form + Zod schemas
3. POST request to `/api/contact` endpoint
4. Server validates and processes form data
5. Success/error response returned to client
6. Toast notifications display result to user

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18+ with TypeScript support
- **Database**: Neon serverless PostgreSQL with Drizzle ORM
- **UI Library**: Radix UI primitives with shadcn/ui wrapper components
- **Development Tools**: Vite, esbuild, TypeScript compiler

### Notable Third-Party Integrations
- **Fonts**: Google Fonts (Inter) for typography
- **Icons**: Lucide React for consistent iconography
- **Animations**: Tailwind CSS animations and transitions
- **Development**: Replit-specific tooling for development environment

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles Express server to `dist/index.js`
3. **Database Migration**: Drizzle Kit manages schema migrations
4. **Environment Variables**: Database URL and other config via environment

### Development vs Production
- **Development**: Hot reload with Vite dev server and TSX execution
- **Production**: Static file serving with optimized builds
- **Database**: Shared PostgreSQL instance with migration support

### Environment Requirements
- Node.js with ES modules support
- PostgreSQL database (Neon serverless recommended)
- Environment variables for database connection
- Modern browser support for frontend features

The application follows a monorepo structure with shared types and utilities, making it easy to maintain consistency between frontend and backend while providing a professional portfolio experience.

## Recent Updates (July 30, 2025)

### Major Enhancements Completed
- **Download System**: Implemented secure file serving with Express.js API endpoint for all certificates and CV
- **Enhanced Animations**: Added comprehensive animation system with fade-in, slide-in, bounce-in, scale-in, and floating effects
- **Theme Toggle**: Replaced basic buttons with animated slider toggles featuring smooth transitions
- **Experience Update**: Updated professional experience from 2+ to 3+ years
- **File Management**: Updated all downloadable assets with fresh, working files
- **UI Polish**: Centered all button text and improved visual consistency

### Technical Improvements
- Added proper `/api/download/:filename` endpoint with error handling
- Enhanced CSS animation keyframes for better user experience
- Improved file download functionality with blob handling
- Added floating animation to profile image
- Implemented staggered animations across sections

### User Feedback Integration
- All download functionality tested and working (CV, SAP certificates, IBM certificates, Azure certificate, SIH certificate)
- Responsive design maintained across all new features
- Dark/light mode compatibility preserved for all enhancements

The portfolio is now production-ready with professional animations, reliable download functionality, and an enhanced user experience that showcases technical expertise and attention to detail.

### Final Deployment Updates (January 30, 2025)
- **Simplified Vercel Deployment**: Removed complex serverless functions in favor of static asset serving
- **Direct Download Links**: Files served directly from `/attached_assets/` path for maximum compatibility
- **Cross-Platform Build**: Simple `npm run build && cp` command works on all deployment platforms
- **Clean Configuration**: Minimal `vercel.json` with just build command and output directory
- **Tested Build Process**: All assets properly copied to `dist/public/attached_assets/` for deployment

The portfolio now uses the most reliable deployment approach with static file serving, ensuring downloads work consistently across all hosting platforms.

### Contact Form Fix (January 30, 2025)
- **Issue Resolved**: "Something went wrong" error when submitting contact form
- **Solution Implemented**: Converted contact form to use mailto links instead of API calls
- **User Experience**: Form data is pre-filled in user's default email client
- **Compatibility**: Works on all static hosting platforms (Vercel, Netlify, GitHub Pages)
- **User Guidance**: Added explanatory text to guide users through the email process

The contact form now provides a seamless experience by leveraging the user's default email client, eliminating the need for complex backend API integration while maintaining professional functionality.