const API_PATH = 'http://localhost:5000/'
const registerForm = document.getElementById('register-form');

const userName = registerForm.querySelector(".js-register-name");
const userEmail = registerForm.querySelector(".js-register-email");
const userPhone = registerForm.querySelector(".js-register-phone");
const userPassword = registerForm.querySelector(".js-register-password");

async function registerUser(){
  try {
    const res = await fetch(`${API_PATH}user/register`,{
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_name: userName.value,
        email: userEmail.value,
        phone: userPhone.value,
        password: userPassword.value,
      }),
    });
    const data = await res.json();
    if (data){
      window.localStorage.setItem("token", data.token);
      window.location.href = "index.html";
    }
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

registerForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  registerUser();
});