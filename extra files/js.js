document.addEventListener("DOMContentLoaded", () => {
  fetch("https://speckle-prong-fir.glitch.me/movies")
    .then((response) => response.json())
    .then((data) => displayMovies(data))
    .catch((error) => console.error("Error fetching data:", error));
});

function displayMovies(movies) {
  const movieContainer = document.getElementById("movies");
  movieContainer.innerHTML = ""; // Clear previous content

  movies.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");

    // Use a default poster if the movie's poster is "N/A" or missing
    const posterUrl =
      movie.Poster && movie.Poster !== "N/A"
        ? movie.Poster
        : "https://via.placeholder.com/300x450?text=No+Image";

    movieCard.innerHTML = `
            <img src="${posterUrl}" alt="${movie.Title}" onerror="this.onerror=null; this.src='https://via.placeholder.com/300x450?text=Image+Not+Available';">
            <div class="movie-details">
                <h2>${movie.Title} (${movie.Year})</h2>
                <p><strong>Genre:</strong> ${movie.Genre}</p>
                <p><strong>Director:</strong> ${movie.Director}</p>
                <p><strong>IMDb Rating:</strong> ${movie.imdbRating}</p>
            </div>
        `;

    movieContainer.appendChild(movieCard);
  });
}

// -------------------------------------------------------fire base

// Import the functions you need from the SDKs you need
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
{
  /* import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js"; */
}
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYy7ZRigmQWUZAJ689XbHbaetNPtEJYUM",
  authDomain: "ceniverse-87ee7.firebaseapp.com",
  projectId: "ceniverse-87ee7",
  storageBucket: "ceniverse-87ee7.firebasestorage.app",
  messagingSenderId: "993197667643",
  appId: "1:993197667643:web:ff7b93414e5d1fcd4ef31e",
  measurementId: "G-B01KVGCFQK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); //intialisaing firebase authentication
//   const analytics = getAnalytics(app);
