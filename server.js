const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

// Import config and routes
const { MONGODB_URI, PORT } = require('./config/db');
const app = require('./app'); // Express app from app.js
const authRouter = require('./routes/authRoutes');
const medicineRoutes = require('./routes/medicineRoutes');

// Middleware
const allowedOrigins = [
    'https://mediscrpt.netlify.app',
    'http://localhost:5173' // Add your local dev client here
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(express.json()); // For parsing JSON bodies
app.use(cookieParser()); // For parsing cookies
app.use(morgan('dev'));  // For logging requests

// Routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/medicine', medicineRoutes);

// Connect to MongoDB and start server
mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log("✅ MongoDB connected successfully!");
        app.listen(PORT, () => {
            console.log(`🚀 Server running at http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error("❌ MongoDB connection failed:", err);
    });
