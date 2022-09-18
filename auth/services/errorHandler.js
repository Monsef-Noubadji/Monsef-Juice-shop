const errorHandler = (err) => {
    // Errors handling and validation
    console.log(err.message, err.code);
    let errors = { username: '', email: '', password: '' };

    // incorrect email or password
    if (err.message === 'Incorrect Email') {
        errors.email = 'This email doesn\'t exist in our records';
        delete errors.username;
    }

    if (err.message === 'Incorrect Password') {
        errors.password = 'Password is incorrect';
        delete errors.username;
    }

    // check for duplicates 
    if (err.code === 11000) {
        errors.email = 'Please use a different email'
        errors.username = 'Username is already taken'
        return errors;
    }
    // validation errors
    if (err.message.includes('User validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        })
    }
    return errors;

}

module.exports = errorHandler