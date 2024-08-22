const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

router.post('/register', async (req, res) => {
    // Handle user registration
});

router.post('/login', async (req, res) => {
    // Handle user login
});

module.exports = router;