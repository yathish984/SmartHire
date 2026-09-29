const User = require("../models/User");

const registerUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                message: "Name, email and password are required"
            });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        const user = new User({
            name,
            email,
            password,
            role
        });

        await user.save();

        res.status(201).json({
            message: "User registered successfully",
            user
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Registration failed",
            error: error.message
        });
    }
};

module.exports = {
    registerUser
};