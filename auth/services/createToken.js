const jwt = require('jsonwebtoken');
require('dotenv').config()

const createToken = (id, maxAge = 7 * 24 * 60 * 60) => {
    const token = jwt.sign({ id }, process.env.JWT_SECRET,
        {
            expiresIn: maxAge
        });
    return token;
}
module.exports = createToken;