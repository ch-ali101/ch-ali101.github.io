# Ali Gohar Portfolio - Full Stack Application

## Overview

This is a personal portfolio website for Ali Gohar, a software engineer and Next.js developer. The application is built as a full-stack solution with a React frontend and Express backend, featuring a clean, modern design showcasing professional experience, skills, projects, and contact information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

This is a monorepo application using a modern full-stack architecture with clear separation between client and server code. The application follows a component-based design pattern with shared utilities and schemas.

### Directory Structure
- `client/` - React frontend application
- `server/` - Express.js backend server
- `shared/` - Common schemas and types used by both client and server
- `migrations/` - Database migration files (Drizzle)

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management
- **Build Tool**: Vite for fast development and optimized builds
- **UI Components**: Comprehensive shadcn/ui component system with Radix UI primitives

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Storage**: PostgreSQL session store with connect-pg-simple
- **API Design**: RESTful API structure with `/api` prefix

### Database Schema
- **Users Table**: Basic user management with username/password authentication
- **ORM**: Drizzle ORM for type-safe database operations
- **Migrations**: Automated database migrations with drizzle-kit
- **Validation**: Zod schemas for runtime type validation

## Data Flow

1. **Client Requests**: React frontend makes API calls to Express backend
2. **Server Processing**: Express routes handle business logic and database operations
3. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
4. **Response Handling**: TanStack Query manages caching and state updates on the frontend
5. **UI Updates**: React components re-render based on state changes

### Current Implementation
- Frontend uses in-memory storage simulation (MemStorage class)
- Backend routes are prepared but minimal implementation
- Database schema defined but not fully utilized in current codebase

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React, React DOM
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **Component Library**: Radix UI primitives, shadcn/ui components
- **State Management**: TanStack React Query
- **Routing**: Wouter
- **Forms**: React Hook Form with Hookform Resolvers
- **Date Handling**: date-fns
- **Icons**: Lucide React
- **Carousel**: Embla Carousel

### Backend Dependencies
- **Server Framework**: Express.js
- **Database**: Drizzle ORM, @neondatabase/serverless
- **Session Management**: connect-pg-simple
- **Validation**: Zod, drizzle-zod
- **Development**: tsx for TypeScript execution

### Development Tools
- **Build System**: Vite with React plugin
- **Type Checking**: TypeScript with strict configuration
- **Database Tools**: Drizzle Kit for migrations and schema management
- **Development Server**: Hot module replacement with Vite

## Deployment Strategy

### Production Build Process
1. **Frontend Build**: Vite builds React application to `dist/public`
2. **Backend Build**: esbuild bundles Express server to `dist/index.js`
3. **Database Setup**: Drizzle migrations applied via `db:push` command

### Environment Configuration
- **Database**: Requires `DATABASE_URL` environment variable for PostgreSQL connection
- **Production Mode**: `NODE_ENV=production` for optimized builds
- **Development Mode**: `NODE_ENV=development` with hot reloading

### Hosting Considerations
- Static assets served from `dist/public`
- API routes prefixed with `/api`
- Single server process handles both API and static file serving
- PostgreSQL database required (configured for Neon serverless)

### Development vs Production
- **Development**: Vite dev server with HMR, middleware mode for API integration
- **Production**: Express serves static files and API routes from single process
- **Database**: PostgreSQL in both environments, migrations handled by Drizzle