import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

/* Register User */
export const register = async (req, res) => {
    try {
        const {
            name,
            email,
            password,
            school,
            grade
        } = req.body;

        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);
        console.log(passwordHash);

        const newUser = new User({
            name,
            email,
            password: passwordHash,
            school,
            grade
        });

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};

/* Logging In */
export const login = async (req, res) => {
    try {
        const {
            email,
            password
        } = req.body;
        const user = await User.findOne({
            email: email
        });
        if (!user) return res.status(400).json({
            msg: "User does not exist"
        });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({
            msg: "Invalid password"
        });

        const token = jwt.sign({
            id: user._id
        }, "shh");

        delete user.password;
        res.status(200).json({
            token,
            user
        });
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};