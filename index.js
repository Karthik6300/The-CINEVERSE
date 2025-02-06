import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "./firebase.js";

// Select DOM elements
let signupForm = document.getElementById("signup");
let signinForm = document.getElementById("signin");
let toggleBtn = document.getElementById("toggle-btn");
let guest = document.getElementById("guest");
let formTitle = document.getElementById("form-title");

// Signup Form Submission
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = e.target[1].value; // Changed to get the correct email input
  let password = e.target[2].value; // Changed to get the correct password input

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("User registered successfully!");
      switchToLogin();
    })
    .catch((error) => {
      console.error(error);
      alert("Unable to register user");
    });
});

// Login Form Submission
signinForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = e.target[0].value;
  let password = e.target[1].value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login successful!");
      // Redirect to home page after login
      location.assign("./home-page.html");
    })
    .catch((error) => {
      alert("Invalid credentials");
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
  location.assign("./home-page.html");
});

// Function to switch to Login Form after Signup
function switchToLogin() {
  signupForm.style.display = "none";
  signinForm.style.display = "block";
  formTitle.innerText = "Login";
  toggleBtn.innerText = "Don't have an account? Sign up";
}
