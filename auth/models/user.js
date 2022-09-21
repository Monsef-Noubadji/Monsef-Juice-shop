const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { isEmail, isStrongPassword } = require('validator')
const bcrypt = require("bcrypt");

const userSchema = new Schema({
    username: {
        type: String,
        index: true,
        unique: true,
        required: [true, 'Username is required'],
        minLength: [3, 'Username must be at least 3 characters long']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        validate: [isStrongPassword, 'Password must be minimum 8 characters long , contains one digit , one lowercase letter, one uppercase letter and one special character']

    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
}, { timestamps: true })

userSchema.pre('save', function (next) {

    this.password = bcrypt.hashSync(this.password, 10, (err, res) => {
        if (err) throw err;
    })

    next();
});

// Create a static login method

userSchema.statics.login = async function (email, password) {
    const user = await this.findOne({ email })
    if (user) {
        const auth = bcrypt.compareSync(password, user.password)
        if (auth) {
            return user;
        }
        throw Error('Incorrect Password')
    }
    throw Error('Incorrect Email')
}

module.exports = User = mongoose.model('User', userSchema, 'Users')


