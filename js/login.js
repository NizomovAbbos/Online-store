const API_PATH = 'http://localhost:5000/';
const loginForm = document.getElementById("login-form");

const loginEmail = loginForm.getElementById('login-email');
const loginPassword = loginForm.getElementById('login-password');

async function loginUser(){
  try {
    const res = await fetch(`${API_PATH}user/login`,{
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
          email: loginEmail.value,
          password: loginPassword.value,
        }),
      });
      const data = await res.json();
      console.log(data);
      if (data.token){
        localStorage.setItem("loginToken", data.token)
        window.location.href = "index.html";
      }else{
        alert("Email yoki passwordni xato kiritdingiz!")
      }
      } catch (error) {
    console.log(error.toString());
  }
}
  
loginForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    loginUser();
  });
