# Travel Explorer

A modern travel exploration platform built with React, Node.js, and MongoDB.

## Development Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. In a separate terminal, start the backend server:
```bash
npm run server
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend: http://localhost:5503

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
PORT=5503
NODE_ENV=development
CLIENT_URL="http://localhost:5173"
VITE_API_URL="http://localhost:5503"
MONGODB_URI="your_mongodb_uri"
JWT_SECRET="your_jwt_secret"
JWT_EXPIRES_IN="7d"
```

## Available Scripts

- `npm run dev`: Start the Vite development server
- `npm run server`: Start the backend server with hot reload
- `npm run build`: Build the application for production
- `npm run preview`: Preview the production build locally
- `npm run lint`: Run ESLint to check code quality

