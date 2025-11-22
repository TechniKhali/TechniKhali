# Data Engineer Portfolio Website

## Overview

This is a personal portfolio website for a Data Engineer specializing in Data Engineering and Data Visualization. The site showcases projects, blog posts, CV/resume, and professional information with a distinctive design aesthetic featuring Farrow & Ball's "Sulking Room Pink" as the primary accent color.

The application is built as a full-stack web application with a React frontend and Express backend, designed to present professional work while maintaining a warm, elegant, and faith-conscious visual identity.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript, using Vite as the build tool and development server.

**Routing**: Client-side routing implemented with Wouter, a lightweight routing library. The application supports the following routes:
- `/` - Home page with hero section and skills overview
- `/portfolio` - Project grid/listing
- `/portfolio/:id` - Individual project detail pages
- `/cv` - Resume/CV page
- `/blog` - Blog post listing
- `/blog/:id` - Individual blog post pages
- `/about` - About page
- `/contact` - Contact form page

**UI Component System**: Shadcn/ui components (customized "New York" style) built on Radix UI primitives, providing accessible and composable UI elements. The design system includes:
- Custom color palette centered around "Sulking Room Pink" (#C896A4)
- Warm neutrals and muted gold accents
- Typography using Inter/Plus Jakarta Sans for body and Playfair Display for headings
- Islamic geometric patterns as subtle decorative accents
- Tailwind CSS for styling with custom theme extensions

**State Management**: TanStack Query (React Query) for server state management, handling data fetching, caching, and synchronization for projects, blog posts, and contact submissions.

**Styling Approach**: Utility-first CSS with Tailwind, custom CSS variables for theming, and a design token system supporting both light and dark modes.

**Design System**: 
- Spacing primitives follow Tailwind's scale (2, 4, 6, 8, 12, 16, 20, 24)
- 12-column responsive grid system
- Consistent border radius values (sm: 3px, md: 6px, lg: 9px)
- Elevation system using subtle shadows and hover effects

### Backend Architecture

**Server Framework**: Express.js running on Node.js with TypeScript.

**Development vs Production**: 
- Development mode uses Vite's middleware for HMR (Hot Module Replacement) and serves the client dynamically
- Production mode serves pre-built static assets from the `dist/public` directory

**API Structure**: RESTful API endpoints following resource-based naming:
- `GET /api/projects` - List all projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create project
- `GET /api/blog` - List all blog posts
- `GET /api/blog/:id` - Get single blog post
- `POST /api/blog` - Create blog post
- `GET /api/skills` - List skills (static data)
- `POST /api/contact` - Submit contact form

**Data Validation**: Zod schemas (via Drizzle-Zod) for runtime validation of incoming requests and type safety.

### Data Storage

**ORM**: Drizzle ORM configured for PostgreSQL database operations.

**Schema Design**: Three main entity types defined in `shared/schema.ts`:
1. **Projects** - Portfolio projects with title, description, overview, challenge/solution narrative, tech stack array, images, and optional GitHub/demo URLs
2. **Blog Posts** - Articles with title, content, excerpt, banner image, tags array, category, and read time
3. **Skills** - Static skill data (no database table, served from memory)
4. **Contact Submissions** - Form submissions with name, email, and message

**Development Storage**: In-memory storage implementation (`MemStorage` class) with sample data for development and testing, allowing the application to run without a database connection.

**Database Configuration**: 
- PostgreSQL via Neon Database serverless driver (`@neondatabase/serverless`)
- Connection via `DATABASE_URL` environment variable
- Migrations managed through Drizzle Kit in `./migrations` directory

### Authentication & Authorization

Currently, the application does not implement authentication. All API endpoints are publicly accessible. The contact form and potential admin features for creating projects/blog posts are unauthenticated.

**Future Consideration**: Authentication would be needed for admin capabilities (creating/editing projects and blog posts).

### Design Philosophy

**Reference-Based Custom Aesthetic**: Blends modern portfolio layouts (inspired by Dribbble/Behance) with boutique branding warmth, incorporating subtle Islamic geometric patterns as decorative elements without overwhelming the content.

**Key Principles**:
- Warm sophistication with professional yet gentle visual identity
- Restrained elegance with subtle decorative patterns
- Content clarity prioritizing data visualizations and technical content
- Faith-conscious refinement integrating spiritual elements tastefully

## External Dependencies

### Frontend Libraries
- **@tanstack/react-query** (v5.60.5) - Server state management and data fetching
- **wouter** - Lightweight client-side routing
- **react-hook-form** - Form state management and validation
- **@hookform/resolvers** - Integration between react-hook-form and Zod validation
- **zod** - Schema validation and TypeScript type inference
- **date-fns** - Date formatting and manipulation
- **lucide-react** - Icon library
- **class-variance-authority** - Variant-based component styling
- **clsx** & **tailwind-merge** - Utility for conditional className merging

### UI Component Primitives
- **@radix-ui/** - Comprehensive suite of accessible, unstyled UI primitives including dialog, dropdown, accordion, tabs, toast, navigation menu, and many others

### Backend Libraries
- **express** - Web server framework
- **drizzle-orm** - TypeScript ORM for database operations
- **drizzle-zod** - Integration between Drizzle and Zod for schema validation
- **@neondatabase/serverless** - PostgreSQL database client optimized for serverless environments

### Build Tools & Development
- **vite** - Frontend build tool and development server
- **typescript** - Type safety across the stack
- **tailwindcss** - Utility-first CSS framework
- **postcss** & **autoprefixer** - CSS processing
- **esbuild** - Fast JavaScript bundler for production server build
- **tsx** - TypeScript execution for development server
- **drizzle-kit** - Database migration and schema management tool

### Replit-Specific Integrations
- **@replit/vite-plugin-runtime-error-modal** - Development error overlay
- **@replit/vite-plugin-cartographer** - Development tooling (dev mode only)
- **@replit/vite-plugin-dev-banner** - Development banner (dev mode only)

### Database
- **PostgreSQL** (via Neon serverless) - Primary data store for projects, blog posts, and contact submissions
- Connection string provided via `DATABASE_URL` environment variable
- Schema migrations managed through Drizzle Kit

### Assets & Media
The application references generated images stored in `attached_assets/generated_images/` for professional headshots and project thumbnails.