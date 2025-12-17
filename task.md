<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# Backend Developer Intern Task - KonnichiWow

## Task: Expense Tracker Backend Development

**Objective**
Build a backend for an Expense Tracker Website using Express.js, MongoDB, and Firebase Authentication. The backend must include all essential API endpoints, Firebase-based user authentication, and expense management features, tested using Postman and documented clearly.[^1]

## Tech Stack

- **Language**: JavaScript (Node.js)
- **Framework**: Express.js
- **Authentication**: Firebase Authentication (Email/Password)
- **Database**: MongoDB (Mongoose recommended)
- **Testing Tool**: Postman[^1]


## API Endpoints

### User Authentication

| Endpoint | Method | Description | Auth Required | Request Body | Response |
| :-- | :-- | :-- | :-- | :-- | :-- |
| `/api/register` | POST | Register a new user using Firebase | No | `{ "email": "", "password": "" }` | `{ "message": "User registered successfully", "uid": "" }` [^1] |
| `/api/login` | POST | Login user and return Firebase token | No | `{ "email": "", "password": "" }` | `{ "token": "", "message": "Login successful" }` [^1] |
| `/api/logout` | POST | Logout the user | Yes | — | `{ "message": "Logout successful" }` [^1] |

### Expense Management

| Endpoint | Method | Description | Auth Required | Request Body | Response |
| :-- | :-- | :-- | :-- | :-- | :-- |
| `/api/expenses` | GET | Fetch all expenses for logged-in user | Yes | — | `[ { "id": "", "title": "", "amount": 0, "category": "", "date": "" } ]` [^1] |
| `/api/expenses/:id` | GET | Fetch a single expense by ID | Yes | — | `{ "id": "", "title": "", "amount": 0, "category": "", "date": "" }` [^1] |
| `/api/expenses` | POST | Add a new expense | Yes | `{ "title": "", "amount": 0, "category": "", "date": "" }` | `{ "message": "Expense added successfully", "id": "" }` [^1] |
| `/api/expenses/:id` | PUT | Update an expense | Yes | `{ "title": "", "amount": 0, "category": "", "date": "" }` | `{ "message": "Expense updated successfully" }` [^1] |
| `/api/expenses/:id` | DELETE | Delete an expense | Yes | — | `{ "message": "Expense deleted successfully" }` [^1] |

### Reports

| Endpoint | Method | Description | Auth Required | Query Params | Response |
| :-- | :-- | :-- | :-- | :-- | :-- |
| `/api/reports/monthly` | GET | Get total and category-wise expense summary for a month | Yes | `month=MM&year=YYYY` | `{ "total": 0, "categories": { "Food": 2000, "Travel": 500 } }` [^1] |
| `/api/reports/category` | GET | Get expenses filtered by category | Yes | `category=Food` | `[ { "id": "", "title": "", "amount": 0, "date": "" } ]` [^1] |

## Testing Requirements

- Test all API routes using Postman.
- Include Postman collection export (.json) in the repository.
- Validate both success and failure scenarios (invalid token, missing fields, etc.).[^1]


## API Documentation Format

Each endpoint must follow this structure:

**Endpoint**: `/api/expenses`
**Method**: `POST`
**Description**: Add a new expense to the user's list
**Authentication**: Required

**Request Body**:

```json
{
  "title": "Lunch",
  "amount": 250,
  "category": "Food",
  "date": "2025-10-12"
}
```

**Response Example**:

```json
{
  "message": "Expense added successfully",
  "id": "EXP123"
}
```

**Error Responses**:

- `400`: Missing required fields
- `401`: Unauthorized (Invalid/Missing token)
- `500`: Internal server error[^1]


## Submission Format

**GitHub Repository Name**: `ExpenseTrackerBackend_<YourName>`

**Repository Structure**:

```
ExpenseTrackerBackend_<YourName>/
  src/
    server.js
    routes/
    controllers/
    models/
    firebase/
  package.json
  README.md
  postman_collection.json
  API_Documentation.pdf
```

**README.md must include**:

- Project overview
- Setup instructions (installation, dependencies)
- How to run the server (npm start or nodemon)
- Example .env format (Firebase config, MongoDB URI, etc.)
- Example API usage[^1]


## Brownie Points

- Middleware for authentication validation
- Input validation using express-validator
- Custom error-handling middleware
- Clean and modular folder structure
- Meaningful variable names and comments
- Optional filtering/sorting routes
- Aggregation-based monthly reports[^1]


## Deadline

**Submission Mode**: Submit your GitHub repository link.
**Submission Deadline**: 02/11/2025[^1]


