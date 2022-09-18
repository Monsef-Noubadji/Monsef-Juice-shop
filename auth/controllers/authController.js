const User = require("../models/user")
const createToken = require("../services/createToken")
const errorHandler = require('../services/errorHandler')
const jwt = require('jsonwebtoken')
require('dotenv').config();
// Main controllers
const home = (req, res) => {
    res.render("home", { title: 'Juice Shop' });
}

const loginView = (req, res) => {
    res.render("login", { title: 'login to your account' });
}

const signupView = (req, res) => {
    res.render("signup", { title: 'Create a new account' });
}

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.login(email, password);
        const token = createToken(user._id);
        const maxAge = 7 * 24 * 60 * 60
        res.cookie('token', token, { httpOnly: true, maxAge: maxAge * 1000, sameSite: true })
        console.log(user.username + ' has Been Successfully Logged in !')
        res.status(200).json({ user: user._id });
    }
    catch (err) {
        const errors = errorHandler(err);
        res.status(400).json({ errors })
    }
}

const signup = async (req, res) => {
    try {
        const user = await User.create(req.body);
        if (!user) { console.log('Registration failed') }
        const token = createToken(user._id);
        const maxAge = 7 * 24 * 60 * 60
        res.cookie('token', token, { httpOnly: true, maxAge: maxAge * 1000, sameSite: true })
        console.log(user.username + ' has Been Successfully Registered !')
        res.status(201).json({ user: user._id });

    }
    catch (err) {
        const signupErr = errorHandler(err);
        res.status(400).json({ signupErr });

    }
}

const logout = (req, res) => {
    const token = req.cookies.token;
    let decoded = jwt.decode(token);
    decoded.iat = 1;
    decoded.exp = 1;
    const newToken = jwt.sign(decoded.id, process.env.JWT_NEW_SECRET)
    res.cookie('token', newToken, { maxAge: 1 })
    res.redirect('/');
}


const smoothies = (req, res) => {
    res.render('smoothies', { title: 'Smoothies recipes' })
}

module.exports = {
    home,
    loginView,
    login,
    signupView,
    signup,
    smoothies,
    logout
}