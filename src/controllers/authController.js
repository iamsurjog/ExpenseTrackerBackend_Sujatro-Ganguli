const { auth } = require('../firebase/firebaseAdmin.js');

const register = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validation
        if (!email || !password) {
            return res.status(400).json({
                message: 'Missing required fields (email, password)',
            });
        }

        if (password.length < 6) {
            return res.status(400).json({
                message: 'Password must be at least 6 characters',
            });
        }

        // Create user in Firebase
        const userRecord = await auth.createUser({
            email,
            password,
        });

        return res.status(201).json({
            message: 'User registered successfully',
            uid: userRecord.uid,
        });
    } catch (error) {
        if (error.code === 'auth/email-already-exists') {
            return res.status(400).json({
                message: 'Email already in use',
            });
        }

        return res.status(500).json({
            message: 'Internal server error',
            error: error.message,
        });
    }
};

/**
 * Login user and return Firebase token
 * POST /api/login
 * Body: { email, password }
 */
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validation
        if (!email || !password) {
            return res.status(400).json({
                message: 'Missing required fields (email, password)',
            });
        }

        // Get user by email
        const userRecord = await auth.getUserByEmail(email);
        if (userRecord.password == password){
            const token = await auth.createCustomToken(userRecord.uid);
            return res.status(200).json({
                token,
                message: 'Login successful',
            });
        }else{
            return res.status(401).json({
                message: 'Invalid email or password',
            });
        }

        // Generate custom token
    } catch (error) {
        if (error.code === 'auth/user-not-found') {
            return res.status(401).json({
                message: 'Invalid email or password',
            });
        }

        return res.status(500).json({
            message: 'Internal server error',
            error: error.message,
        });
    }
};

/**
 * Logout the user
 * POST /api/logout
 * Auth: Required
 */
const logout = async (req, res) => {
    try {
        // Firebase tokens are stateless; logout is client-side
        // Optional: Invalidate token by revoking refresh tokens
        const uid = req.uid;

        await auth.revokeRefreshTokens(uid);

        return res.status(200).json({
            message: 'Logout successful',
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Internal server error',
            error: error.message,
        });
    }
};

module.exports = { register, login, logout };
