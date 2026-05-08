const passport = require("passport");
const userModel = require("../Models/user");

const sanitizeUser = (user) => ({
    id: user._id,
    name: user.name,
    number: user.number,
});

module.exports.checkNumber = async (req, res) => {
    try {
        const { number } = req.body;

        if (!/^\d{10}$/.test(number || "")) {
            return res.status(400).json({ message: "Enter a valid 10-digit number" });
        }

        const user = await userModel.findOne({ number });
        res.json({ exists: Boolean(user), number });
    } catch (error) {
        res.status(500).json({ message: "Failed to check number", error: error.message });
    }
};

module.exports.signup = async (req, res) => {
    try {
        const { name, number, password } = req.body;

        if (!name || !number || !password) {
            return res.status(400).json({ message: "Name, number, and password are required" });
        }

        if (!/^\d{10}$/.test(number)) {
            return res.status(400).json({ message: "Enter a valid 10-digit number" });
        }

        const existingUser = await userModel.findOne({ number });

        if (existingUser) {
            return res.status(409).json({ message: "Number already exists" });
        }

        const user = new userModel({ name, number });
        user.setPassword(password);
        await user.save();

        req.login(user, { session: false }, (error) => {
            if (error) {
                return res.status(500).json({ message: "Signup successful, but auto login failed" });
            }

            res.status(201).json({ message: "Signup successful", user: sanitizeUser(user) });
        });
    } catch (error) {
        res.status(500).json({ message: "Failed to signup", error: error.message });
    }
};

module.exports.login = async (req, res) => {
    passport.authenticate("local", { session: false }, (error, user, info) => {
        if (error) {
            return res.status(500).json({ message: "Failed to login", error: error.message });
        }

        if (!user) {
            return res.status(401).json({ message: info?.message || "Invalid number or password" });
        }

        req.login(user, { session: false }, (loginError) => {
            if (loginError) {
                return res.status(500).json({ message: "Failed to login", error: loginError.message });
            }

            res.json({ message: "Login successful", user: sanitizeUser(user) });
        });
    })(req, res);
};
