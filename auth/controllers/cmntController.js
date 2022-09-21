const Comment = require('../models/comment')
const User = require("../models/user")
const createComment = async (req, res, next) => {
    try {
        const commentvalue = req.body.comment;
        // const username = req.body.username;
        const user = await User.findById(req.body._id)
        const comment = await Comment.create({ username: user.username, value: commentvalue });
        console.log(comment)
        res.status(201).json({ comment })


    }
    catch (err) {
        console.log(err);
    }
    next();
}

module.exports = { createComment };