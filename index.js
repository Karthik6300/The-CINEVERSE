import {
  auth,
  sendPasswordResetEmail,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "./firebase.js";

// Select DOM elements
let signupForm = document.getElementById("signup");
let signinForm = document.getElementById("signin");
let toggleBtn = document.getElementById("toggle-btn");
let guest = document.getElementById("guest");
let formTitle = document.getElementById("form-title");

// Function to Show Toast Notification
function showToast(message, type = "success") {
  Toastify({
    text: message,
    duration: 5000,
    gravity: "top", // Position: "top" or "bottom"
    position: "center", // "left", "center", "right"
    close: true,
    style: {
      background: type === "success" ? "green" : "red",
      color: "white",
      borderRadius: "8px",
      padding: "10px",
    },
  }).showToast();
}

// Signup Form Submission
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // let password2 = document.getElementById("password2");
  let email = e.target[1].value;
  let password = e.target[2].value;
  let password2 = e.target[3].value;
  if (password !== password2) {
    showToast("⚠ Passwords do not match! ⚠");
    return;
  }
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      showToast("⌛ Please wait... Creating account ⌛", "success");
      showToast("😍 User registered successfully! 😍", "success");
      switchToLogin();
    })
    .catch((error) => {
      console.error(error);
      showToast("☠ Please enter valid credentials ☠", "error");
    });
});

// Login Form Submission
signinForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = e.target[0].value;
  let password = e.target[1].value;
  console.log(email, password);

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      showToast("⌛ Please wait... Logging in ⌛", "success");
      showToast("😍 Login successful! 😍", "success");
      location.assign("./home-page.html");
    })
    .catch((error) => {
      showToast("☠ Invalid Username or Password ☠", "error");
    });
});

// Toggle between Login & Signup Forms
toggleBtn.addEventListener("click", () => {
  let isSignupVisible = signupForm.style.display !== "none";
  signupForm.style.display = isSignupVisible ? "none" : "block";
  signinForm.style.display = isSignupVisible ? "block" : "none";
  formTitle.innerText = isSignupVisible ? "Login" : "Signup";
  toggleBtn.innerText = isSignupVisible
    ? "Don't have an account? Sign up"
    : "Already have an account? Login";
});

// Guest Mode Redirection
guest.addEventListener("click", () => {
  showToast("👤 Entering Guest Mode...", "please wait");
  location.assign("./home-page.html");
});

// Function to switch to Login Form after Signup
function switchToLogin() {
  signupForm.style.display = "none";
  signinForm.style.display = "block";
  formTitle.innerText = "Login";
  toggleBtn.innerText = "Don't have an account? Sign up";
}

//forget password

let reset = document.getElementById("reset");
reset.addEventListener("click", (event) => {
  event.preventDefault();
  let email = document.getElementById("mail").value;
  sendPasswordResetEmail(auth, email)
    .then(() => {
      alert("Email Successfully sent");
    })
    .catch((error) => {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      alert("Something went wrong, please check !");
    });
});
