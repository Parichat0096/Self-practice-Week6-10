const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPass = document.getElementById("confirm-password");
const submit = document.getElementById("submit");
const para = document.querySelector("p");

submit.addEventListener("click", (e) => {
  e.preventDefault(); 

  para.textContent = ""; 
  let errorText = "";

  if (
    !userName.value.trim() ||
    !email.value.trim() ||
    !password.value.trim() ||
    !confirmPass.value.trim()
  ) {
    errorText = "missing some values, please try again!";
  }
  
  else if (password.value !== confirmPass.value) {
    errorText = "password and confirm do not match, check again!";
  }

  
  if (errorText) {
    para.style.color = "red";
    para.textContent = errorText;
  } else {
    para.style.color = "green";
    para.textContent = "your data completed!";
  }
});
