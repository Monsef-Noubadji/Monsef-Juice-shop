const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
    username: {
        type: String,
        required: [true, 'please submit a username']
    },
    value: {
        type: String,
        required: [true, 'please submit a valid comment']
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
}, { timestamps: true })

module.exports = Comment = mongoose.model('Comment', commentSchema, 'Comments')
