const { auth } = require('../firebase/firebaseAdmin.js');

const authenticateToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split('Bearer ')[1];

    if (!token) {
      return res.status(401).json({
        message: 'Unauthorized (Missing token)',
      });
    }

    const decodedToken = await auth.verifyIdToken(token);
    req.uid = decodedToken.uid;
    req.email = decodedToken.email;

    next();
  } catch (error) {
    return res.status(401).json({
      message: 'Unauthorized (Invalid/Expired token)',
      error: error.message,
    });
  }
};

module.exports = { authenticateToken };
