# AGENTS.md

## Commands
- **Start development**: `npm run dev` (uses nodemon)
- **Start production**: `npm start`
- **Tests**: No test framework configured (package.json shows placeholder)

## Code Style Guidelines

### Imports & Dependencies
- Use CommonJS `require()` syntax (not ES6 imports)
- Import order: built-in modules → third-party packages → local modules
- Example: `require('dotenv').config();` at top of server.js

### Formatting & Structure
- Use var declarations (not const/let) - following existing codebase pattern
- 2-space indentation
- Express.js router pattern for routes
- Middleware setup in server.js before routes

### Naming Conventions
- camelCase for variables and functions
- PascalCase for routers (usersRouter, expenseRouter)
- kebab-case for API routes (/api/expenses, /api/reports)

### Error Handling
- Use http-errors package for creating errors
- Global error handler middleware in server.js:55-62
- 404 handler in server.js:50-52

### Firebase Integration
- Firebase Admin initialized with serviceAccountKey.json
- Use admin.auth() for user authentication

### Database
- MongoDB with Mongoose (currently commented out in server.js:31-36)
- Connection string from process.env.MONGODB_URL