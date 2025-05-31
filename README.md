# Pantry App

A complete web application for ordering items from local pantries with real-time notifications.

## Features

- User authentication (Customer & Vendor roles)
- Order placement and management
- Real-time notifications
- Vendor dashboard for order management
- MySQL database integration

## Setup Instructions

### 1. Database Setup

1. Install MySQL on your system
2. Create a new database:
   \`\`\`sql
   CREATE DATABASE pantry_app;
   \`\`\`
3. Run the schema file:
   \`\`\`bash
   mysql -u root -p pantry_app < database/schema.sql
   \`\`\`

### 2. Environment Variables

1. Copy `.env.example` to `.env.local`:
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`
2. Update the database credentials in `.env.local`

### 3. Install Dependencies

\`\`\`bash
npm install
\`\`\`

### 4. Run the Application

\`\`\`bash
npm run dev
\`\`\`

The application will be available at `http://localhost:3000`

## Default Accounts

- **Vendor Account**: 
  - Email: vendor@pantryapp.com
  - Password: password123

## Deployment

### Vercel Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Database Hosting

For production, consider using:
- PlanetScale
- AWS RDS
- Google Cloud SQL
- Railway

## API Endpoints

- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `GET /api/orders` - Get user orders
- `POST /api/orders` - Create new order
- `PATCH /api/orders/[id]` - Update order status
- `GET /api/notifications` - Get user notifications
- `PATCH /api/notifications/[id]` - Mark notification as read

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: MySQL
- **Authentication**: Custom JWT-based auth
- **UI Components**: shadcn/ui
