const Local = "success";
const form = document.getElementById("form");
const usrError = document.querySelector(".username.error");
const emailError = document.querySelector(".email.error");
const pwdError = document.querySelector(".password.error");
const success = document.getElementById(Local);


// sign up error handler
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  usrError.textContent = "";
  emailError.textContent = "";
  pwdError.textContent = "";
  success.textContent = "";
  const username = form.username.value;
  const email = form.email.value;
  const password = form.password.value;
  try {
    const res = await fetch("/signup", {
      method: "POST",
      body: JSON.stringify({
        username,
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
      usrError.textContent = data.signupErr.username;
      emailError.textContent = data.signupErr.email;
      pwdError.textContent = data.signupErr.password;
      success.textContent = "Registration failed";
      success.style.backgroundColor = "Red";
    }
    if (data.user) {
      //make a div to show success message
      success.style.backgroundColor = '#23CE6B';
      success.textContent = "Successfully Registered ! Redirecting ..";
      location.assign("/");
    }
  } catch (err) {
    console.log(err);
  }
});