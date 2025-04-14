const { JWT_SECRET } = require("../config/db");
const jwt = require('jsonwebtoken');
const User = require("../models/User");

const auth = {
    checkAuth: (req, res, next) => {
        try {
            const token = req.cookies.token;

            if (!token) {
                return res.status(401).json({ message: "Unauthorized" });
            }

            jwt.verify(token, JWT_SECRET, (err, decoded) => {
                if (err) {
                    return res.status(401).json({ message: "Unauthorized" });
                }

                req.userId = decoded.id; // Set userId for next middleware
                console.log("Authenticated User:", decoded);
                next();
            });
        } catch (err) {
            console.log("Auth Middleware Error:", err);
            res.status(500).json({ message: "Auth Error" });
        }
    },

    roleAuth: async (req, res, next) => {
        try {
            const { userId } = req;

            const user = await User.findById(userId);
            if (!user) {
                return res.status(403).json({ message: "Access denied" });
            }

            const allowedRoles = ['admin', 'agent', 'inventory']; // you can customize this list

            if (!allowedRoles.includes(user.role)) {
                return res.status(403).json({ message: "You are not allowed" });
            }

            next();
        } catch (err) {
            console.log("RoleAuth Middleware Error:", err);
            res.status(500).json({ message: "Authorization Error" });
        }
    }
};

module.exports = auth;
