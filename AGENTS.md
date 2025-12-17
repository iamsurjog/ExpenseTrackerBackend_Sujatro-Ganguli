# AGENTS.md

## Commands
- **Start development**: `npm run dev` (uses nodemon)
- **Start production**: `npm start`
- **Tests**: No test framework configured (npm test returns error)

## Code Style Guidelines

### Imports & Dependencies
- Use CommonJS `require()` syntax (not ES6 imports)
- Import order: built-in → third-party → local modules
- `require('dotenv').config();` at top of server.js

### Formatting & Structure
- Use `var` declarations (following existing pattern)
- 2-space indentation
- Express router pattern: `var router = express.Router()`
- Route handlers: `router.post('/register', register)` or `router.post('/logout', authenticateToken, logout)`

### Naming Conventions
- camelCase for variables/functions
- PascalCase for routers (usersRouter, expensesRouter, reportsRouter)
- kebab-case for API routes (/api/expenses, /api/reports)

### Error Handling
- Use http-errors package for 404 errors
- Global error handler in server.js:48-58 returns JSON with status/message
- Auth errors: return 401/400 with JSON message
- Firebase errors: check error.code (auth/email-already-exists, auth/user-not-found)

### Firebase Integration
- Firebase Admin with serviceAccountKey.json
- Use `auth.verifyIdToken()` for token verification in middleware
- Use `auth.createCustomToken()` for login
- Use `auth.revokeRefreshTokens()` for logout
- Middleware: `authenticateToken` in middleware/authenticateToken.js

### Database
- MongoDB with Mongoose (currently commented out in server.js:23-29)
- Connection string from process.env.MONGODB_URL