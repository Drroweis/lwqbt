import jwt from 'jsonwebtoken';

export const auth = (req, res, next) => {
  // Get token from cookies
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: 'Authentication required' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Add user info to request
    next(); // Proceed to the next middleware/route
  } catch (error) {
    return res.status(403).json({ message: 'Invalid token' });
  }
};
