// app.get('/set-cookie', (req, res) => {
//     const token = jwt.sign('req.body', process.env.SECRET)
//     // {secure : true , sameSite : true}
//     res.cookie('User', token, { maxAge: 1000 * 48, httpOnly: true });
//     res.cookie('_gt_0_pa', "oegth#ertf%4fBDgTFd", { maxAge: 45000, httpOnly: true });
//     res.send('cookie created !')
// })

// app.get('/get-cookie', (req, res) => {
//     const cookies = req.cookies;
//     res.json({ cookies });
//     console.log(cookies);
// })

// get values
    // const username = form.username.value || '';


     // const existedEmail = req.body.email
        // await User.find({ "email": existedEmail });
        // if (user.email == existedEmail) {
        //     res.status(403).send('Email already used !');
        // }

// minlength: [6, 'Password length should be more than 6 characters'],

//  <form action="/search/">
//         <label for="search">Search</label>
//         <input type="text" name="key" placeholder="Search a user">
//         <button class="btn-search">Search</button>
//       </form> 