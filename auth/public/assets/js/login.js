const newLocal = "form";
const Local = "success";
const form = document.getElementById(newLocal);
const emailError = document.querySelector(".email.error");
const pwdError = document.querySelector(".password.error");
const success = document.getElementById(Local);

// login error handler

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    //reset errors on submit
    emailError.textContent = "";
    pwdError.textContent = "";
    success.textContent = "";

    //get values
    const email = form.email.value;
    const password = form.password.value;
    try {
        const res = await fetch("/login", {
            method: "POST",
            body: JSON.stringify({
                email,
                password,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const data = await res.json();
        console.log(data);
        if (data.signupErr) {
            emailError.textContent = data.signupErr.email;
            pwdError.textContent = data.signupErr.password;
            success.textContent = "Login failed";
            success.style.backgroundColor = "Red";
        }
        if (data.user) {
            // show success message
            success.style.backgroundColor = "#23CE6B";
            success.textContent = "Successfully Logged in ! Redirecting ..";
            location.assign("/");
        }
    } catch (err) {
        console.log(err);
    }
});