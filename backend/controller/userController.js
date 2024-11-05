const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
// const authenticateToken = require("../middleware/authenticate.js")
const prisma = new PrismaClient();


const app = express.Router();
const JWT_SECRET = 'your_jwt_secret'; 

app.use(express.json());

app.post('/register', async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const user = await prisma.user.create({
      data: { email, name , password },
    });
    res.status(201).json({ message: 'User registered', user });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: 'Error registering user' });
  }
});

app.post('/login',  async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(401).json({ error: 'Invalid email or password' });

    const isPasswordValid = password == user.password;
    if (!isPasswordValid) return res.status(401).json({ error: 'Invalid email or password' });

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ message: 'Login successful', token });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: 'Error logging in' });
  }
});

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Access denied, token missing' });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Token invalid or expired' });
    req.user = user;
    next();
  });
};


app.get('/oorke', async (req, res) => {
  const user = await prisma.user.findMany();
  res.json({ message: 'User profile', user });
});

app.delete('/users/:email', authenticateToken, async (req, res) => {
  const { email } = req.params;
  console.log(email);
  try {
    const deleteUser = await prisma.user.delete({
      where: {
        email: 'charan@gmail.com',
      },
    });
    console.log(deleteUser);
    res.json({ message: 'User deleted' });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: 'Error deleting user' });
  }
});

app.put('/users/:email', authenticateToken, async (req, res) => {
  const { email } = req.params;
  const { name, password } = req.body;
  
  const data = {};
  if (name) {
    data.name = name;
  }
  if (password) {
    data.password = await bcrypt.hash(password, 10); 
  }
  try {
    const updatedUser = await prisma.user.update({
      where: { email },
      data,
    });
    res.json({ message: 'User updated', updatedUser });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({messge : "Error putting the user"});
  }
});

module.exports = app
