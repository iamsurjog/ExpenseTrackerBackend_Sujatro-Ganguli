# AGENTS.md

## Commands
- **Start development**: `npm run dev` (uses nodemon)
- **Start production**: `npm start`
- **Tests**: No test framework configured

## Code Style Guidelines

### Imports & Dependencies
- Use CommonJS `require()` syntax (not ES6 imports)
- Import order: built-in → third-party → local modules
- `require('dotenv').config();` at top of server.js

### Formatting & Structure
- Use `var` declarations (following existing pattern)
- 2-space indentation
- Express router pattern: `var router = express.Router()`
- Route handlers: `router.post('/', authenticateToken, function(req, res, next) {})`

### Naming Conventions
- camelCase for variables/functions
- PascalCase for routers (usersRouter, expenseRouter)
- kebab-case for API routes (/api/expenses, /api/reports)

### Error Handling
- Use http-errors package
- Global error handler in server.js:48-58
- Auth errors: return 401 with JSON message

### Firebase Integration
- Firebase Admin with serviceAccountKey.json
- Use `auth.verifyCustomToken()` for verification
- Middleware: `authenticateToken` in middleware/authenticateToken.js

### Database
- MongoDB with Mongoose (currently commented out)
- Connection string from process.env.MONGODB_URL