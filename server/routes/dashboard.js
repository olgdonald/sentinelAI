// server/routes/dashboard.js
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

router.get('/', (req, res) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.status(401).json({ error: 'Token manquant' });

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    res.json({ email: decoded.email });
  } catch (err) {
    res.status(403).json({ error: 'Token invalide' });
  }
});

module.exports = router;
